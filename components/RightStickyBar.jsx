import React from "react";

// icons import
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io";

const RightStickyBar = () => {
  return (
    <div className="fixed right-0 bottom-0 hidden lg:flex">
      <div className="flex flex-col justify-center items-center space-y-32">
        <a
          href="mailto:pranavmishra680@gmail.com"
          className="dull-white rotate-90 hover-primary-color"
        >
          pranavmishra680@gmail.com
        </a>

        <div className="h-24 w-[1px] dull-bg"></div>
      </div>
    </div>
  );
};

export default RightStickyBar;
