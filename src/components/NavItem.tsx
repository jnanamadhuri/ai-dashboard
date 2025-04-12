import React from "react";

type NavItemProps = {
  icon: React.ReactNode;
  text: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavItem: React.FC<NavItemProps> = ({ icon, text, isOpen, setIsOpen }) => {
  return (
    <div className="flex items-center gap-4 cursor-pointer w-full hover:text-blue-400">
      <span
        onClick={() => setIsOpen((prev) => !prev)}
        data-tooltip-id={!isOpen ? "sidebar-tooltip" : undefined}
        data-tooltip-content={!isOpen ? text : undefined}
        className="text-xl"
      >
        {icon}
      </span>
      {isOpen && <div>{text}</div>}
    </div>
  );
};

export default NavItem;
