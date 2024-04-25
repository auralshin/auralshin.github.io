import { PiLinkedinLogoBold } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { PiMediumLogoBold } from "react-icons/pi";
import { PiGithubLogoBold } from "react-icons/pi";
import { PiTelegramLogoDuotone } from "react-icons/pi";
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
      links: [
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
        "Engineered a Rust-based ZK Prover for Merkle tree-based transactions",
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

export {
  skills,
  languages,
  links,
  profileData,
  achievements,
  projects,
  experiences,
};
