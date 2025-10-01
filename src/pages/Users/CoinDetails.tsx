import SupplyInfo from "@/components/shared/SupplyInfo";
import { FaChevronLeft } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ConnectingWallet from "@/components/modals/ConnectingWallet";

const CoinDetails = () => {
  const [searchParams] = useSearchParams();
  const value = searchParams.get("value");
  const name = searchParams.get("name");
  const icon = searchParams.get("icon");
  const navigate = useNavigate();
  const isConnected = false;
  const [showConnecting, setShowConnecting] = useState(false);

  return (
    <div className="bg-[#F6F6F6] pt-10">
      <Button
        className="flex items-center text-[#767676] gap-2 bg-trasparent text-light border hover:bg-[#767676] px-9 ml-20 "
        onClick={() => navigate("/market")}
      >
        <FaChevronLeft />
        Back
      </Button>
      <div className="flex gap-15 bg-white py-2 pr-3  rounded-lg ml-20 w-full max-w-6xl  mt-5 mb-5">
        <div className="flex items-center mb-4 ml-6">
          {icon && <img src={icon} width={40} height={40} className="mr-4" />}
          <span className="text-sm font-medium">
            <p>{name || "Unknown"}</p>
            <p className="font-light">{value || "N/A"}</p>
          </span>
        </div>
        <div className="flex gap-40 bg-[#E6EDEC] w-250 py-3 rounded-md ml-10">
          <div className="ml-5">
            <p className="text-sm">Available Liquidation</p>
            <p className="font-medium">$3.10B</p>
          </div>
          <div>
            <p className="text-sm">Oracle Price</p>
            <p className="font-medium">$3.10B</p>
          </div>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="bg-white w-170 ml-20 rounded-xl p-5 space-y-8">
          <p>Reserve Details</p>
          <SupplyInfo title="Supply Info" />
          <SupplyInfo title="Borrow Info" />
          <SupplyInfo title="Intrest Rate Mode" />
        </div>
        <div>
          {isConnected ? (
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-md bg-gray-100">
                  <img src="/icons/wallet.png" alt="walletIcon" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Your Profile
                </h3>
              </div>
              <div className="flex items-center gap-10 bg-[#F6F6F6] p-1 w-100 rounded-md">
                <p className="bg-[#E7E7E7] px-12 py-1 rounded-md hover:bg-gray-300">
                  BTC
                </p>
                <p className="hover:px-10 hover:py-1 hover:rounded-md hover:bg-[#E7E7E7] pl-5">
                  SBTC
                </p>
                <p className="hover:px-10 hover:py-1 hover:rounded-md hover:bg-[#E7E7E7] pl-5">
                  STX
                </p>
              </div>
              <div className="py-5 ">
                <p className="text-[12px]">Wallet Balance</p>
                <p className="font-medium">170.00 BTC</p>
                <p className="text-[12px]">$800.83M</p>
              </div>
              <hr />
              <div className="flex items-center justify-between">
                <div className="py-5 ">
                  <p className="text-[12px]">Wallet Balance</p>
                  <p className="font-medium">170.00 BTC</p>
                  <p className="text-[12px]">$800.83M</p>
                </div>
                <Button className="bg-[#2B6B63] text-white hover:bg-green-900 px-6">
                  Supply
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="py-5 ">
                  <p className="text-[12px]">Wallet Balance</p>
                  <p className="font-medium">170.00 BTC</p>
                  <p className="text-[12px]">$800.83M</p>
                </div>
                <Button className="bg-[#2B6B63] text-white hover:bg-green-900 px-6">
                  Borrow
                </Button>
              </div>
              <p className="text-[#004D43] text-[12px] bg-[#E6EDEC] p-3 rounded-md">
                Your wallet is empty. To get started, you can purchase or
                transfer some assets.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-md bg-gray-100">
                  <img src="/icons/wallet.png" alt="walletIcon" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Your Profile
                </h3>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                Connect your crypto wallet to securely access and view your
                personal information.
              </p>

              <Button
                className="px-10 rounded-3xl  bg-[#004D43] text-white py-4 font-medium hover:bg-[#12684b] transition hover:scale-105"
                onClick={() => setShowConnecting(true)}
              >
                Connect Wallet
              </Button>
            </div>
          )}
        </div>
      </div>
      {showConnecting && (
        <ConnectingWallet onClose={() => setShowConnecting(false)} />
      )}
    </div>
  );
};

export default CoinDetails;
