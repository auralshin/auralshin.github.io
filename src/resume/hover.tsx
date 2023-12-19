import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";

const HoverButton = ({ HoverIcon, iconColorClass, outerColorClass }: { HoverIcon: any, iconColorClass: string, outerColorClass: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="button-base"
    >
      {isHovered ? (
        <HoverIcon className={iconColorClass} />
      ) : (
        <FaCircle className={outerColorClass} />
      )}
    </button>
  );
};

export default HoverButton;

