// Resume.tsx
import React, { useRef } from "react";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { PiMediumLogoBold } from "react-icons/pi";
import { PiGithubLogoBold } from "react-icons/pi";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { useReactToPrint } from 'react-to-print';
import MockWindow from "./mock-window";

// Types.ts
export interface SidebarSectionProps {
  title: string;
  items: string[];
}

export interface SidebarLinkProps {
  title: string;
  links: { name: string; url: string; logo: any }[];
}
export interface ProfileProps {
  summary: string;
}

export interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  location: string;
  descriptions: string[];
}

export interface AchievementProps {
  descriptions: string[];
}

export interface ProjectProps {
  descriptions: string[];
  link: string[];
}

const Profile: React.FC<ProfileProps> = ({ summary }) => {
  return (
    <div className="text-gray-700 text-sm">
      <h2 className="text-xl font-bold mb-2 tracking-wider">PROFILE</h2>
      <div className="flex-1 border-t-2 mb-4 border-black"></div>
      <p>{summary}</p>
    </div>
  );
};
const Experience: React.FC<ExperienceProps> = ({
  title,
  company,
  period,
  location,
  descriptions,
}) => {
  return (
    <div className="mb-5">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm font-semibold">{company}</p>
      <p className="text-sm text-gray-500">{`${period} - ${location}`}</p>
      <ul className="list-disc ml-5 text-gray-700">
        {descriptions.map((desc, index) => (
          <li key={index} className="text-sm">
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};
const Achievements: React.FC<AchievementProps> = ({ descriptions }) => {
  return (
    <div className="mb-5">
      <ul className="list-disc ml-5 text-gray-700">
        {descriptions.map((desc, index) => (
          <li key={index} className="text-sm">
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Projects: React.FC<ProjectProps> = ({ descriptions, link }) => {
  return (
    <div className="mb-5">
      <ul className="list-disc ml-5 text-gray-700">
        {descriptions.map((desc, index) => (
          <li key={index} className="text-sm">
            <a
              href={`${link[index]}`}
              className="hover:underline flex items-center gap-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>{desc}</p>
              <LiaExternalLinkAltSolid className="inline-block" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  items,
}) => {
  return (
    <div className="mb-6">
      <div className="font-bold text-lg mb-2">{title}</div>
      <div className="flex-1 border-t-2 mb-4 border-black "></div>
      <div className="space-y-1 text-xs md:text-base  ">
        {items.map((item, index) => (
          <p key={index} className="text-gray-800 break-all">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
export const SidebarSectionX: React.FC<SidebarSectionProps> = ({
  title,
  items,
}) => {
  return (
    <div className="mb-6">
      <div className="font-bold text-lg mb-2">{title}</div>
      <div className="flex-1 border-t-2 mb-4 border-black "></div>
      <div className="space-y-1 text-xs md:text-base tooltip" data-tip="Contact Info">
        {items.map((item, index) => (
          <p key={index} className="text-gray-800 break-all blur-sm">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export const SidebarLinks: React.FC<SidebarLinkProps> = ({ title, links }) => {
  return (
    <div className="mb-6">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <div className="flex-1 border-t-2 mb-4 border-black"></div>
      <div className="space-y-1 flex flex-col no-underline text-xs md:text-base">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="text-black hover:underline flex gap-x-2 items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.logo}
            <p>{link.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};
const Resume: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const NameCard = () => {
    return (
      <div className="flex flex-col absolute py-2 px-8 md:py-8 md:px-28 bg-white border-solid border-2 border-black ml-10 mt-12 md:ml-48 md:mt-12">
        <span className="text-3xl font-bold">ANSHUL KUMAR</span>
      </div>
    );
  };
  const skills = [
    "React.js/Next.js",
    "Solidity",
    "Rust (Programming Language)",
    "Node.js",
    "Go (Programming Language)",
    "TypeScript / JavaScript",
    "Ethereum",
  ];
  const languages = ["English", "Hindi"];
  const links = [
    { name: "GitHub", url: "https://github.com", logo: <PiGithubLogoBold /> },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      logo: <PiLinkedinLogoBold />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/auralshin",
      logo: <BsTwitterX />,
    },
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
  const profileData = {
    summary:
      "Experienced Engineer with a proven track record in system design, implementation, and optimization. Throughout my career, I've honed my expertise in architecting solutions that not only meet technical excellence but also align seamlessly with overarching business objectives. My passion lies in crafting innovative, efficient, and scalable systems, where I've consistently demonstrated my ability to balance technical rigor with a keen understanding of strategic goals.",
  };
  const achievements = [
    {
      descriptions: [
        "Ethereum India Fellowship   ‘21",
        "EthIstanbul Hack ‘23  Mentor",
        "Won Ethereum India Hackathon   ‘22",
        "Won SushiSwap Bounty Eth Dubai Hackathon ‘23",
        "Won Ceramic Bounty in EthGlobal 2020",
        "Won CoinDCX bounty in WarpSpeed Hackathon",
        "Won Router Protocol Bounty in Unfold 2022",
      ],
    },
  ];

  const projects = [
    {
      descriptions: [
        "Proof of Trust | Protocol layer to audit.",
        "Artemis | Autonomous ZK Voting.",
        "Vernate | Decentralized Credit Score.",
        "Swift Alternative for India - Brazil Trade | Truffles - Polygon.",
        "Cadmus | Dex Aggregator.",
        "DID Pallet on Substrate",
        "NPM package for Mongoose.",
        "Rust package for Node.js addon.",
      ],
      link: [
        "https://devfolio.co/projects/proof-of-trust-7407",
        "https://ethglobal.com/showcase/artemis-dapyu",
        "https://www.github.com/auralshin/venrate",
        "https://arxiv.org/abs/2306.00439",
        "https://github.com/kpguru20001/cadmus",
        "https://github.com/auralshin/did_pallet",
        "https://www.npmjs.com/package/mongoose-uuid-ts",
        "https://crates.io/crates/rust_json_parser",
      ],
    },
  ];

  const experiences = [
    {
      title: "Lead Backend/Blockchain Engineer",
      company: "Truffles",
      period: "Nov 2022 — Present",
      location: "Singapore",
      descriptions: [
        "Spearheaded the design and launch of a sophisticated banking application, optimizing for the crypto-fiat sector with advanced backend solutions in Nest Js, Go, and Rust.",
        "Accelerated the Nest Js compiler performance with Rust enhancements, reducing deployment latency from 27 seconds to approximately 0.3 seconds.",
        "Orchestrated the implementation of LC flow for app-specific trade finance and invoice factoring on the blockchain, streamlining operations.",
        "Engineered and deployed on-chain Real-World Assets (RWA) smart contracts, propelling the company's foray into blockchain finance.",
      ],
    },
    {
      title: "Protocol Engineer",
      company: "Reputex",
      period: "Jan 2022 — Nov 2022",
      location: "Remote",
      descriptions: [
        "Revitalized the data verification process for smart contracts, improving system integrity and robustness.",
        "Initiated and integrated an Oracle service and Zero-Knowledge (ZK) proof based module, fortifying credit system security and trustworthiness.",
        "Ensured data integrity in smart contract transactions, significantly elevating system reliability.",
      ],
    },
    {
      title: "Blockchain Developer",
      company: "Nord Finance",
      period: "Nov 2021 — Nov 2022",
      location: "Remote",
      descriptions: [
        "Pioneered user investment tracking innovations and decentralized loan mechanisms, enhancing client financial management.",
        "Devised and executed investment detail capture systems, advancing smart contract utility for financial operations.",
        "Piloted the aggregation of user data with a focus on privacy, setting a foundation for future decentralized loan functionalities.",
      ],
    },
    {
      title: "Blockchain Developer",
      company: "Blocumen Studious",
      period: "Jan 2021 — Jul 2021",
      location: "Remote",
      descriptions: [
        "Conceptualized and constructed a React JS dashboard with embedded social media analytics, enhancing data accessibility and user engagement.",
        "Launched a Chrome Extension for Twitter integration, augmenting data aggregation capabilities with smart contract technology.",
      ],
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <MockWindow>
      <div ref={componentRef} id="resume" className=" max-w-4xl font-sans mx-auto h-auto grid grid-cols-12 bg-white shadow-lg rounded-b-lg overflow-hidden">
        <NameCard />
        <div className="bg-gray-400 col-span-4">
          <aside className="mt-36" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-transparent rounded">
              <SidebarSectionX
                title="DETAILS"
                items={["+91 73496 32938", "anshulspartan141@gmail.com"]}
              />
              <SidebarLinks title="LINKS" links={links} />
              <SidebarSection title="SKILLS" items={skills} />
              <SidebarSection title="LANGUAGES" items={languages} />
              <div className="flex flex-col justify-center">
                <div className="text-xl font-bold mb-2 tracking-wider">Download or Print</div>
                <div className="flex-1 border-t-2 mb-4 border-black"></div>
                <button
                  onClick={handlePrint}
                  className="bg-black text-white py-2 px-4 rounded"
                >
                  Download
                </button>
                </div>
            </div>
          </aside>
        </div>
        <div className="col-span-8">
          <div className="mt-36">
            <div className="p-4 di">
              <Profile {...profileData} />
              <div className="mt-4">
                <h2 className="text-xl font-bold mb-2 tracking-wider">
                  PROFESSIONAL EXPERIENCE
                </h2>
                <div className="flex-1 border-t-2 mb-4 border-black"></div>
                {experiences.map((exp, index) => (
                  <Experience key={index} {...exp} />
                ))}
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-bold mb-2 tracking-wider">
                  ACHIEVEMENTS
                </h2>
                <div className="flex-1 border-t-2 mb-4 border-black"></div>
                {achievements.map((exp, index) => (
                  <Achievements key={index} {...exp} />
                ))}
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-bold mb-2 tracking-wider">
                  PROJECTS
                </h2>
                <div className="flex-1 border-t-2 mb-4 border-black"></div>
                {projects.map((exp, index) => (
                  <Projects key={index} {...exp} />
                ))}
              </div>
            </div>
          </div>
        </div>
      
      </div>
      </MockWindow>
    </div>
  );
};

export default Resume;
