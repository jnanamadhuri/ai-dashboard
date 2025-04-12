import { useState } from "react";
import { Incident } from "../types/Incident";
import { mockIncidents } from "../data";
import IncidentChart from "./IncidentChart";
import IncidentTrendChart from "./IncidentTrendChart";
import { motion, AnimatePresence } from "framer-motion";
import ToggleSwitch from "./ToggleSwitch";

interface DashboardProps {
  isOpen: boolean;
}

const Dashboard = ({ isOpen }: DashboardProps) => {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");
  const [showModal, setShowModal] = useState(false);
  const [expandedIncident, setExpandedIncident] = useState<number | null>(null);

  const [newIncident, setNewIncident] = useState({
    title: "",
    description: "",
    severity: "Low",
  });

  const handleAddIncident = () => {
    if (!newIncident.title || !newIncident.description) return;

    const newEntry: Incident = {
      ...newIncident,
      id: incidents.length + 1,
      reported_at: new Date().toISOString().split("T")[0],
      severity: newIncident.severity as "Low" | "Medium" | "High",
    };

    setIncidents([newEntry, ...incidents]);
    setNewIncident({ title: "", description: "", severity: "Low" });
    setShowModal(false);
  };

  const toggleDescription = (id: number) => {
    setExpandedIncident(expandedIncident === id ? null : id);
  };

  const filteredIncidents = incidents
    .filter((i) => (filter === "All" ? true : i.severity === filter))
    .sort((a, b) =>
      sortOrder === "Newest"
        ? new Date(b.reported_at).getTime() - new Date(a.reported_at).getTime()
        : new Date(a.reported_at).getTime() - new Date(b.reported_at).getTime()
    );

  return (
    <motion.div
      animate={{
        scale: isOpen ? 0.95 : 1,
        x: isOpen ? 10 : 0,
      }}
      transition={{ duration: 0.3 }}
      className={`transition-all duration-300 ease-in-out p-4 sm:p-6 space-y-8 ${
        isOpen ? "md:ml-64 ml-16" : "ml-10"
      }`}
    >
      {/* Charts */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-4 h-auto transition-all ${
          showModal ? "blur-sm pointer-events-none" : ""
        }`}
      >
        <div className="col-span-1 bg-[#545E75] p-1 rounded shadow">
          <IncidentChart incidents={incidents} />
        </div>
        <div className="col-span-1 bg-[#545E75] p-1 rounded shadow mt-4 md:mt-0">
          <IncidentTrendChart incidents={incidents} />
        </div>
      </div>

      {/* Filters + Add Button */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold">AI Safety Incidents</h2>
        <div className="flex gap-3 flex-wrap">
          <select
            className="border p-2 rounded bg-white shadow-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <select
            className="border p-2 rounded bg-white shadow-sm"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option>Newest</option>
            <option>Oldest</option>
          </select>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow"
          >
            + Add New Incident
          </button>
        </div>
      </div>

      {/* Incident Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {filteredIncidents.map((incident) => (
          <motion.div
            key={incident.id}
            className="bg-white p-3 pl-6 rounded shadow hover:shadow-md transition"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            <h3 className="font-semibold text-lg">{incident.title}</h3>
            <p className="text-sm text-gray-600 mt-1">
              Severity:{" "}
              <span
                className={`font-bold ${
                  incident.severity === "High"
                    ? "text-red-600"
                    : incident.severity === "Medium"
                    ? "text-yellow-600"
                    : "text-green-600"
                }`}
              >
                {incident.severity}
              </span>{" "}
              | {incident.reported_at}
            </p>

            <div className="mt-2 flex justify-end">
              <ToggleSwitch
                isOn={expandedIncident === incident.id}
                onToggle={() => toggleDescription(incident.id)}
              />
            </div>

            <AnimatePresence>
              {expandedIncident === incident.id && (
                <motion.p
                  className="mt-2 text-gray-700 text-sm"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {incident.description}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              className="fixed inset-0 z-40 backdrop-blur-sm bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Report New Incident
                  </h3>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-500 hover:text-black text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Title Input */}
                <input
                  type="text"
                  placeholder="Incident Title"
                  value={newIncident.title}
                  onChange={(e) =>
                    setNewIncident({ ...newIncident, title: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                />

                {/* Severity Dropdown */}
                <select
                  value={newIncident.severity}
                  onChange={(e) =>
                    setNewIncident({
                      ...newIncident,
                      severity: e.target.value as "Low" | "Medium" | "High",
                    })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>

                {/* Description Textarea */}
                <textarea
                  placeholder="Incident Description"
                  value={newIncident.description}
                  onChange={(e) =>
                    setNewIncident({
                      ...newIncident,
                      description: e.target.value,
                    })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  rows={4}
                />

                {/* Submit Button */}
                <button
                  onClick={handleAddIncident}
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-lg shadow-md transform transition duration-200 hover:scale-105"
                >
                  Submit Incident
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Dashboard;
