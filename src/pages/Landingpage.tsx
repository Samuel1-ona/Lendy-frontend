import { Button } from "@/components/ui/button";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Landingpage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className=" text-center mt-45 ">
          <div className="bg-[#004D4314] px-3.5 py-1.5 rounded-3xl w-65 text-center ml-133">
            <p>Borrow and Lend with Confidence</p>
          </div>
          <p className="text-6xl font-light mt-6 mb-15">
            Safe lending, easy borrowing <br />
            <span className="text-[#666666]">through</span> collateral
            protection
          </p>
          <Button
            className="bg-gradient-to-b from-[#96E3DA]  via-[#96E3DA] to-[#004D43] px-8 py-6 rounded-4xl hover:scale-105 text-[#004D43] border border-[#004D43]"
            onClick={() => navigate("/dashboard")}
          >
            Open App
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="ml-65 mt-65 mb-30" id="about">
          <p className="text-lg mb-5">
            A borrowing and lending platform built on the principle of <br />
            fairness, security, and transparency.
          </p>
          <div className="flex gap-15">
            <div>
              <div className="bg-[#D1D3FF] w-80 h-40 flex items-center justify-center rounded-2xl mb-5">
                <img src="/icons/second.png" alt="money1-icon" />
              </div>
              <p className="font-semibold text-lg">For Borrowers</p>
              <p className="text-sm ">
                Access liquidity without selling your assets. Use <br /> your
                NFTs as loan tickets for easy tracking.
              </p>
            </div>
            <div>
              <div className="bg-[#DAEEBD] w-80 h-40 flex items-center justify-center rounded-2xl mb-5">
                <img src="/icons/first.png" alt="money2-icon" />
              </div>
              <p className="font-semibold text-lg">For Lenders</p>
              <p className="text-sm ">
                Earn passive income by funding collateral-backed <br /> loans.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div
          className="flex gap-20 ml-45 bg-[#E6EDEC] w-220 pt-10 pb-10 px-5 rounded-xl mb-30 mt-60"
          id="howitwk"
        >
          <p className="text-[#004D43] text-3xl">How it Works</p>
          <div className="space-y-9">
            <div>
              <div className="flex items-center gap-3">
                <span className="px py-0.5 bg-[#004D43] text-sm text-white text-center rounded-full w-6">
                  1
                </span>
                <p className="text-[#004D43] font-medium text-[16px] mt-1">
                  Deposit Collateral
                </p>
              </div>
              <p className="text-sm text-[#131313CC]">
                Lock your assets as collateral to access <br /> funds safely
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <span className="px py-0.5 bg-[#004D43] text-sm text-white text-center rounded-full w-6">
                  3
                </span>
                <p className="text-[#004D43] font-medium text-[16px] mt-1">
                  Repay & UnlockRepay & Unlock
                </p>
              </div>
              <p className="text-sm text-[#131313CC]">
                Repay on time to reclaim your collateral. If <br /> thresholds
                are not met, collateral is <br /> liquidated automatically.
              </p>
            </div>
          </div>
          <div>
            <div>
              <div className="flex items-center gap-3">
                <span className="px py-0.5 bg-[#004D43] text-sm text-white text-center rounded-full w-6">
                  2
                </span>
                <p className="text-[#004D43] font-medium text-[16px] mt-1">
                  Get Instant Liquidity
                </p>
              </div>
              <p className="text-sm text-[#131313CC]">
                Borrow funds without selling your assets.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="ml-45 mt-40 mb-20" id="benfit">
          <p className="text-4xl">
            Why Choose <br /> Lendy
          </p>
          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-8 bg-[#F4F4F4] w-220 p-2 rounded-xl ">
              <div className="bg-[#1A1A3214] px-26 py-10 rounded-xl">
                <img src="/icons/why1.png" alt="whyicon1" />
              </div>
              <div>
                <p className="font-semibold">Fair & Transparent</p>
                <p>
                  Every borrowing position is clearly tracked and managed
                  on-chain.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8 bg-[#F4F4F4] w-220 p-2 rounded-xl ">
              <div className="bg-[#004D4314] px-26.5 py-10 rounded-xl">
                <img src="/icons/why2.png" alt="whyicon2" />
              </div>
              <div>
                <p className="font-semibold">Security First</p>
                <p>
                  Your assets are protected in secure, audited smart contracts.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8 bg-[#F4F4F4] w-220 p-2 rounded-xl ">
              <div className="bg-[#8F93FF14] px-25.5 py-10 rounded-xl">
                <img src="/icons/why3.png" alt="whyicon2" />
              </div>
              <div>
                <p className="font-semibold">Earn with Confidence</p>
                <p>
                  Lenders enjoy peace of mind knowing loans are fully
                  collateralized.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8 bg-[#F4F4F4] w-220 p-2 rounded-xl">
              <div className="bg-[#27EAA614] px-25.5 py-10 rounded-xl">
                <img src="/icons/why4.png" alt="whyicon2" />
              </div>
              <div>
                <p className="font-semibold">Health Factor</p>
                <p>
                  Stay informed with a clear risk indicator that helps borrowers
                  maintain safe positions <br /> and avoid liquidation.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8 bg-[#F4F4F4] w-220 p-2 rounded-xl ">
              <div className="bg-[#8F93FF14] px-25.5 py-10 rounded-xl">
                <img src="/icons/why5.png" alt="whyicon2" />
              </div>
              <div>
                <p className="font-semibold">NFT-Powered Tracking</p>
                <p>
                  NFTs record every move you make, from supplying to repaying.
                  Liquidations remove <br /> them, ensuring a clear and
                  tamper-proof history
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="ml-45 mt-30 mb-40">
          <p className="text-4xl mb-10">
            Security & <br /> Trust Section
          </p>
          <div className="flex gap-15">
            <div>
              <div className="bg-[#D1D3FF] w-70 h-40 flex items-center justify-center rounded-2xl mb-5">
                <img src="/icons/befofot1.png" alt="sec1-icon" />
              </div>
              <p className="font-semibold text-lg">Smart Contract Protection</p>
              <p className="text-sm ">
                Automated, tamper-proof contracts <br /> manage every loan.
              </p>
            </div>
            <div>
              <div className="bg-[#DAEEBD] w-70 h-40 flex items-center justify-center rounded-2xl mb-5">
                <img src="/icons/befofot2.png" alt="sec2-icon" />
              </div>
              <p className="font-semibold text-lg">Collateralized Loans</p>
              <p className="text-sm ">
                Your funds are always backed by real <br /> assets.
              </p>
            </div>
            <div>
              <div className="bg-[#A6F6DB] w-70 h-40 flex items-center justify-center rounded-2xl mb-5">
                <img src="/icons/befofot3.png" alt="sec3-icon" />
              </div>
              <p className="font-semibold text-lg">On-Chain Transparency</p>
              <p className="text-sm ">
                All transactions are recorded and <br /> verifiable.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Landingpage;
