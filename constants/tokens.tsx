import { NetworkNames } from '@celo-tools/use-contractkit';

export enum TokenTicker {
  cETB = 'cETB',
  cKSH = 'cKSH',
  cUSD = 'cUSD',
  cEUR = 'cEUR',
  CELO = 'CELO',
}

export interface Token {
  ticker: TokenTicker;
  name: string;
  networks: {
    [key in NetworkNames]?: string;
  };
  treasuryAddress?: string;
}

export const Celo: Token = {
  ticker: TokenTicker.CELO,
  name: 'Celo',
  networks: {
    [NetworkNames.Alfajores]: '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9',
    [NetworkNames.Mainnet]: '0x471EcE3750Da237f93B8E339c536989b8978a438',
    [NetworkNames.Baklava]: '0xdDc9bE57f553fe75752D61606B94CBD7e0264eF8',
  },
  treasuryAddress: '0xC51D8479bA67beB6D383A46CF9331Fec6E835d16',
};

export const cUSD: Token = {
  ticker: TokenTicker.cUSD,
  name: 'Celo Dollar',
  networks: {
    [NetworkNames.Alfajores]: '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1',
    [NetworkNames.Mainnet]: '0x765DE816845861e75A25fCA122bb6898B8B1282a',
    [NetworkNames.Baklava]: '0x62492A644A588FD904270BeD06ad52B9abfEA1aE',
  },
  treasuryAddress: '0xC51D8479bA67beB6D383A46CF9331Fec6E835d16',
};

export const cEUR: Token = {
  ticker: TokenTicker.cEUR,
  name: 'Celo Euro',
  networks: {
    [NetworkNames.Alfajores]: '0x10c892a6ec43a53e45d0b916b4b7d383b1b78c0f',
    [NetworkNames.Mainnet]: '0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73',
    [NetworkNames.Baklava]: '0xf9ecE301247aD2CE21894941830A2470f4E774ca',
  },
  treasuryAddress: '0xC51D8479bA67beB6D383A46CF9331Fec6E835d16',
};

export const cETB: Token = {
  ticker: TokenTicker.cETB,
  name: 'Ethiopian Birr',
  networks: {
    [NetworkNames.Alfajores]: '0x6d844918a5E91c1F700659Bb6b602c80A4B161C3',
  },
  treasuryAddress: '0xC51D8479bA67beB6D383A46CF9331Fec6E835d16',
};

export const cKSH: Token = {
  ticker: TokenTicker.cKSH,
  name: 'Kenyan Shilling',
  networks: {
    [NetworkNames.Alfajores]: '0xd45c0D7a132bf709d90fa53AABE39692605D4ac5',
  },
  treasuryAddress: '0xC51D8479bA67beB6D383A46CF9331Fec6E835d16',
};

export const tokens: Token[] = [cETB, cKSH, cUSD, cEUR, Celo];

export enum FiatCurrency {
  USD = 'USD',
  EUR = 'EUR',
  ETB = 'ETB',
  KSH = 'KSH',
}
