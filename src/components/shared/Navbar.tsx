import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between px-20 py-4 border-b border-[#004D433D]">
      <img src="/images/Logo.png" alt="logo" />
      <div className="flex gap-15 items-center font-clash cursor-pointer">
        <a
          href="#about"
          className="bg-[#F9F9F9] px-3.5 py-1.5 rounded-3xl hover:scale-101 hover:bg-gray-200 "
        >
          <p>About</p>
        </a>
        <a
          href="#howitwk"
          className="hover:bg-gray-200 hover:rounded-3xl hover:px-4 hover:py-1.5"
        >
          <p>How it Works</p>
        </a>
        <a
          href="#benfit"
          className="hover:bg-gray-200 hover:rounded-3xl hover:px-4 hover:py-1.5"
        >
          <p>Benefits</p>
        </a>
      </div>
      <Button
        className="bg-[#004D43] rounded-4xl px-5 hover:bg-[#065457] hover:scale-105"
        onClick={() => navigate("/dashboard")}
      >
        Open App
      </Button>
    </div>
  );
};

export default Navbar;
