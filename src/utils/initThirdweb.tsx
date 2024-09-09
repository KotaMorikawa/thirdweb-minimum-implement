import { createThirdwebClient, defineChain } from "thirdweb";
import { createWallet, inAppWallet } from "thirdweb/wallets";

export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID
    ? process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID
    : "",
});

export const wallets = [
  createWallet("walletConnect"),
  inAppWallet({
    auth: {
      options: ["email", "google", "apple"],
    },
  }),
];

export const chain = defineChain({
  id: 5039,
  rpc: "https://subnets.avax.network/onigiri/testnet/rpc",
  name: "ONIGIRI Testnet",
  icon: {
    url: "/onigiri.png",
    width: 64,
    height: 64,
    format: "png",
  },
  nativeCurrency: {
    name: "ONIGIRI",
    symbol: "ONIGIRI",
    decimals: 18,
  },
  blockExplorers: [
    {
      name: "ONIGIRI Explorer",
      url: "https://subnets-test.avax.network/onigiri",
    },
  ],
  testnet: true,
});
