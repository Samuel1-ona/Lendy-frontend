import { Outlet } from "react-router-dom";
import Navbar2 from "../../components/shared/Navbar2";
import { motion } from "framer-motion";

const UserpageLayout = () => {
  return (
    <div>
      <Navbar2 />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.div>
    </div>
  );
};

export default UserpageLayout;
