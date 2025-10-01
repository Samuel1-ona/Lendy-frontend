import { FaRegCircleXmark } from "react-icons/fa6";

const WalletConnectFailed = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-100 p-4 border">
        <div className="flex items-center justify-end pb-2 mb-4">
          <button className="text-gray-500 hover:text-gray-700">✕</button>
        </div>

        <div className="p-3 bg-[#E24B2514] w-18 rounded-full ml-33  ">
          <FaRegCircleXmark className="text-red-500 text-5xl" />
        </div>
        <div className="text-center mt-3 mb-6">
          <p className="font-medium text-xl text-[#3B3B3B]">
            Unable to Connect Wallet
          </p>
          <p className="text-sm text-[#3B3B3B] mb-3">
            We &apos;re unable to connect your wallet at the moment
          </p>
        </div>

        <button className="w-45 ml-22 rounded-3xl bg-[#004D43] text-white py-2 font-medium hover:hover:bg-[#12684b] transition hover:scale-105">
          Try Again
        </button>
      </div>
    </div>
  );
};

export default WalletConnectFailed;
