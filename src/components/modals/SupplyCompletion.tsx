import { BsCheckCircle } from "react-icons/bs";

const SupplyCompletion = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-100 p-4 border">
        <div className="flex items-center justify-end pb-2 mb-4">
          <button className="text-gray-500 hover:text-gray-700">✕</button>
        </div>

        <div className="p-3 bg-[#E6EDEC] w-18 rounded-full ml-33 mt-10">
          <BsCheckCircle className="text-[#004D43] text-5xl" />
        </div>
        <div className="text-center mt-3">
          <p className="font-medium text-xl text-[#3B3B3B]">
            Supply Sucessfull
          </p>
          <p className="text-sm text-[#3B3B3B]">You supplied 100.11 SBTC</p>
        </div>

        <div className="mb-5 border rounded-md bg-[#E6EDEC] p-3 text-sm mt-3 ">
          <div className="flex justify-between ">
            <p className=" text-[#767676]">
              An NFT has been created in your wallet to record this transaction
            </p>
          </div>
        </div>

        <button className="w-full rounded-3xl bg-[#004D43] text-white py-2 font-medium hover:hover:bg-[#12684b] transition hover:scale-105">
          Done
        </button>
      </div>
    </div>
  );
};

export default SupplyCompletion;
