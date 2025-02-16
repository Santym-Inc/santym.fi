import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Network, useContractKit } from '@celo-tools/use-contractkit';
import { Address, eqAddress } from '@celo/base';
import { AddressUtils } from '@celo/utils';
import BigNumber from 'bignumber.js';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { createContainer } from 'unstated-next';
import { FiatCurrency, tokens } from '../constants';
import ERC20 from '../utils/abis/ERC20.json';

function getApolloClient(n: Network) {
  return new ApolloClient({
    uri: n.graphQl,
    cache: new InMemoryCache(),
  });
}

interface AccountSummary {
  address: string;
  name: string;
  wallet: Address;
  dataEncryptionKey: string;
}

const defaultAccountSummary = {
  address: AddressUtils.NULL_ADDRESS,
  name: '',
  wallet: AddressUtils.NULL_ADDRESS,
  dataEncryptionKey: AddressUtils.NULL_ADDRESS,
};

const defaultBalances = tokens.reduce(
  (accum, cur) => ({
    ...accum,
    [cur.ticker]: new BigNumber(0),
  }),
  {}
);
const defaultLockedSummary = {
  total: new BigNumber(0),
  nonVoting: new BigNumber(0),
  withdrawable: new BigNumber(0),
  unlocking: new BigNumber(0),
};

const defaultSettings = {
  currency: FiatCurrency.ETB,
  darkMode: false,
};
const LOCALSTORAGE_KEY = 'santym/settings';
let localSettings = {};
if (typeof localStorage !== 'undefined') {
  localSettings = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || '{}');
}
const initialSettings = {
  ...defaultSettings,
  ...localSettings,
};

function State() {
  const { network, kit, address } = useContractKit();
  const [graphql, setGraphql] = useState(getApolloClient(network));
  const [settings, setSettings] = useState(initialSettings);

  const [accountSummary, setAccountSummary] = useState<AccountSummary>(
    defaultAccountSummary
  );
  const [balances, setBalances] = useState<{
    [x: string]: BigNumber;
  }>(defaultBalances);
  const [fetchingBalances, setFetchingBalances] = useState(false);

  useEffect(() => {
    setGraphql(getApolloClient(network));
  }, [network]);

  const fetchBalances = useCallback(async () => {
    if (!address) {
      return;
    }

    setFetchingBalances(true);

    try {
      const goldToken = await kit.contracts.getGoldToken();
      const erc20s = await Promise.all(
        tokens
          .filter((t) => !!t.networks[network.name])
          .map(async (t) => {
            const tokenAddress = t.networks[network.name];
            let balance;
            // this is due to a bug where erc20.balanceOf on native asset
            // is way off.
            if (eqAddress(tokenAddress, goldToken.address)) {
              balance = await goldToken.balanceOf(address);
            } else {
              const erc20 = new kit.web3.eth.Contract(
                ERC20 as any,
                tokenAddress
              );
              balance = await erc20.methods.balanceOf(address).call();
            }

            return {
              ...t,
              balance,
            };
          })
      );

      const balances = erc20s.reduce((accum, t) => {
        return {
          ...accum,
          [t.ticker]: new BigNumber(t.balance),
        };
      }, {});

      setBalances({
        ...defaultBalances,
        ...balances,
      });
    } catch (e) {
      toast.error(e.message);
    }

    setFetchingBalances(false);
  }, [address, network, kit]);

  const fetchAccountSummary = useCallback(async () => {
    if (!address) {
      return;
    }

    const accounts = await kit.contracts.getAccounts();
    try {
      setAccountSummary(await accounts.getAccountSummary(address));
    } catch (_) {}
  }, [kit, address]);

  const updateSetting = useCallback(
    (property: string, value: any) => {
      setSettings((s) => {
        const newSettings = { ...s, [property]: value };
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newSettings));
        return newSettings;
      });
      localStorage;
    },
    [settings]
  );

  const track = useCallback(
    (event: string, props: any = {}) => {
      // @ts-ignore
      window.plausible(event, {
        props: {
          ...props,
          network: network.name,
        },
      });
    },
    [network]
  );

  const toggleDarkMode = useCallback(() => {
    track('santym/change-theme');
    if (settings.darkMode) {
      document.querySelector('html').classList.remove('dark');
      updateSetting('darkMode', false);
    } else {
      document.querySelector('html').classList.add('dark');
      updateSetting('darkMode', true);
    }
  }, [settings, updateSetting, track]);

  const updateDefaultFiatCurrency = useCallback(
    (c: FiatCurrency) => {
      track('santym/change-currency');
      updateSetting('currency', c);
    },
    [updateSetting]
  );

  useEffect(() => {
    fetchAccountSummary();
    fetchBalances();
  }, [fetchAccountSummary, fetchBalances]);

  return {
    graphql,
    accountSummary,
    fetchAccountSummary,

    fetchBalances,
    balances,
    fetchingBalances,

    toggleDarkMode,
    updateDefaultFiatCurrency,
    settings,

    track,
  };
}

export const Base = createContainer(State);
