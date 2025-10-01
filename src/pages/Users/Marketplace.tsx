import { Button } from "@/components/ui/button";
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

const Marketplace = () => {
  const navigate = useNavigate();
  const assets = [
    {
      asset: {
        name: "Super Bitcoin",
        value: "SBTC",
        icon: "/icons/crpt1.png",
      },
      totalSupply: "3.1",
      apy: "7%",
      apyBorrow: "6.7%",
    },
    {
      asset: {
        name: "Stack",
        value: "STK",
        icon: "/icons/crpt2.png",
      },
      totalSupply: "3.1",
      apy: "7%",
      apyBorrow: "6.7%",
    },
    {
      asset: {
        name: "Tether",
        value: "USDT",
        icon: "/icons/crpt4.png",
      },
      totalSupply: "3.1",
      apy: "7%",
      apyBorrow: "6.7%",
    },
    {
      asset: {
        name: "Bitcoin",
        value: "BTC",
        icon: "/icons/crpt3.png",
      },
      totalSupply: "3.1",
      apy: "7%",
      apyBorrow: "6.7%",
    },

    // Add more assets as needed
  ];

  return (
    <div className="bg-[#F6F6F6] min-h-screen pt-5 pb-10">
      <div className="bg-[#FFFFFF] rounded-md w-11/12 max-w-7xl mx-auto mb-5">
        <p className="pt-3 pb-2 pl-5 text-xl">Main Market</p>
        <div className="flex items-center justify-between mx-5 px-3 py-3 bg-[#E6EDEC] rounded-sm mb-5">
          <div className="flex gap-16">
            <div>
              <p className="text-[15px]">Total market size</p>
              <p className="font-medium text-lg">$54.67M</p>
            </div>
            <div>
              <p className="text-[15px]">Total Available</p>
              <p className="font-medium text-lg">$14.67M</p>
            </div>
            <div>
              <p className="text-[15px]">Total Borrows</p>
              <p className="font-medium text-lg">$18.67M</p>
            </div>
          </div>
        </div>

        {/* Assets Table */}
        <div className="mx-5 mb-8 pb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">All Assets</h3>
            <div className="flex items-center space-x-4">
              <Select>
                <SelectTrigger className="w-[150px]">
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
              <div className="relative">
                <Search className="w-5 h-5 absolute mt-1.5 text-[#E7E7E7] left-3" />
                <Input
                  placeholder="Search name, assets or symbol"
                  className="text-[10px] w-70 pl-10"
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-tr-3xl rounded-tl-2xl rounded-bl-2xl rounded-br-2xl border overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#E6EDEC]">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-light text-[#004D43]"
                  >
                    Asset
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-light  text-[#004D43]"
                  >
                    Total Supply
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-light  text-[#004D43]"
                  >
                    Supply APY
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-light  text-[#004D43]"
                  >
                    Total Borrowed
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-light  text-[#004D43]"
                  >
                    Borrow APY Variable
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left   text-[#004D43]"
                  ></th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200 ">
                {assets.map((asset, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={asset.asset.icon}
                          alt="cryptoIcon"
                          width={35}
                          height={35}
                        />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {asset.asset.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {asset.asset.value}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-[14px] text-gray-900">
                        <p>{asset.totalSupply}B</p>
                        <p>$4.15B</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm  font-medium ml-2">
                        {asset.apy}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-[14px] text-gray-900">
                        <p>{asset.totalSupply}B</p>
                        <p>$4.15B</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {asset.apyBorrow}
                    </td>
                    <td className="text-sm font-medium">
                      <Button
                        className="px-6 py-4  text-[#004D43] bg-[#E6EDEC] hover:bg-[#E6EDF2] ml-2"
                        onClick={() =>
                          navigate(
                            `/coin?value=${
                              asset.asset.value
                            }&name=${encodeURIComponent(
                              asset.asset.name
                            )}&icon=${encodeURIComponent(asset.asset.icon)}`
                          )
                        }
                      >
                        View Detail
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
