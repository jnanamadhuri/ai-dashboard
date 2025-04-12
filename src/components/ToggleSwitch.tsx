import { motion } from "framer-motion";

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: () => void;
}

const switchVariants = {
  off: { x: 0 },
  on: { x: 16 }, // Smaller shift
};

const ToggleSwitch = ({ isOn, onToggle }: ToggleSwitchProps) => {
  return (
    <div className="flex items-center gap-1">
      <span className="text-xs">{isOn ? "Hide Details" : "Show Details"}</span>
      <div className="relative inline-block w-8 h-4">
        <div
          className={`w-full h-full rounded-full cursor-pointer transition-colors ${
            isOn ? "bg-green-500" : "bg-gray-300"
          }`}
          onClick={onToggle}
        />
        <motion.div
          className="absolute top-[2px] left-[2px] w-3 h-3 rounded-full bg-white shadow"
          variants={switchVariants}
          animate={isOn ? "on" : "off"}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={onToggle}
        />
      </div>
    </div>
  );
};

export default ToggleSwitch;
