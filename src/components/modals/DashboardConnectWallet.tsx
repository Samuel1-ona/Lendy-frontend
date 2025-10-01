import { Button } from "../ui/button";
import { useState } from "react";
import ConnectingWallet from "./ConnectingWallet";

const DashboardConnectWallet = () => {
  const [showConnecting, setShowConnecting] = useState(false);

  return (
    <>
      <div className="fixed inset-0 mt-18.5 flex items-center justify-center bg-black/50 z-50">
        <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-2 rounded-md bg-gray-100">
              <img src="/icons/wallet.png" alt="walletIcon" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Access Your Dashboard
            </h3>
          </div>

          <p className="text-sm text-gray-600 mb-6">
            Connect your wallet to view your current supplies, borrowings, and
            open positions in the protocol.
          </p>

          <Button
            className="px-10 rounded-3xl  bg-[#004D43] text-white py-4 font-medium hover:bg-[#12684b] transition hover:scale-105"
            onClick={() => setShowConnecting(true)}
          >
            Connect Wallet
          </Button>
        </div>
      </div>
      {showConnecting && (
        <ConnectingWallet onClose={() => setShowConnecting(false)} />
      )}
    </>
  );
};

export default DashboardConnectWallet;
