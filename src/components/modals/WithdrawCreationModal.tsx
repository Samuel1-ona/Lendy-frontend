interface ModalProps {
  setWithdrawVisible: (isVisible: boolean) => void;
  onSubmit: (success: boolean) => void;
  asset: string | null;
}

const WithdrawCreationModal = ({
  setWithdrawVisible,
  onSubmit,
  asset,
}: ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-100 p-4 border">
        <div className="flex items-center justify-between pb-2 mb-4">
          <h3 className="text-base font-medium text-gray-900">
            Withdraw {asset}
          </h3>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setWithdrawVisible(false)}
          >
            ✕
          </button>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600">Wallet Balance</p>
          <div className="flex items-center gap-2 mt-1 text-gray-900 font-medium">
            <img src="/icons/crpt1.png" alt="token" className="w-5 h-5" />
            <span>100.23 SBTC</span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Amount</label>
          <div className="flex items-center border rounded-md px-2 py-2">
            <input
              type="number"
              placeholder="0.00"
              className="flex-1 outline-none text-gray-900 text-xl placeholder-gray-400"
            />
            <button className="ml-2 px-3 py-1.5 text-xs rounded-md text-[#6B9892] bg-[#E6EDEC]  hover:bg-gray-200">
              Max
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">$0</p>
        </div>
        <p className="text-sm text-[#767676] mb-2">Transaction Overview</p>
        <div className="mb-1 border rounded-md bg-[#E6EDEC] p-3 text-sm">
          <div className="flex justify-between ">
            <span className="text-gray-600">Remaining Supply</span>
            <span className="font-medium text-[#3B3B3B]">3.32%</span>
          </div>
        </div>
        <div className="flex items-center gap-1 mb-4">
          <img src="/icons/gas.png" alt="" className="w-4 h-4" />
          <p className="text-xs text-gray-500 ">$0</p>
        </div>

        <button
          className="w-full rounded-3xl bg-[#004D43] text-white py-2 font-medium hover:hover:bg-[#12684b] transition hover:scale-105"
          onClick={() => {
            const success = Math.random() > 0.5;
            onSubmit(success);
          }}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default WithdrawCreationModal;
