import React from 'react';

interface ProjectProps {
  descriptions: string[];
  links: string[];
}

const Project: React.FC<ProjectProps> = ({ descriptions, links }) => {
  return (
    <div className="mb-5">
      <ul className="list-disc ml-5 text-gray-700">
        {descriptions.map((desc, index) => (
          <li key={index} className="text-sm">
            <a href={links[index]} className="hover:underline flex items-center gap-x-2" target="_blank" rel="noopener noreferrer">
              {desc}
              {/* Assuming LiaExternalLinkAltSolid is a component for an external link icon */}
              {/* <LiaExternalLinkAltSolid className="inline-block" /> */}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
