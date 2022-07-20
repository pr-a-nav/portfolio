import React, { useState } from "react";

// icons
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

// local imports
import SidebarProps from "./SidebarProps";

const Header = () => {
  const [mobMenu, setMobMenu] = useState(false);

  const handleMobMenu = () => {
    setMobMenu(true);

    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const closeMobMenu = () => {
    setMobMenu(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="sticky top-0 py-5 z-50 bg-blur">
      {/* Mobile Nav */}
      <div className="inline-flex justify-between w-full items-center lg:hidden px-5">
        {/* left section */}
        <div
          className="w-10 h-10 justify-center items-center flex p-2 
          primary-border rounded-full border-2 cursor-pointer select-none"
        >
          <a href="/">
            <p className="primary-color text-3xl">P</p>
          </a>
        </div>

        {/* right section */}
        <div>
          <HiOutlineMenuAlt3
            className="primary-color text-4xl cursor-pointer"
            onClick={handleMobMenu}
          />
        </div>
      </div>

      {mobMenu && (
        <div
          className="h-screen z-[52] top-0 flex flex-col right-0 fixed 
          sidebar-container w-full"
        >
          <div className="w-3/4 top-0 right-0 flex flex-col h-screen bg-white p-36 light-bg fixed">
            <div className="top-0 flex right-0 absolute m-5">
              <AiOutlineClose
                className="text-3xl cursor-pointer primary-color"
                onClick={closeMobMenu}
              />
            </div>
            <a href="#about" onClick={closeMobMenu}>
              <SidebarProps index="01." title="About" />
            </a>
            <a href="#techno" onClick={closeMobMenu}>
              <SidebarProps index="02." title="Technologies" />
            </a>

            <a href="#contact" onClick={closeMobMenu}>
              <SidebarProps index="03." title="Contact" />
            </a>
          </div>
        </div>
      )}

      {/* Desktop Nav */}
      <div className="bg-blue-500 hidden lg:flex"></div>

      {/* ........................................... */}
    </div>
  );
};

export default Header;
