import { Button } from "@/components/ui/button";
import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const History = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F6F6F6] pt-10">
      <Button
        className="flex items-center text-[#767676] gap-2 bg-trasparent text-light border hover:bg-[#767676] px-9 ml-20 "
        onClick={() => navigate("/market")}
      >
        <FaChevronLeft />
        Back
      </Button>
      <div className="bg-white rounded-xl shadow p-4 mt-10 w-285 ml-20">
        <div className="flex justify-between">
          <h2 className="text-gray-700 text-[18px] font-light mb-4">
            Transactions
          </h2>

          <div className="flex items-center space-x-4">
            <Select>
              <SelectTrigger className="w-[100px]">
                <SelectValue
                  placeholder="All"
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
            <div className="relative">
              <Search className="w-5 h-5 absolute mt-1.5 text-[#E7E7E7] left-3" />
              <Input
                placeholder="Search name, assets or symbol"
                className="text-[10px] w-60 pl-10"
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-500 text-sm bg-[#F6F6F6] w-15 text-center rounded-xl px-2 font-medium mb-2">
            Today
          </p>

          <div className="border rounded-md ">
            <div className="flex items-center justify-between border-b py-3 px-5 ">
              <div className="flex items-center gap-3">
                <img src="/icons/crpt1.png" alt="SBTC" className="w-8 h-8" />
                <div className="flex items-center gap-30">
                  <div>
                    <p className="font-medium text-gray-800">+50,000.0 </p>
                    <p>SBTC</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Supply</p>
                    <p>12:23pm</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[15px] text-gray-500">Hash</p>
                <button className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-lg hover:bg-gray-200">
                  0x3b9a...2ef →
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between border-b py-3 px-5 ">
              <div className="flex items-center gap-3">
                <img src="/icons/crpt2.png" alt="STX" className="w-8 h-8" />
                <div className="flex items-center gap-30">
                  <div>
                    <p className="font-medium text-gray-800">+50,000.0 </p>
                    <p>STX</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Withdraw</p>
                    <p>12:23pm</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[15px] text-gray-500">Hash</p>
                <button className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-lg hover:bg-gray-200">
                  0x3b9a...2ef →
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between border-b py-3 px-5 ">
              <div className="flex items-center gap-3">
                <img src="/icons/crpt4.png" alt="USDT" className="w-8 h-8" />
                <div className="flex items-center gap-30">
                  <div>
                    <p className="font-medium text-gray-800">+50,000.0 </p>
                    <p>USDT</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Borrow</p>
                    <p>12:23pm</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[15px] text-gray-500">Hash</p>
                <button className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-lg hover:bg-gray-200">
                  0x3b9a...2ef →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-500 text-sm bg-[#F6F6F6] w-20 text-center rounded-xl px-2 font-medium mb-2">
            24 Sept
          </p>

          <div className="border rounded-md ">
            <div className="flex items-center justify-between border-b py-3 px-5 ">
              <div className="flex items-center gap-3">
                <img src="/icons/crpt1.png" alt="SBTC" className="w-8 h-8" />
                <div className="flex items-center gap-30">
                  <div>
                    <p className="font-medium text-gray-800">+50,000.0 </p>
                    <p>SBTC</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Supply</p>
                    <p>12:23pm</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[15px] text-gray-500">Hash</p>
                <button className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-lg hover:bg-gray-200">
                  0x3b9a...2ef →
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between border-b py-3 px-5 ">
              <div className="flex items-center gap-3">
                <img src="/icons/crpt2.png" alt="STX" className="w-8 h-8" />
                <div className="flex items-center gap-30">
                  <div>
                    <p className="font-medium text-gray-800">+50,000.0 </p>
                    <p>STX</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Withdraw</p>
                    <p>12:23pm</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[15px] text-gray-500">Hash</p>
                <button className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-lg hover:bg-gray-200">
                  0x3b9a...2ef →
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between border-b py-3 px-5 ">
              <div className="flex items-center gap-3">
                <img src="/icons/crpt4.png" alt="USDT" className="w-8 h-8" />
                <div className="flex items-center gap-30">
                  <div>
                    <p className="font-medium text-gray-800">+50,000.0 </p>
                    <p>USDT</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Borrow</p>
                    <p>12:23pm</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[15px] text-gray-500">Hash</p>
                <button className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-lg hover:bg-gray-200">
                  0x3b9a...2ef →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
