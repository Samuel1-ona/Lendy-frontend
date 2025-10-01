import { useLocation, Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useState } from "react";
import ConnectingWallet from "../modals/ConnectingWallet";

const NavMenu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    key: "dashboard",
  },
  {
    title: "Marketplace",
    path: "/market",
    key: "market",
  },
];

const Navbar = () => {
  const location = useLocation();
  const isConnected = false;
  const [showConnecting, setShowConnecting] = useState(false);

  return (
    <div className="flex justify-between px-20 py-4 border-b border-[#004D433D]">
      <img src="/images/Logo.png" alt="logo" />
      <div className="flex gap-15 items-center font-clash cursor-pointer">
        {NavMenu.map((item) => (
          <Link
            key={item.key}
            to={item.path}
            className={`${
              location.pathname === item.path
                ? "bg-[#F9F9F9] px-3 py-1.5 rounded-3xl hover:scale-101"
                : ""
            } hover:bg-gray-200 hover:px-3 hover:py-1.5 hover:rounded-3xl`}
          >
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
      {isConnected ? (
        <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 shadow-sm">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-700 flex items-center justify-center text-white font-bold"></div>

          <span className="text-sm font-medium text-gray-700">0x12...34AB</span>
        </div>
      ) : (
        <Button
          className="bg-gradient-to-b from-[#96E3DA]  via-[#96E3DA] to-[#004D43] rounded-4xl px-8 py-5 hover:scale-105 border border-[#004D43]"
          onClick={() => setShowConnecting(true)}
        >
          Connect Wallet
        </Button>
      )}
      {showConnecting && (
        <ConnectingWallet onClose={() => setShowConnecting(false)} />
      )}
    </div>
  );
};

export default Navbar;
