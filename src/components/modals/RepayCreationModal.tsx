import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ModalProps {
  setRepayVisible: (isVisible: boolean) => void;
  onSubmit: (success: boolean) => void;
}

const RepayCreationModal = ({ setRepayVisible, onSubmit }: ModalProps) => {
  const [activeTab, setActiveTab] = useState("wallet");

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-[400px] p-4">
        <div className="flex justify-between items-center  pb-2">
          <h2 className="text-gray-700 font-medium">Repay STX</h2>
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={() => setRepayVisible(false)}
          >
            ✕
          </button>
        </div>

        <div>
          <p className="text-sm text-gray-500 mt-6">Repay with</p>
          <div className="flex  bg-gray-100 rounded-lg overflow-hidden p-1">
            <button
              onClick={() => setActiveTab("wallet")}
              className={`w-1/2 py-2 text-sm font-medium ${
                activeTab === "wallet"
                  ? "bg-[#E6EDEC] text-[#004D43] border rounded-lg"
                  : "text-gray-500"
              }`}
            >
              Wallet Balance
            </button>
            <button
              onClick={() => setActiveTab("collateral")}
              className={`w-1/2 py-2 text-sm font-medium ${
                activeTab === "collateral"
                  ? "bg-[#E6EDEC] text-[#004D43] border rounded-lg"
                  : "text-gray-500"
              }`}
            >
              Collateral
            </button>
          </div>
        </div>

        {activeTab === "wallet" && (
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-sm text-gray-500">Available</p>
              <p className="flex items-center gap-2 font-medium text-gray-800">
                <span className="text-purple-600 py-2">
                  <img src="/icons/crpt2.png" alt="" width={30} height={30} />
                </span>
                100.23 <span className="text-[11px] text-gray-400">STX</span>
              </p>
            </div>

            <div className="relative">
              <input
                type="number"
                placeholder="0.00"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="absolute right-2 top-2 text-sm bg-[#E6EDEC] px-4  py-1 rounded-2xl text-gray-600 hover:bg-gray-200 transition">
                Max
              </button>
            </div>
            <div className="flex items-center gap-1 -mt-3 ml-2 ">
              <p className="text-xs text-gray-500 ">$0</p>
            </div>

            <p className="text-sm text-[#767676] mb-2">Transaction Overview</p>
            <div className="border rounded-lg p-3 bg-[#E6EDEC] text-sm">
              <div className="flex justify-between items-center">
                <p className="text-gray-500">Remaining debt</p>
                <div className=" flex items-center gap-2">
                  <p className="">
                    <p className="font-medium">80 STX </p>
                    <p className="font-light  text-[12px]">$192.01 </p>
                  </p>
                  <FaArrowRight className="text-gray-400" />
                  <p className="">
                    <p className="font-medium">80 STX </p>
                    <p className="font-light text-[12px]">$192.01 </p>
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Health Factor</span>
                </div>
                <div className="flex flex-col text-right justify-end">
                  <span className="font-medium text-green-800 text-[12px]">
                    3.32
                  </span>
                  <span className="text-[13px] text-[#3B3B3B]">
                    Liquidation at &lt;1.0
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 -mt-3 ml-2 mb-5 ">
              <img src="/icons/gas.png" alt="" className="w-4 h-4" />
              <p className="text-xs text-gray-500 ">$0</p>
            </div>
          </div>
        )}

        {/* Collateral View */}
        {activeTab === "collateral" && (
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-sm text-gray-500">Borrow Amount</p>
              <p className="flex items-center gap-2 font-medium text-gray-800">
                <span className="text-purple-600 py-2">
                  <img src="/icons/crpt2.png" alt="" width={30} height={30} />
                </span>
                100.23 <span className="text-[11px] text-gray-400">STX</span>
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Asset to Repay</p>
              <div className="border rounded-lg px-3  flex items-center gap-2 bg-[#F6F6F6]">
                <img src="/icons/crpt1.png" alt="Stacks" className="w-8 h-8" />
                <span>
                  <p>Stacks</p>
                  <p>SBTC</p>
                </span>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500">Collateral to Use</p>
              <Select>
                <SelectTrigger className="w-[370px]">
                  <SelectValue
                    placeholder="All Categories"
                    className="text-medium outline-none"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Assets</SelectLabel>
                    <SelectItem value="BTC">BTC</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="relative">
              <input
                type="number"
                placeholder="0.00"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="absolute right-2 top-2 text-sm bg-[#E6EDEC] px-4  py-1 rounded-2xl text-gray-600 hover:bg-gray-200 transition">
                Max
              </button>
            </div>
            <div className="flex items-center gap-1 -mt-3 ml-2 ">
              <p className="text-xs text-gray-500 ">$0</p>
            </div>

            <p className="text-sm text-[#767676] mb-2">Transaction Overview</p>
            <div className="border rounded-lg p-3 bg-[#E6EDEC] text-sm">
              <div className="flex justify-between items-center">
                <p className="text-gray-500">Remaining debt</p>
                <div className=" flex items-center gap-2">
                  <p className="">
                    <p className="font-medium">80 STX </p>
                    <p className="font-light  text-[12px]">$192.01 </p>
                  </p>
                  <FaArrowRight className="text-gray-400" />
                  <p className="">
                    <p className="font-medium">80 STX </p>
                    <p className="font-light text-[12px]">$192.01 </p>
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Health Factor</span>
                </div>
                <div className="flex flex-col text-right justify-end">
                  <span className="font-medium text-green-800 text-[12px]">
                    3.32
                  </span>
                  <span className="text-[13px] text-[#3B3B3B]">
                    Liquidation at &lt; 1.0
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Proceed Button */}
        <button
          className="mt-5 w-full bg-[#004D43] text-white py-2 rounded-3xl hover:bg-[#12684b] transition hover:scale-105"
          // onClick={() => {
          //   const success = Math.random() > 0.5;
          //   onSubmit(success);
          // }}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default RepayCreationModal;
