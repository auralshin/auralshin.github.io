import React from 'react';

interface SidebarSectionProps {
  title: string;
  items: string[];
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items }) => {
  return (
    <div className="mb-6">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <div className="flex-1 border-t-2 mb-4 border-black"></div>
      <div className="space-y-1 text-xs md:text-base">
        {items.map((item, index) => (
          <p key={index} className="text-gray-800 break-all">{item}</p>
        ))}
      </div>
    </div>
  );
};

export default SidebarSection;
