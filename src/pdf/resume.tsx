// Resume.tsx
import React, { useRef } from "react";
import {
  skills,
  languages,
  links,
  profileData,
  achievements,
  projects,
  experiences,
} from "./utils";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { useReactToPrint } from "react-to-print";
import Profile from "./profile";
import Experience from "./experience";
import Achievements from "./achievement";
import Projects from "./project";
import SidebarSection from "./sidebarsection";
import SidebarLinks from "./sidebarlinks";

// Types.ts

const PDF: React.FC = () => {
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

  return (
    <Document>
      <div className="flex justify-center items-center">
        <div
          ref={componentRef}
          id="resume"
          className=" max-w-4xl font-sans mx-auto h-auto grid grid-cols-12 bg-white shadow-lg rounded-b-lg overflow-hidden"
        >
          <NameCard />
          <div className="bg-gray-400 col-span-4">
            <aside className="mt-36" aria-label="Sidebar">
              <div className="overflow-y-auto py-4 px-3 bg-transparent rounded">
                <SidebarSection
                  title="DETAILS"
                  items={["+91 73496 32938", "anshulspartan141@gmail.com"]}
                />
                <SidebarLinks title="LINKS" links={links} />
                <SidebarSection title="SKILLS" items={skills} />
                <SidebarSection title="LANGUAGES" items={languages} />
                <div className="flex flex-col justify-center">
                  <div className="text-xl font-bold mb-2 tracking-wider">
                    Download or Print
                  </div>
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
                  
                    <Achievements/>
                 
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
      </div>
    </Document>
  );
};

export default PDF;
