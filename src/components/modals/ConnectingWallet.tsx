import { motion } from "framer-motion";

interface ConnectingWalletProps {
  onClose: () => void;
}

const ConnectingWallet = ({ onClose }: ConnectingWalletProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <motion.div
        className="bg-white rounded-lg shadow-lg max-w-sm w-100 p-4 border"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-end pb-2 mb-4">
          <button
            className="text-gray-500 hover:text-gray-700 hover:scale-105"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="p-3 bg-[#E6EDEC] w-18 rounded-full ml-33 flex items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#004D43]"></div>
        </div>
        <div className="text-center mt-3 mb-8">
          <p className="font-medium text-xl text-[#3B3B3B]">
            Connecting... Wallet
          </p>
          <p className="text-sm text-[#3B3B3B]">Almost Done...</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ConnectingWallet;
