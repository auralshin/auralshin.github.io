import React from 'react';

interface Link {
  name: string;
  url: string;
  logo?: JSX.Element; // Assuming logo is a JSX element (like an icon)
}

interface SidebarLinkProps {
  title: string;
  links: Link[];
}

const SidebarLinks: React.FC<SidebarLinkProps> = ({ title, links }) => {
  return (
    <div className="mb-6">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <div className="flex-1 border-t-2 mb-4 border-black"></div>
      <div className="space-y-1 flex flex-col">
        {links.map((link, index) => (
          <a key={index} href={link.url} className="text-black hover:underline flex gap-x-2 items-center" target="_blank" rel="noopener noreferrer">
            {link.logo}
            <p>{link.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SidebarLinks;
