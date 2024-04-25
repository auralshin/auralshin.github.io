import React from "react";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { PiMediumLogoBold } from "react-icons/pi";
import { PiGithubLogoBold } from "react-icons/pi";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { SiGoogledocs } from "react-icons/si";
import bbbbImage from "./bbbb.png";
function App() {
  type ListItem = {
    text: string;
    url?: string;
  };
  type ListItemProps = {
    items: ListItem[];
  };
  const List: React.FC<ListItemProps> = ({ items }) => (
    <div className="card w-auto shadow-xl bg-white opacity-90 h-auto flex-grow">
      <div className="card-body text-left ">
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex align-center text-[#383D41]">
              {item.url ? (
                <>
                  <p>{item.text}</p>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <LiaExternalLinkAltSolid className="inline-block" />
                  </a>
                </>
              ) : (
                <p>{item.text}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const achievements = [
    {
      text: "Ethereum India Fellowship ‘21",
      url: "https://devfolio.co/projects/venrate-867b",
    },
    { text: "EthIstanbul Hack ‘23 Mentor" },
    {
      text: "Won Ethereum India Hackathon ‘22",
      url: "https://devfolio.co/projects/proof-of-trust-7407",
    },
    {
      text: "Secured SushiSwap Bounty Eth Dubai Hackathon ‘23",
      url: "https://github.com/mundhrakeshav/eth-dubai",
    },
    {
      text: "Secured Ceramic Bounty in EthGlobal 2020",
      url: "https://ethglobal.com/showcase/aletheia-akzng",
    },
    {
      text: "Secured CoinDCX bounty in WarpSpeed Hackathon",
      url: "https://devfolio.co/projects/deeasy-9cb1",
    },
    {
      text: "Secured Router Protocol Bounty in Unfold 2022",
      url: "https://devfolio.co/projects/plutus-460b",
    },
  ];

  const projects = [
    {
      text: "Proof of Trust | Protocol layer to audit.",
      url: "https://devfolio.co/projects/proof-of-trust-7407",
    },
    {
      text: "Artemis | Autonomous ZK Voting.",
      url: "https://ethglobal.com/showcase/artemis-dapyu",
    },
    {
      text: "Vernate | Decentralized Credit Score.",
      url: "https://www.github.com/auralshin/venrate",
    },
    {
      text: "Swift Alternative for India - Brazil Trade | Truffles - Polygon.",
      url: "https://arxiv.org/abs/2306.00439",
    },
    {
      text: "Cadmus | Dex Aggregator.",
      url: "https://github.com/kpguru20001/cadmus",
    },
    {
      text: "DID Pallet on Substrate",
      url: "https://github.com/auralshin/did_pallet",
    },
    {
      text: "NPM package for Mongoose.",
      url: "https://www.npmjs.com/package/mongoose-uuid-ts",
    },
    {
      text: "Rust package for Node.js addon.",
      url: "https://crates.io/crates/rust_json_parser",
    },
  ];

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen w-full p-6"
      style={{ backgroundImage: `url(${bbbbImage})` }}
    >
      <div className="text-4xl md:text-7xl text-white font-bold text-shadow-[0_4px_8px_var(--tw-shadow-color)] shadow-black">Auralshin</div>
      <div className="bg-white opacity-90 m-6 rounded-2xl">
        <div className="text-center text-[#383D41] m-5">
          I'm a blockchain developer with a focus on <br />
          infrastructure and system design.
        </div>
      </div>
      <div className="social-links flex flex-row flex-wrap md:flex-nowrap gap-x-8 md:gap-x-12 bg-white rounded-2xl p-4">
        {/* <a
          href="https://www.linkedin.com/in/auralshin"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full hover:bg-[#e2e8f0] p-3 tooltip"
          data-tip="Linkedin"
        >
          <PiLinkedinLogoBold />
        </a> */}
        <a
          href="https://www.github.com/auralshin"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full hover:bg-[#e2e8f0] p-3 tooltip"
          data-tip="Github"
        >
          <PiGithubLogoBold />
        </a>
        {/* <a
          href="https://shorturl.at/gjAUX"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full hover:bg-[#e2e8f0] p-3 tooltip"
          data-tip="Resume"
        >
          <SiGoogledocs />
        </a> */}
        <a
          href="https://www.x.com/auralshin"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full hover:bg-[#e2e8f0] p-3 tooltip"
          data-tip="Twitter"
        >
          <BsTwitterX />
        </a>
        <a
          href="https://medium.com/@auralshin"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full hover:bg-[#e2e8f0] p-3 tooltip"
          data-tip="Medium"
        >
          <PiMediumLogoBold />
        </a>
        <a
          href="https://www.t.me/Auralshin"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full hover:bg-[#e2e8f0] p-3 tooltip"
          data-tip="Telegram"
        >
          <PiTelegramLogoDuotone />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center w-[80vw]">
        <section className="h-full flex flex-col">
          <div className="bg-white opacity-90 m-6 rounded-2xl">
            <h2 className="text-2xl text-[#383D41] flex-grow">ACHIEVEMENTS</h2>
          </div>
          <List items={achievements} />
        </section>
        <section className="h-full flex flex-col">
          <div className="bg-white opacity-90 m-6 rounded-2xl">
            <h2 className="text-2xl text-[#383D41] flex-grow">PROJECTS / RESEARCH PAPER</h2>
          </div>
          <List items={projects} />
        </section>
      </div>
    </div>
  );
}

export default App;
