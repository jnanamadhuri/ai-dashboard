import { FaHome, FaUser, FaCog, FaChartLine } from "react-icons/fa";
import { Incident } from "./types/Incident";
export const menuItems = [
  { icon: <FaHome />, text: "Home" },
  { icon: <FaChartLine />, text: "Dashboard" },
  { icon: <FaUser />, text: "Profile" },
  { icon: <FaCog />, text: "Settings" },
];

// data/mockIncidents.ts

export const mockIncidents: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description:
      "Algorithm consistently favored certain demographics in hiring suggestions.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z",
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description:
      "LLM provided incorrect safety procedure information in an industrial setting.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z",
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z",
  },
  {
    id: 4,
    title: "Image Classifier Mislabeled Medical Scans",
    description:
      "AI misclassified several medical scans, raising false alarms.",
    severity: "High",
    reported_at: "2025-03-28T08:45:00Z",
  },
  {
    id: 5,
    title: "Autonomous Drone Navigation Error",
    description:
      "Drone flew off-course due to faulty obstacle detection algorithm.",
    severity: "Medium",
    reported_at: "2025-03-22T16:00:00Z",
  },
  {
    id: 6,
    title: "Voice Assistant Misinterpretation",
    description:
      "Voice assistant triggered emergency services unintentionally.",
    severity: "Low",
    reported_at: "2025-03-30T11:20:00Z",
  },
  {
    id: 7,
    title: "Chatbot Sent Inappropriate Response",
    description:
      "AI chatbot sent offensive replies due to unsanitized training data.",
    severity: "High",
    reported_at: "2025-04-02T18:10:00Z",
  },
  {
    id: 8,
    title: "Misleading Financial Forecast",
    description: "AI model overestimated risk-free investment returns.",
    severity: "Medium",
    reported_at: "2025-03-25T13:50:00Z",
  },
  {
    id: 9,
    title: "Sentiment Analysis Backfired",
    description: "Customer support tool misjudged urgency of user complaints.",
    severity: "Low",
    reported_at: "2025-03-19T12:10:00Z",
  },
  {
    id: 10,
    title: "AI Surveillance False Positive",
    description: "Facial recognition flagged innocent individuals as suspects.",
    severity: "High",
    reported_at: "2025-03-27T07:30:00Z",
  },
  {
    id: 11,
    title: "Content Moderation Failure",
    description: "AI missed harmful content while over-flagging benign posts.",
    severity: "Medium",
    reported_at: "2025-03-18T10:45:00Z",
  },
  {
    id: 12,
    title: "Data Drift Ignored in Production",
    description:
      "Model performance deteriorated due to unmonitored data drift.",
    severity: "Medium",
    reported_at: "2025-03-31T09:40:00Z",
  },
  {
    id: 13,
    title: "Unfair Loan Approval Decisions",
    description:
      "Loan approval system biased against applicants from rural areas.",
    severity: "High",
    reported_at: "2025-03-21T17:25:00Z",
  },
  {
    id: 14,
    title: "Language Detection Misfire",
    description:
      "Multilingual bot confused between regional dialects, causing confusion.",
    severity: "Low",
    reported_at: "2025-03-24T14:05:00Z",
  },
  {
    id: 15,
    title: "Training Data Contained Toxic Content",
    description:
      "AI model absorbed toxic phrases from poorly cleaned datasets.",
    severity: "High",
    reported_at: "2025-03-29T15:55:00Z",
  },
];
