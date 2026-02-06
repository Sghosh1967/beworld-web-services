export interface AppInfo {
  name: string;
  description: string;
  icon: string;
  url: string;
  category: "edtech" | "social" | "cultural";
}

export const edtechApps: AppInfo[] = [
  {
    name: "JobSafal",
    description: "AI-Powered Career Companion",
    icon: "/images/Jobsafal (1).png",
    url: "https://jobsafal.com",
    category: "edtech",
  },
  {
    name: "ExamSafal",
    description: "AI Exam Prep Platform",
    icon: "/images/Exam safal.png",
    url: "https://examsafal.com",
    category: "edtech",
  },
  {
    name: "Current Affairs",
    description: "Daily GK Updates",
    icon: "/images/CA.png",
    url: "https://currentaffairs.beworldwebservices.com",
    category: "edtech",
  },
  {
    name: "AI-Sir",
    description: "Personal AI Tutor",
    icon: "/images/AI_sir.png",
    url: "https://aisir.beworldwebservices.com",
    category: "edtech",
  },
];

export const otherApps: AppInfo[] = [
  {
    name: "BeWorld",
    description: "Bengali Social Network",
    icon: "/images/logo.png",
    url: "https://mybeworld.com",
    category: "social",
  },
  {
    name: "TelWorld",
    description: "Telugu Social Platform",
    icon: "/images/telworld.png",
    url: "https://mytelworld.com",
    category: "social",
  },
  {
    name: "Bengali Panjika",
    description: "Daily Calendar & Panchang",
    icon: "/images/WhatsApp Image 2025-03-18 at 11.17.18 AM.jpeg",
    url: "https://calendar.panjika365.com/",
    category: "cultural",
  },
  {
    name: "Telugu Panchangam",
    description: "Traditional Calendar",
    icon: "/images/Panjika365 (7).png",
    url: "https://calendar.panchangam365.com/",
    category: "cultural",
  },
];

export const allApps: AppInfo[] = [...edtechApps, ...otherApps];
