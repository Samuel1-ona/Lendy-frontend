import { BsCheckCircle } from "react-icons/bs";

interface ModalProps {
  onClose: () => void;
  asset: string | null;
}

const WithdrawCompletion = ({ onClose, asset }: ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-100 p-4 border">
        <div className="flex items-center justify-end pb-2 mb-4">
          <button
            className="text-gray-500 hover:text-gray-700 hover:scale-105"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="p-3 bg-[#E6EDEC] w-18 rounded-full ml-33 mt-10">
          <BsCheckCircle className="text-[#004D43] text-5xl" />
        </div>
        <div className="text-center mt-3 mb-8">
          <p className="font-medium text-xl text-[#3B3B3B]">
            Withdraw Sucessfull
          </p>
          <p className="text-sm text-[#3B3B3B]">
            You &apos;ve withdrawal 100.11 {asset} from your supply
          </p>
        </div>

        <button
          className="w-full rounded-3xl bg-[#004D43] text-white py-2 font-medium hover:hover:bg-[#12684b] transition hover:scale-105"
          onClick={onClose}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default WithdrawCompletion;
