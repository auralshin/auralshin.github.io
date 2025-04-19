import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { PiMediumLogoBold, PiGithubLogoBold, PiTelegramLogoDuotone } from "react-icons/pi";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

function App() {
  type ListItem = { text: string; url?: string };
  type ListProps = { items: ListItem[] };

  const List: React.FC<ListProps> = ({ items }) => (
    <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-4">
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center justify-between text-gray-700">
            <span className="font-medium">{item.text}</span>
            {item.url && (
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <LiaExternalLinkAltSolid className="w-5 h-5" />
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  const achievements: ListItem[] = [
    { text: "Ethereum India Fellowship ‘21", url: "https://devfolio.co/projects/venrate-867b" },
    { text: "EthIstanbul Hack ‘23 Mentor" },
    { text: "Won Ethereum India Hackathon ‘22", url: "https://devfolio.co/projects/proof-of-trust-7407" },
    { text: "Secured SushiSwap Bounty Eth Dubai Hackathon ‘23", url: "https://github.com/mundhrakeshav/eth-dubai" },
    { text: "Secured Ceramic Bounty in EthGlobal 2020", url: "https://ethglobal.com/showcase/aletheia-akzng" },
    { text: "Secured CoinDCX bounty in WarpSpeed Hackathon", url: "https://devfolio.co/projects/deeasy-9cb1" },
    { text: "Secured Router Protocol Bounty in Unfold 2022", url: "https://devfolio.co/projects/plutus-460b" },
  ];

  const projects: ListItem[] = [
    { text: "Proof of Trust | Protocol layer to audit.", url: "https://devfolio.co/projects/proof-of-trust-7407" },
    { text: "Artemis | Autonomous ZK Voting.", url: "https://ethglobal.com/showcase/artemis-dapyu" },
    { text: "Vernate | Decentralized Credit Score.", url: "https://github.com/auralshin/venrate" },
    { text: "Swift Alternative for India - Brazil Trade | Truffles - Polygon.", url: "https://arxiv.org/abs/2306.00439" },
    { text: "Cadmus | Dex Aggregator.", url: "https://github.com/kpguru20001/cadmus" },
    { text: "DID Pallet on Substrate", url: "https://github.com/auralshin/did_pallet" },
    { text: "NPM package for Mongoose.", url: "https://www.npmjs.com/package/mongoose-uuid-ts" },
    { text: "Rust package for Node.js addon.", url: "https://crates.io/crates/rust_json_parser" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 bg-gradient-to-br from-indigo-700 via-purple-600 to-blue-400">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6">Auralshin</h1>

      <p className="bg-white/80 backdrop-blur-sm text-gray-800 text-center rounded-xl px-6 py-4 shadow-md mb-8 max-w-xl">
        I'm a blockchain developer with a focus on infrastructure and system design.
      </p>

      <div className="flex gap-6 mb-10">
        {[
          { icon: <PiGithubLogoBold />, url: "https://github.com/auralshin" },
          { icon: <BsTwitterX />, url: "https://x.com/auralshin" },
          { icon: <PiMediumLogoBold />, url: "https://medium.com/@auralshin" },
          { icon: <PiTelegramLogoDuotone />, url: "https://t.me/Auralshin" },
        ].map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-white/20 hover:bg-white/40 rounded-full p-3 transition"
          >
            <span className="w-6 h-6">{link.icon}</span>
          </a>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Achievements</h2>
          <List items={achievements} />
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Projects / Research</h2>
          <List items={projects} />
        </section>
      </div>
    </div>
  );
}

export default App;
