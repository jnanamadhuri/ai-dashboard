import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F5F3EF]">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar */}
        <div className="fixed top-0 left-0 right-0 z-10">
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* Content */}
        <main className="flex-1 mt-16 overflow-y-auto">
          <Dashboard isOpen={isOpen} />
        </main>
      </div>
    </div>
  );
};

export default App;
