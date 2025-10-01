import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Landingpage from "./pages/Landingpage";
import UserpageLayout from "./pages/Users/UserpageLayout";
import Marketplace from "./pages/Users/Marketplace";
import Dashboard from "./pages/Users/Dashboard";
import CoinDetails from "./pages/Users/CoinDetails";
import History from "./pages/Users/History";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landingpage />} />
          <Route element={<UserpageLayout />}>
            <Route path="/market" element={<Marketplace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/coin" element={<CoinDetails />} />
            <Route path="/history" element={<History />} />
          </Route>
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
