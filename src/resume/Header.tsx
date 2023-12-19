import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="border-b pb-4">
      <div className="flex flex-col">
        <span className="text-6xl font-bold">ANSHUL KUMAR</span>
        <div className="flex mt-4">
          <div className="flex flex-col mr-8">
            <span className="font-semibold">PHONE</span>
            <span>+9173496 32938</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">EMAIL</span>
            <span>anshulspartan14@gmail.com</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
