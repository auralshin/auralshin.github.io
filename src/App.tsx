import React from "react";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { PiMediumLogoBold } from "react-icons/pi";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

function App() {
  type ListItem = {
    text: string;
    url?: string;
  };
  type ListItemProps = {
    items: ListItem[];
  };
  const List: React.FC<ListItemProps> = ({ items }) => (
    <div className="card w-auto shadow-xl bg-[#ffffff] h-[35vh] ">
      <div className="card-body text-left hover:bg-[#e2e8f0]">
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex align-center ">
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
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="text-3xl">Auralshin</div>
      <div className="text-center m-5">
        I'm a blockchain developer with a focus on <br />
        infrastructure and system design.
      </div>
      {/* className="lg:tooltip" data-tip="hello" */}
      <div className="social-links flex flex-row gap-x-12 bg-gray-400 rounded-2xl p-4">
        <a
          href="https://www.linkedin.com/in/auralshin"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full hover:bg-[#e2e8f0] p-3 tooltip"
          data-tip="Linkedin"
        >
          <PiLinkedinLogoBold />
        </a>
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
      <div className="grid grid-cols-2 gap-4 text-center w-[80vw]">
        <section>
          <h2 className="text-2xl">ACHIEVEMENTS</h2>
          <List items={achievements} />
        </section>
        <section>
          <h2 className="text-2xl">PROJECTS / RESEARCH PAPER</h2>
          <List items={projects} />
        </section>
      </div>
      <div className="flex flex-row gap-8 text-center "></div>
    </div>
  );
}

export default App;
