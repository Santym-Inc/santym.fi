import { ApolloProvider } from '@apollo/client';
import {
  ContractKitProvider,
  Alfajores,
  Mainnet,
  Baklava,
  useContractKit,
} from '@celo-tools/use-contractkit';
import Image from 'next/image';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Base } from '../state';
import { truncateAddress } from '../utils';
import { DropButton } from './dropdown';
import { PulsatingDot } from './pulsating-dot';

interface SidebarOption {
  name: string;
  icon: any;
  disabled?: boolean;
  badge?: any;
  link: string;
  strict?: boolean;
}
export function Sidebar({ items }: { items: SidebarOption[] }) {
  const location = useLocation();

  return (
    <aside className="sm:px-6 md:pb-4 lg:px-0 lg:col-span-3">
      <nav className="hidden md:block space-y-1">
        {items.map((item) => (
          <Link to={item.disabled ? location.pathname : item.link}>
            <span
              className={`${
                (item.strict && location.pathname === item.link) ||
                (!item.strict && location.pathname.startsWith(item.link))
                  ? 'bg-gray-300 dark:bg-gray-600'
                  : item.disabled
                  ? ''
                  : 'hover:bg-gray-200 dark:hover:bg-gray-900 transition cursor-pointer'
              } w-full group rounded-md px-3 py-2 flex items-center text-sm font-medium focus:outline-none `}
            >
              <span className="mr-4">{item.icon}</span>

              <span className="truncate">
                {item.name}

                {item.disabled ? (
                  <span className="text-xs font-medium ml-2 text-purple-500">
                    SOON
                  </span>
                ) : item.badge ? (
                  <span className="text-xs font-medium ml-2 text-purple-500">
                    {item.badge}
                  </span>
                ) : null}
              </span>
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

const tabs: SidebarOption[] = [
  {
    name: 'Home',
    icon: (
      <svg
        className="h-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    link: '/',
    strict: true,
  },
  {
    name: 'Transfer',
    icon: (
      <svg
        className="h-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    link: '/transfer',
  },
  {
    name: 'Swap',
    icon: (
      <svg
        className="h-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
    link: '/swap',
  },
  {
    name: 'Swap2',
    icon: (
      <svg
        className="h-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
    link: '/swa9',
  },
  {
    name: 'Mint',
    icon: (
      <svg
        className="h-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    link: '/mint',
  },
  {
    name: 'Burn',
    icon: (
      <svg
        className="h-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    link: '/burn',
  },
  {
    name: 'Settings',
    icon: (
      <svg
        className="h-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    link: '/settings',
    strict: true,
  },
];

export function WithAppLayout({ children }) {
  const menuRef = useRef(null);
  const { settings } = Base.useContainer();
  const { network, address, destroy, connect, connectionCallback } =
    useContractKit();
  const [healthy, setHealthy] = useState(true);
  const [menu, setMenu] = useState(false);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    setMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (!menu) {
        return;
      }
      // @ts-ignore
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuRef.current, menu]);

  useEffect(() => {
    async function healthCheck() {
      const result = await fetch(network.rpcUrl).catch((e) => ({
        status: 500,
      }));
      if (result.status === 200) {
        setHealthy(true);
      } else {
        setHealthy(false);
      }
    }

    healthCheck();
    const intervalId = setInterval(healthCheck, 10000);
    return () => clearInterval(intervalId);
  }, [network]);

  return (
    <div
      className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 flex flex-col"
      style={{ minHeight: '100vh' }}
    >
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: settings.darkMode ? '#2a374a' : 'white',
            width: '22rem',
            padding: '0px',
          },
        }}
      />

      {!address && !connectionCallback && (
        <div className="md:hidden rounded-full fixed right-6 bottom-6 z-50 overflow-hidden">
          <button className="primary-button" onClick={connect}>
            Connect
          </button>
        </div>
      )}

      <header>
        {menu && (
          <div
            style={{ zIndex: 100 }}
            ref={menuRef}
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="relative rounded-lg shadow-md bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 overflow-hidden">
              <button
                type="button"
                onClick={() => setMenu(false)}
                className="absolute right-2 top-2 rounded-md p-2 inline-flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Close menu</span>
                {/* Heroicon name: outline/x */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="px-4 py-4">
                {tabs.map((t) => (
                  <Link to={t.link}>
                    <span
                      className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium ${
                        (t.strict && location.pathname === t.link) ||
                        (!t.strict && location.pathname.startsWith(t.link))
                          ? 'text-indigo-600'
                          : ``
                      }`}
                    >
                      <span>{t.icon}</span>
                      <span>{t.name}</span>
                      {t.disabled ? (
                        <span className="font-medium text-xs text-indigo-500">
                          COMING SOON
                        </span>
                      ) : t.badge ? (
                        <span className="font-medium text-xs text-indigo-500">
                          {t.badge}
                        </span>
                      ) : null}
                    </span>
                  </Link>
                ))}
              </div>

              {address && (
                <>
                  <div
                    className="mx-auto bg-gray-200 dark:bg-gray-800"
                    style={{ height: '1px', width: '90%' }}
                  ></div>
                  <div className="flex px-4 py-4">
                    <button className=" ml-auto" onClick={destroy}>
                      Logout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        <div className="max-w-screen-lg mx-auto px-2 md:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
          <div className="relative h-16 flex justify-between">
            <div className="relative z-10 px-2 flex lg:px-0">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/">
                  <span className="inline-flex">
                    <Image src="/logo.png" height={'24px'} width={'24px'} />
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex items-center md:space-x-6">
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex">
                  <div className={healthy ? 'text-green-600' : 'text-red-600'}>
                    <PulsatingDot />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setMenu(true)}
                  className="md:hidden rounded-md p-2 inline-flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Heroicon name: outline/menu */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              {!address && (
                <button
                  onClick={connect}
                  className="hidden md:inline-block primary-button"
                >
                  Connect
                </button>
              )}

              {address && (
                <div className="hidden md:flex">
                  <DropButton
                    display={truncateAddress(address)}
                    groups={[
                      [
                        {
                          text: 'Settings',
                          onClick: () => history.push('/settings'),
                        },
                        { text: 'Logout', onClick: destroy },
                      ],
                    ]}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="w-full md:max-w-screen-lg mx-auto flex-grow py-6 md:py-8 px-2 md:px-4 lg:px-8">
        {children}
      </div>

      <footer className="dark:bg-gray-850 pb-12 md:pb-0">
        <div className="max-w-screen-lg mx-auto py-8 px-4 space-y-8 md:space-y-0 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:mt-0">
            <div className="flex items-center">
              <Image src="/logo.png" height="24px" width="24px" />
              <p className="text-center text-base font-medium ml-2">Santym</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Santym-Inc/santym.fi"
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com/TwittSantym"
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function WithApollo({ children }: any) {
  const { graphql } = Base.useContainer();

  return (
    <ApolloProvider client={graphql}>
      <WithAppLayout>{children}</WithAppLayout>
    </ApolloProvider>
  );
}

function WithSidebar({ children }: any) {
  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
      <Sidebar items={tabs} />

      <div className="space-y-6 lg:px-0 lg:col-span-9">{children}</div>
    </div>
  );
}

export const WithLayout = ({ children }: any) => (
  <ContractKitProvider
    dappName="Santym"
    dappDescription="The DeFi dashboard for Celo"
    dappUrl="https://santym.fi"
    networks={[Mainnet, Alfajores, Baklava]}
  >
    <Base.Provider>
      <WithApollo>
        <WithSidebar>{children}</WithSidebar>
      </WithApollo>
    </Base.Provider>
  </ContractKitProvider>
);
