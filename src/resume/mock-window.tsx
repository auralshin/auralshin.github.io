import React, { ReactElement, FC } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { TbArrowsDiagonalMinimize } from "react-icons/tb"
import { FaMinus } from "react-icons/fa";
import HoverButton from "./hover";
interface MockWindowProps {
  children: ReactElement;
}

// You should type the component as FC (Functional Component) with the appropriate props.
const MockWindow: FC<MockWindowProps> = ({ children }) => {
    return (
        <div className="mock-window font-sans">
            <div className="rounded-t-lg">
                <div className="bg-gray-800 flex rounded-t-lg justify-between items-center px-4 py-2">
                    <div className="flex items-center">
                        <HoverButton HoverIcon={IoMdCloseCircle} outerColorClass="text-red-500 mr-2" iconColorClass="text-red-500 mr-2" />
                        <HoverButton HoverIcon={FaMinus} outerColorClass="text-yellow-500 mr-2 rounded-full" iconColorClass="bg-yellow-500 mr-2 rounded-full flex align-items-start" />
                        <HoverButton HoverIcon={TbArrowsDiagonalMinimize} outerColorClass="text-green-500 mr-2" iconColorClass="bg-green-500 mr-2 rounded-full" />
                    </div>
                    
                </div>
            </div>
            {children}
        </div>
    )
}

export default MockWindow;
