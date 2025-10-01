import { Switch } from "@/components/ui/switch";
import { Button } from "../ui/button";
import { useState } from "react";
import DashboardConnectWallet from "@/components/modals/DashboardConnectWallet";
import SupplyCreationModal from "@/components/modals/SupplyCreationModal";
import WithdrawCreationModal from "@/components/modals/WithdrawCreationModal";
import WithdrawCompletion from "@/components/modals/WithdrawCompletion";
import WithdrawFailed from "@/components/modals/WithdrawFailed";
import BorrowCreationModal from "@/components/modals/BorrowCreationModal";
import RepayCreationModal from "@/components/modals/RepayCreationModal";
import SupplyCompletion from "@/components/modals/SupplyCompletion";
import SupplyFailed from "@/components/modals/SupplyFailed";
// import BorrowCompletion from "@/components/modals/BorrowCompletion";
import BorrowFailed from "@/components/modals/BorrowFailed";
// import RepayCompletion from "@/components/modals/RepayCompletion";
// import RepayFailed from "@/components/modals/RepayFailed";

interface DashboardCoinsProps {
  isConnected: boolean;
}

const DashboardCoins = ({ isConnected }: DashboardCoinsProps) => {
  const [supplyVisible, setSupplyVisible] = useState(false);
  const [withdrawVisible, setWithdrawVisible] = useState(false);
  const [borrowVisible, setBorrowVisible] = useState(false);
  const [repayVisible, setRepayVisible] = useState(false);
  const [withdrawSuccess, setWithdrawSuccess] = useState<boolean | null>(null);
  const [currentWithdrawAsset, setCurrentWithdrawAsset] = useState<
    string | null
  >(null);
  const [currentSupplyAsset, setCurrentSupplyAsset] = useState<string | null>(
    null
  );
  const [supplySuccess, setSupplySuccess] = useState<boolean | null>(null);
  const [currentBorrowAsset, setCurrentBorrowAsset] = useState<string | null>(
    null
  );
  const [borrowSuccess, setBorrowSuccess] = useState<boolean | null>(null);
  const [currentRepayAsset, setCurrentRepayAsset] = useState<string | null>(
    null
  );
  const [repaySuccess, setRepaySuccess] = useState<boolean | null>(null);

  function displaySupplyModal(asset: string) {
    setCurrentSupplyAsset(asset);
    setSupplyVisible(true);
    setSupplySuccess(null);
  }

  function displayWithdrawModal(asset: string) {
    setCurrentWithdrawAsset(asset);
    setWithdrawVisible(true);
    setWithdrawSuccess(null);
  }

  function displayBorrowModal(asset: string) {
    setCurrentBorrowAsset(asset);
    setBorrowVisible(true);
    setBorrowSuccess(null);
  }

  function displayRepayModal(asset: string) {
    setCurrentRepayAsset(asset);
    setRepayVisible(true);
    setRepaySuccess(null);
  }

  function handleWithdrawSubmit(success: boolean) {
    setWithdrawSuccess(success);
    setWithdrawVisible(false);
    setCurrentWithdrawAsset(null);
  }

  return (
    <div className="grid grid-cols-2 ml-9 mr-22">
      {isConnected ? null : <DashboardConnectWallet />}
      {supplyVisible ? (
        <SupplyCreationModal
          setSupplyVisible={setSupplyVisible}
          onSubmit={(success: boolean) => {
            setSupplySuccess(success);
            setSupplyVisible(false);
            setCurrentSupplyAsset(null);
          }}
        />
      ) : null}
      {withdrawVisible ? (
        <WithdrawCreationModal
          setWithdrawVisible={setWithdrawVisible}
          onSubmit={handleWithdrawSubmit}
          asset={currentWithdrawAsset}
        />
      ) : null}
      {withdrawSuccess === true ? (
        <WithdrawCompletion
          onClose={() => setWithdrawSuccess(null)}
          asset={currentWithdrawAsset}
        />
      ) : null}
      {withdrawSuccess === false ? (
        <WithdrawFailed
          onClose={() => setWithdrawSuccess(null)}
          asset={currentWithdrawAsset}
        />
      ) : null}
      {borrowVisible ? (
        <BorrowCreationModal
          setBorrowVisible={setBorrowVisible}
          onSubmit={(success: boolean) => {
            setBorrowSuccess(success);
            setBorrowVisible(false);
            setCurrentBorrowAsset(null);
          }}
        />
      ) : null}
      {repayVisible ? (
        <RepayCreationModal
          setRepayVisible={setRepayVisible}
          onSubmit={(success: boolean) => {
            setRepaySuccess(success);
            setRepayVisible(false);
            setCurrentRepayAsset(null);
          }}
        />
      ) : null}
      {supplySuccess === true ? (
        <SupplyCompletion
          onClose={() => setSupplySuccess(null)}
          asset={currentSupplyAsset}
        />
      ) : null}
      {supplySuccess === false ? (
        <SupplyFailed
          onClose={() => setSupplySuccess(null)}
          asset={currentSupplyAsset}
        />
      ) : null}
      {borrowSuccess === true ? (
        <BorrowCompletion
          onClose={() => setBorrowSuccess(null)}
          asset={currentBorrowAsset}
        />
      ) : null}
      {borrowSuccess === false ? (
        <BorrowFailed
          onClose={() => setBorrowSuccess(null)}
          asset={currentBorrowAsset}
        />
      ) : null}
      {repaySuccess === true ? (
        <RepayCompletion
          onClose={() => setRepaySuccess(null)}
          asset={currentRepayAsset}
        />
      ) : null}
      {repaySuccess === false ? (
        <RepayFailed
          onClose={() => setRepaySuccess(null)}
          asset={currentRepayAsset}
        />
      ) : null}
      <div className="bg-[#FFFFFF] ml-10 mt-5 rounded-md w-142 p-4">
        <p className="text-xl">Your Supply</p>
        <div className="flex gap-15 pt-3 pb-3">
          <div>
            <p className="text-[15px] text-[#767676]">Balance</p>
            <p className="font-medium text-lg text-[#131313B2]">$54.671.01</p>
          </div>
          <div>
            <p className="text-[15px] text-[#767676]">Net APY</p>
            <p className="font-medium text-lg text-[#131313B2]">3.4%</p>
          </div>
          <div>
            <p className="text-[15px] text-[#767676]">Collateral</p>
            <p className="font-medium text-lg text-[#131313B2]">$60,000.03</p>
          </div>
        </div>
        <div className="border border-[#F6F6F6] rounded-tl-2xl rounded-tr-2xl w-135 rounded-bl-2xl rounded-br-2xl">
          <table>
            <tr className="flex flex-row gap-10 bg-[#F6F6F6] py-2 px-3 rounded-tl-2xl rounded-tr-2xl ">
              <td>Asset</td>
              <td>Balance</td>
              <td>APY</td>
              <td>Collateral</td>
            </tr>
            <tr className="flex flex-row gap-10 p-2">
              <td>
                <div className="flex items-center gap-1">
                  <img
                    src="/icons/crpt1.png"
                    alt="crptoIcon"
                    width={23}
                    height={23}
                  />
                  <p className="text-lg">SBTC</p>
                </div>
              </td>
              <td className="text-sm -ml-3 ">
                <p>3.1B</p>
                <p>$4.15B</p>
              </td>
              <td className="ml-3">7%</td>
              <td>
                <Switch
                  className=" data-[state=checked]:bg-[#188F65]   
          data-[state=unchecked]:bg-gray-300"
                />
              </td>
              <td className="flex gap-5 ml-2 pr-3">
                <Button
                  className="px-3 py-2 bg-[#E6EDEC] text-[#004D43] hover:bg-[#c2c9c8] "
                  onClick={() => displayWithdrawModal("SBTC")}
                >
                  Withdraw
                </Button>
                <Button
                  className="px-5 py-2  bg-[#E7E7E7] text-[#131212] hover:bg-[#b8b5b5]"
                  onClick={() => displaySupplyModal("SBTC")}
                >
                  Supply
                </Button>
              </td>
            </tr>
            <tr className="flex flex-row gap-10 p-2">
              <td>
                <div className="flex items-center gap-1">
                  <img
                    src="/icons/crpt2.png"
                    alt="crptoIcon"
                    width={23}
                    height={23}
                  />
                  <p className="text-lg">STX</p>
                </div>
              </td>
              <td className="text-sm -ml-3 ">
                <p>3.1B</p>
                <p>$4.15B</p>
              </td>
              <td className="ml-3">7%</td>
              <td>
                <Switch
                  className=" data-[state=checked]:bg-[#188F65]   
          data-[state=unchecked]:bg-gray-300"
                />
              </td>
              <td className="flex gap-5 ml-2 pr-3">
                <Button
                  className="px-3 py-2 bg-[#E6EDEC] text-[#004D43] hover:bg-[#c2c9c8] "
                  onClick={() => displayWithdrawModal("STX")}
                >
                  Withdraw
                </Button>
                <Button
                  className="px-5 py-2  bg-[#E7E7E7] text-[#3B3B3B] hover:bg-[#b8b5b5]"
                  onClick={() => displaySupplyModal("STX")}
                >
                  Supply
                </Button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="bg-[#FFFFFF] ml-10 mt-5 rounded-md w-142 p-4">
        <p className="text-xl">Your Borrow</p>
        <div className="flex gap-15 pt-3 pb-3">
          <div>
            <p className="text-[15px] text-[#767676]">Balance</p>
            <p className="font-medium text-lg text-[#131313B2]">$54.671.01</p>
          </div>
          <div>
            <p className="text-[15px] text-[#767676]">Net APY</p>
            <p className="font-medium text-lg text-[#131313B2]">3.4%</p>
          </div>
          <div>
            <p className="text-[15px] text-[#767676]">Borrow Power Used</p>
            <p className="font-medium text-lg text-[#131313B2]">32.10%</p>
          </div>
        </div>
        <div className="border border-[#F6F6F6] rounded-tl-2xl rounded-tr-2xl w-135 rounded-bl-2xl rounded-br-2xl">
          <table>
            <tr className="flex flex-row gap-10 bg-[#F6F6F6] py-2 px-3 rounded-tl-2xl rounded-tr-2xl ">
              <td>Asset</td>
              <td>Balance</td>
              <td>APY</td>
              <td>Collateral</td>
            </tr>
            <tr className="flex flex-row gap-10 p-2">
              <td>
                <div className="flex items-center gap-1">
                  <img
                    src="/icons/crpt2.png"
                    alt="crptoIcon"
                    width={23}
                    height={23}
                  />
                  <p className="text-lg">STX</p>
                </div>
              </td>
              <td className="text-sm -ml-3 ">
                <p>3.1B</p>
                <p>$4.15B</p>
              </td>
              <td className="ml-3">7%</td>
              <td>
                <Switch
                  className=" data-[state=checked]:bg-[#188F65]   
          data-[state=unchecked]:bg-gray-300"
                />
              </td>
              <td className="flex gap-5 ml-2 pr-3">
                <Button
                  className="px-3 py-2 bg-[#E6EDEC] text-[#004D43] hover:bg-[#c2c9c8] "
                  onClick={() => displayRepayModal("STX")}
                >
                  Repay
                </Button>
                <Button
                  className="px-5 py-2  bg-[#E7E7E7] text-[#3B3B3B] hover:bg-[#b8b5b5]"
                  onClick={() => displayBorrowModal("STX")}
                >
                  Borrow
                </Button>
              </td>
            </tr>
            <tr className="flex flex-row gap-10 p-2">
              <td>
                <div className="flex items-center gap-1">
                  <img
                    src="/icons/crpt3.png"
                    alt="crptoIcon"
                    width={23}
                    height={23}
                  />
                  <p className="text-lg">BTC</p>
                </div>
              </td>
              <td className="text-sm -ml-3 ">
                <p>3.1B</p>
                <p>$4.15B</p>
              </td>
              <td className="ml-3">7%</td>
              <td>
                <Switch
                  className=" data-[state=checked]:bg-[#188F65]   
          data-[state=unchecked]:bg-gray-300"
                />
              </td>
              <td className="flex gap-5 ml-2 pr-3">
                <Button className="px-3 py-2 bg-[#E6EDEC] text-[#004D43] hover:bg-[#c2c9c8] ">
                  Repay
                </Button>
                <Button className="px-5 py-2  bg-[#E7E7E7] text-[#3B3B3B] hover:bg-[#b8b5b5]">
                  Borrow
                </Button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="bg-[#FFFFFF] ml-10 mt-5 rounded-md w-142 p-4">
        <p className="text-xl mb-5">Assets to Supply</p>
        <div className="border border-[#F6F6F6] rounded-tl-2xl rounded-tr-2xl w-135 rounded-bl-2xl rounded-br-2xl">
          <table>
            <tr className="flex flex-row gap-10 bg-[#F6F6F6] py-2 px-3 rounded-tl-2xl rounded-tr-2xl ">
              <td>Asset</td>
              <td>Balance</td>
              <td>APY</td>
              <td>Collateral</td>
            </tr>
            <tr className="flex flex-row gap-10 p-2">
              <td>
                <div className="flex items-center gap-1">
                  <img
                    src="/icons/crpt3.png"
                    alt="crptoIcon"
                    width={23}
                    height={23}
                  />
                  <p className="text-lg">BTC</p>
                </div>
              </td>
              <td className="text-sm -ml-3 ">
                <p>3.1B</p>
                <p>$4.15B</p>
              </td>
              <td className="ml-3">7%</td>
              <td>
                <Switch
                  className=" data-[state=checked]:bg-[#188F65]   
          data-[state=unchecked]:bg-gray-300"
                />
              </td>
              <td className="flex gap-5 ml-2 pr-3">
                <Button className="px-3 py-2 bg-[#E6EDEC] text-[#004D43] hover:bg-[#c2c9c8] ">
                  Supply
                </Button>
                <Button className="px-5 py-2  bg-[#E7E7E7] text-[#3B3B3B] hover:bg-[#b8b5b5]">
                  Details
                </Button>
              </td>
            </tr>
            <tr className="flex flex-row gap-10 p-2">
              <td>
                <div className="flex items-center gap-1">
                  <img
                    src="/icons/crpt2.png"
                    alt="crptoIcon"
                    width={23}
                    height={23}
                  />
                  <p className="text-lg">STX</p>
                </div>
              </td>
              <td className="text-sm -ml-3 ">
                <p>3.1B</p>
                <p>$4.15B</p>
              </td>
              <td className="ml-3">7%</td>
              <td>
                <Switch
                  className=" data-[state=checked]:bg-[#188F65]   
          data-[state=unchecked]:bg-gray-300"
                />
              </td>
              <td className="flex gap-5 ml-2 pr-3">
                <Button className="px-3 py-2 bg-[#E6EDEC] text-[#004D43] hover:bg-[#c2c9c8] ">
                  Supply
                </Button>
                <Button className="px-5 py-2  bg-[#E7E7E7] text-[#3B3B3B] hover:bg-[#b8b5b5]">
                  Details
                </Button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="bg-[#FFFFFF] ml-10 mt-5 rounded-md w-142 p-4">
        <p className="text-xl mb-5">Assets to Borrow</p>
        <div className="border border-[#F6F6F6] rounded-tl-2xl rounded-tr-2xl w-135 rounded-bl-2xl rounded-br-2xl">
          <table>
            <tr className="flex flex-row gap-10 bg-[#F6F6F6] py-2 px-3 rounded-tl-2xl rounded-tr-2xl ">
              <td>Asset</td>
              <td>Balance</td>
              <td>APY</td>
              <td>Collateral</td>
            </tr>
            <tr className="flex flex-row gap-10 p-2">
              <td>
                <div className="flex items-center gap-1">
                  <img
                    src="/icons/crpt4.png"
                    alt="crptoIcon"
                    width={23}
                    height={23}
                  />
                  <p className="text-lg">USDT</p>
                </div>
              </td>
              <td className="text-sm -ml-3 ">
                <p>3.1B</p>
                <p>$4.15B</p>
              </td>
              <td className="ml-3">7%</td>
              <td>
                <Switch
                  className=" data-[state=checked]:bg-[#188F65]   
          data-[state=unchecked]:bg-gray-300"
                />
              </td>
              <td className="flex gap-5 ml-2 pr-3">
                <Button className="px-3 py-2 bg-[#E6EDEC] text-[#004D43] hover:bg-[#c2c9c8] ">
                  Borrow
                </Button>
                <Button className="px-5 py-2  bg-[#E7E7E7] text-[#3B3B3B] hover:bg-[#b8b5b5]">
                  Details
                </Button>
              </td>
            </tr>
            <tr className="flex flex-row gap-10 p-2">
              <td>
                <div className="flex items-center gap-1">
                  <img
                    src="/icons/crpt2.png"
                    alt="crptoIcon"
                    width={23}
                    height={23}
                  />
                  <p className="text-lg">STXS</p>
                </div>
              </td>
              <td className="text-sm -ml-3 ">
                <p>3.1B</p>
                <p>$4.15B</p>
              </td>
              <td className="ml-3">7%</td>
              <td>
                <Switch
                  className=" data-[state=checked]:bg-[#188F65]   
          data-[state=unchecked]:bg-gray-300"
                />
              </td>
              <td className="flex gap-5 ml-2 pr-3">
                <Button className="px-3 py-2 bg-[#E6EDEC] text-[#004D43] hover:bg-[#c2c9c8] ">
                  Borrow
                </Button>
                <Button className="px-5 py-2  bg-[#E7E7E7] text-[#3B3B3B] hover:bg-[#b8b5b5]">
                  Details
                </Button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardCoins;
