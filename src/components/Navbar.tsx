import { motion } from "framer-motion";
import { useState } from "react";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ isOpen }: NavbarProps) => {
  // State to handle dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle the dropdown visibility
  const toggleDropdown = (state: boolean) => {
    setDropdownOpen(state);
  };

  return (
    <motion.header
      initial={false}
      animate={{
        marginLeft: isOpen ? "240px" : "60px",
        width: isOpen ? "calc(100% - 240px)" : "calc(100% - 60px)",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 right-0 h-16 text-gray-900 bg-white flex items-center justify-between px-6 shadow-md z-40"
    >
      <h1 className="text-xl font-bold">AI Safety Dashboard</h1>
      <div className="flex items-center gap-4">
        {/* Navigation Buttons */}
        <button className="hover:text-blue-400">Docs</button>
        <button className="hover:text-blue-400">Support</button>

        {/* Profile Button */}
        <div
          className="relative"
          onMouseEnter={() => toggleDropdown(true)} // Show dropdown on hover
          onMouseLeave={() => toggleDropdown(false)} // Hide dropdown on hover out
        >
          <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white cursor-pointer">
            U
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-300 z-50">
              <button
                className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-t-lg transition duration-200"
                onClick={() => console.log("Profile clicked")}
              >
                Profile
              </button>
              <button
                className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-b-lg transition duration-200"
                onClick={() => console.log("Logout clicked")}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
