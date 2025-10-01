import { Button } from "@/components/ui/button";
import DashboardCoins from "@/components/shared/DashboardCoins";
import { useEffect } from "react";
const Dashboard = () => {
  const isConnected = true;
  useEffect(() => {
    document.body.style.overflow = isConnected ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isConnected]);
  return (
    <div
      className="bg-[#F6F6F6] h-200 pt-5"
      style={{ overflow: isConnected ? "auto" : "hidden" }}
    >
      <div className="bg-[#FFFFFF] rounded-md w-288 ml-19 pb-3">
        <p className="pt-3 pb-2 pl-5 text-xl">Dashboard</p>
        <div className="flex items-center justify-between mx-5 px-3 py-3 bg-[#E6EDEC] rounded-sm">
          <div className="flex gap-30">
            <div>
              <p className="text-[15px]">New Worth</p>
              <p className="font-medium text-lg">$54.67</p>
            </div>
            <div>
              <p className="text-[15px]">Net APY</p>
              <p className="font-medium text-lg">$14.67</p>
            </div>
          </div>
          <Button className="bg-transparent hover:bg-gray-300 border border-[#9E9E9E] text-[#767676]">
            All Transaction
          </Button>
        </div>
      </div>
      <DashboardCoins isConnected={isConnected} />
    </div>
  );
};

export default Dashboard;
