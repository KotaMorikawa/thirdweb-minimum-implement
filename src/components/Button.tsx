"use client";

import { chain, client, wallets } from "@/utils/initThirdweb";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";

export const Button = () => {
  return (
    <>
      <ConnectButton
        client={client}
        wallets={wallets}
        chain={chain}
        connectModal={{
          size: "compact",
        }}
        recommendedWallets={[createWallet("walletConnect")]}
        showAllWallets={false}
      />
    </>
  );
};
