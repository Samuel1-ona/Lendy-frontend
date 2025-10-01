interface ModalProps {
  setBorrowVisible: (isVisible: boolean) => void;
  onSubmit: (success: boolean) => void;
}

const BorrowCreationModal = ({ setBorrowVisible, onSubmit }: ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-100 p-4 border">
        <div className="flex items-center justify-between pb-2 mb-4">
          <h3 className="text-base font-medium text-gray-900">Borrow STX</h3>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setBorrowVisible(false)}
          >
            ✕
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">
            Enter Amount to Borrow (STX)
          </label>
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

        <div className="mb-4">
          <label className=" text-[13px] text-gray-600 mb-1 flex gap-12 ">
            <p>Enter Collateral Amount (SBTC) </p>
            <p>Your SBTC Bal: 220.00</p>
          </label>
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
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Health Factor</span>
            <span className="font-medium text-[#3B3B3B]">3.32</span>
          </div>
          <div className="flex justify-end -mt-3">
            <span className="text-[13px] text-[#3B3B3B]">
              Liquidation at &lt;1.0
            </span>
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
          Proceed
        </button>
      </div>
    </div>
  );
};

export default BorrowCreationModal;
