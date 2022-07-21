import React from "react";

// icons import
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io";

const LeftStickyBar = () => {
  return (
    <div className="fixed bottom-0 hidden lg:flex">
      <div className="px-14 flex flex-col justify-center items-center space-y-5">
        <a href="https://www.linkedin.com/in/pranav-mishra-3157721ba/">
          <IoLogoLinkedin className="text-white text-3xl dull-white hover-primary-color" />
        </a>
        <a href="https://github.com/pr-a-nav">
          <IoLogoGithub className="text-white text-3xl dull-white hover-primary-color" />
        </a>
        <a href="https://www.instagram.com/pra._nav_/">
          <IoLogoInstagram className="text-white text-3xl dull-white hover-primary-color" />
        </a>
        <a href="https://twitter.com/PranavM57263792">
          <IoLogoTwitter className="text-white text-3xl dull-white hover-primary-color" />
        </a>

        <div className="h-24 w-[1px] dull-bg"></div>
      </div>
    </div>
  );
};

export default LeftStickyBar;
