import React, { useRef } from "react";
import {
  PiLinkedinLogoBold,
  PiMediumLogoBold,
  PiGithubLogoBold,
  PiTelegramLogoDuotone,
} from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { MediumFeed } from "./medium";

// Types
interface SidebarSectionProps {
  title: string;
  items: string[];
}
interface SidebarLink {
  name: string;
  url: string;
  logo: React.ReactNode;
}
interface ExperienceItem {
  role: string;
  company: string;
  period: string;
}

// Sidebar section component
const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items }) => (
  <div className="mb-6">
    <h3 className="font-bold text-sm text-gray-700 tracking-wide uppercase mb-2">{title}</h3>
    <div className="border-t-2 border-gray-300 mb-3" />
    <div className="space-y-2 text-xs md:text-sm">
      {items.map((item, idx) => (
        <p key={idx} className="text-gray-800 break-words">{item}</p>
      ))}
    </div>
  </div>
);

// Sidebar links component
const SidebarLinks: React.FC<{ title: string; links: SidebarLink[] }> = ({
  title,
  links,
}) => (
  <div className="mb-6">
    <h3 className="font-bold text-sm text-gray-700 tracking-wide uppercase mb-2">{title}</h3>
    <div className="border-t-2 border-gray-300 mb-3" />
    <div className="space-y-2 text-xs md:text-sm">
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-900 hover:text-indigo-600 transition"
        >
          {link.logo}
          <span>{link.name}</span>
        </a>
      ))}
    </div>
  </div>
);

// Experience item component
const ExperienceCard: React.FC<ExperienceItem> = ({
  role,
  company,
  period,
}) => (
  <div className="mb-4">
    <div className="flex justify-between items-center">
      <h4 className="font-semibold text-gray-900 text-sm md:text-base">{role}</h4>
      <span className="text-gray-500 text-xs italic">{period}</span>
    </div>
    <p className="text-gray-600 text-xs italic">{company}</p>
  </div>
);

const Resume: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  const contact = ["work@anshulrai.dev"];
  const links: SidebarLink[] = [
    { name: "GitHub", url: "https://github.com/auralshin", logo: <PiGithubLogoBold /> },
    { name: "LinkedIn", url: "https://linkedin.com/in/auralshin", logo: <PiLinkedinLogoBold /> },
    { name: "Twitter", url: "https://x.com/auralshin", logo: <BsTwitterX /> },
    { name: "Medium", url: "https://medium.com/@auralshin", logo: <PiMediumLogoBold /> },
    { name: "Telegram", url: "https://t.me/Auralshin", logo: <PiTelegramLogoDuotone /> },
  ];

  const skills = ["React.js / Next.js", "Solidity", "Rust", "Node.js", "Go", "TypeScript", "Ethereum"];
  const languages = ["English", "Hindi"];

  const experiences: ExperienceItem[] = [
    { role: "Blockchain Engineer (DeFi)", company: "Supra", period: "Feb 2025 – Present" },
    { role: "Travel Break", company: "", period: "Nov 2024 – Feb 2025" },
    { role: "Lead Blockchain Engineer (Points)", company: "Renzo", period: "Mar 2024 – Oct 2024" },
    { role: "Lead Backend/Blockchain Engineer", company: "Truffles", period: "Nov 2022 – Mar 2024" },
    { role: "Protocol Engineer", company: "Reputex", period: "Jan 2022 – Nov 2022" },
    { role: "Blockchain Developer", company: "Nord Finance", period: "Nov 2021 – Nov 2022" },
    { role: "Blockchain Developer", company: "Blocumen Studios", period: "Jan 2021 – Jul 2021" },
  ];

  return (
    <div className="flex justify-center py-10 bg-gray-50 min-h-screen font-sans">
      <div
        ref={componentRef}
        className="w-full max-w-6xl bg-white shadow-xl rounded-lg overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Sidebar */}
          <aside className="md:col-span-4 bg-gray-100 p-6 border-r border-gray-200">
            <SidebarSection title="CONTACT" items={contact} />
            <SidebarLinks title="LINKS" links={links} />
            <SidebarSection title="SKILLS" items={skills} />
            <SidebarSection title="LANGUAGES" items={languages} />
          </aside>

          {/* Main Content */}
          <div className="md:col-span-8 p-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">ANSHUL RAI</h1>
              <section>
                <h2 className="text-xl font-bold mb-2">PROFILE</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Engineer specializing in system design, implementation, and optimization—
                  focused on scalable, business-aligned solutions.
                </p>
              </section>
            </div>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4">EXPERIENCE</h2>
              {experiences.map((exp, idx) => (
                <ExperienceCard key={idx} {...exp} />
              ))}
            </section>

            <MediumFeed username="auralshin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
