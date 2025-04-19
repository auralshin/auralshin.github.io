import React, { useRef } from "react";
import {
  PiLinkedinLogoBold,
  PiMediumLogoBold,
  PiGithubLogoBold,
  PiTelegramLogoDuotone,
} from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { useEffect, useState } from "react";
import GitHubRepos from "./gh";

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
interface MediumPost {
  title: string;
  link: string;
  thumbnail: string;
  pubDate: string;
  description: string;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items }) => (
  <div className="mb-6">
    <h3 className="font-bold text-sm text-gray-700 tracking-wide uppercase mb-2">
      {title}
    </h3>
    <div className="border-t-2 border-gray-300 mb-3" />
    <div className="space-y-2 text-xs md:text-sm">
      {items.map((item, idx) => (
        <p key={idx} className="text-gray-800 break-words">
          {item}
        </p>
      ))}
    </div>
  </div>
);

const SidebarLinks: React.FC<{ title: string; links: SidebarLink[] }> = ({
  title,
  links,
}) => (
  <div className="mb-6">
    <h3 className="font-bold text-sm text-gray-700 tracking-wide uppercase mb-2">
      {title}
    </h3>
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

const ExperienceCard: React.FC<ExperienceItem> = ({
  role,
  company,
  period,
}) => (
  <div className="mb-4">
    <div className="flex justify-between items-center">
      <h4 className="font-semibold text-gray-900 text-sm md:text-base">
        {role}
      </h4>
      <span className="text-gray-500 text-xs italic">{period}</span>
    </div>
    <p className="text-gray-600 text-xs italic">{company}</p>
  </div>
);

const MediumSidebarScroll: React.FC = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@auralshin`
    )
      .then((res) => res.json())
      .then((data) => {
        const latest = data.items.slice(0, 3).map((item: any) => {
          const cleanDesc = item.description?.replace(/<[^>]+>/g, "") || "";
          let img = item.thumbnail;
          if (!img) {
            const match = item.content?.match(/<img[^>]+src=\"([^\">]+)\"/i);
            img = match
              ? match[1]
              : "https://unsplash.com/photos/an-abstract-image-of-a-red-blue-and-orange-flower-A-mEZdF7deA";
            console.log(img, item.title);
          }
          return {
            title: item.title,
            link: item.link,
            thumbnail: img,
            pubDate: item.pubDate,
            description: cleanDesc,
          };
        });
        setPosts(latest);
      });
  }, []);

  return (
    <div className="flex flex-col justify-between h-full">
      <h3 className="font-bold text-sm text-gray-700 tracking-wide uppercase mb-2">
        Latest on Medium
      </h3>
      <div className="space-y-4 flex-grow overflow-y-auto pr-1 no-scrollbar">
        {posts.map((post, i) => (
          <a
            key={i}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex border border-gray-200 bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-transform hover:-translate-y-1"
          >
            {post.thumbnail && (
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-24 h-full object-cover flex-shrink-0"
              />
            )}
            <div className="p-3 text-left">
              <h4 className="font-semibold text-sm text-gray-800 mb-1 line-clamp-2">
                {post.title}
              </h4>
              <p className="text-xs text-gray-600 line-clamp-2 mb-1">
                {post.description}
              </p>
              <p className="text-[10px] text-gray-400 uppercase">
                {new Date(post.pubDate).toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bg-red-800 top-4 right-4 z-50 px-4 py-1.5 text-sm font-medium rounded-full shadow-lg transition-all
       text-white hover:bg-gray-800
        dark:bg-whit dark:hover:bg-gray-200"
    >
      {isDark ? "☀ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

const App: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const contact = ["work@anshulrai.dev"];
  const links: SidebarLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/auralshin",
      logo: <PiGithubLogoBold />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/auralshin",
      logo: <PiLinkedinLogoBold />,
    },
    { name: "Twitter", url: "https://x.com/auralshin", logo: <BsTwitterX /> },
    {
      name: "Medium",
      url: "https://medium.com/@auralshin",
      logo: <PiMediumLogoBold />,
    },
    {
      name: "Telegram",
      url: "https://t.me/Auralshin",
      logo: <PiTelegramLogoDuotone />,
    },
  ];

  const skills = [
    "React.js / Next.js",
    "Solidity",
    "Rust",
    "Node.js",
    "Go",
    "TypeScript",
    "Ethereum",
  ];
  const languages = ["English", "Hindi"];

  const experiences: ExperienceItem[] = [
    {
      role: "Blockchain Engineer (DeFi)",
      company: "Supra",
      period: "Feb 2025 – Present",
    },
    { role: "Travel Break", company: "", period: "Nov 2024 – Feb 2025" },
    {
      role: "Lead Blockchain Engineer (Points)",
      company: "Renzo",
      period: "Mar 2024 – Oct 2024",
    },
    {
      role: "Lead Backend/Blockchain Engineer",
      company: "Truffles",
      period: "Nov 2022 – Mar 2024",
    },
    {
      role: "Protocol Engineer",
      company: "Reputex",
      period: "Jan 2022 – Nov 2022",
    },
    {
      role: "Blockchain Developer",
      company: "Nord Finance",
      period: "Nov 2021 – Nov 2022",
    },
    {
      role: "Blockchain Developer",
      company: "Blocumen Studios",
      period: "Jan 2021 – Jul 2021",
    },
  ];

  return (
    <div className="flex justify-center py-10 min-h-screen font-sans from-gray-50 via-white to-gray-100 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]">
      <div
        ref={componentRef}
        className="w-full max-w-6xl bg-white backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden border border-gray-200"
      >
        <div className="grid grid-cols-1 md:grid-cols-12">
          <aside className="col-span-full md:col-span-4 p-6 h-full bg-white/70 backdrop-blur-md border-r border-gray-200 shadow-lg rounded-none md:rounded-l-2xl bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] bg-repeat bg-cover overflow-y-auto custom-scroll">
            <SidebarSection title="CONTACT" items={contact} />
            <SidebarLinks title="LINKS" links={links} />
            <SidebarSection title="SKILLS" items={skills} />
            <SidebarSection title="LANGUAGES" items={languages} />
            <div className="mt-4">
              <MediumSidebarScroll />
            </div>
          </aside>

          <div className="md:col-span-8 p-8 animate-fade-in duration-500 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] bg-repeat bg-cover rounded-none md:rounded-r-2xl">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
                ANSHUL RAI
              </h1>
              <hr className="my-8 border-gray-300" />
              <section>
                <h2 className="text-xl font-bold mb-2 text-gray-800 tracking-tight">
                  PROFILE
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Engineer specializing in system design, implementation, and
                  optimization— focused on scalable, business-aligned solutions.
                </p>
              </section>
            </div>
            <hr className="my-8 border-gray-300" />
            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 text-gray-800 tracking-tight">
                EXPERIENCE
              </h2>
              {experiences.map((exp, idx) => (
                <ExperienceCard key={idx} {...exp} />
              ))}
            </section>
            <hr className="my-8 border-gray-300" />
            <div className="animate-fade-in-down duration-700 delay-200 border-2 rounded-2xl border-gray-300 bg-[url('https://www.transparenttextures.com/patterns/skulls.png')] bg-repeat bg-gray-50">
              <GitHubRepos />
            </div>
            <footer className="mt-16 text-center text-sm text-gray-800">
              Vibe Coded 🛠️ by Anshul Rai • {new Date().getFullYear()}
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
