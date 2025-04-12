import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { menuItems } from "../data";
import NavItem from "./NavItem";
import { Tooltip } from "react-tooltip";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <motion.div
      initial={{ width: 60 }}
      animate={{ width: isOpen ? 240 : 60 }}
      transition={{ duration: 0.4 }}
      className="fixed left-0 top-0 h-screen bg-gray-900 text-white p-4 flex flex-col z-50"
    >
      <button
        className="text-xl mb-6"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FaBars />
      </button>

      <nav
        className={`flex flex-col gap-8 overflow-y-auto ${
          !isOpen ? "no-scrollbar" : ""
        }`}
      >
        {menuItems.map((item, index) => (
          <NavItem
            key={index}
            icon={item.icon}
            text={item.text}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        ))}
      </nav>

      {!isOpen && <Tooltip id="sidebar-tooltip" offset={40} />}
    </motion.div>
  );
};

export default Sidebar;
