import Sidebar from "../sidebar/Sidebar";
import "./nav.scss";
import { motion } from "framer-motion";

function Nav() {
  return (
    <motion.div className="nav">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="title"
        >
          Parth Tiwari
        </motion.span>
        <div className="social">
          <img src="/linkedIn.png" alt="linkedin logo" />
          <img src="/github.png" alt="github logo" />
        </div>
      </div>
    </motion.div>
  );
}
export default Nav;
