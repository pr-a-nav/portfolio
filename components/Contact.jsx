// icons import
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io";

const Contact = () => {
  return (
    <div id="contact" className="p-10 pt-24">
      <div className="text-white">
        <span className="primary-color lg:text-lg">03.</span> &nbsp;
        <span className="bright-white text-2xl font-semibold lg:text-4xl">
          Connect with me
        </span>
        <hr className="hr-color max-w-xs" />
      </div>

      <div className="mt-10 dull-white">
        <p className="max-w-xl">
          I always look for new opportunities, my inbox is always open. Whether
          you have a question or just want to say hi, I’ll get back to you!
        </p>
      </div>

      <div className="mt-7 flex space-x-5 justify-evenly lg:justify-start">
        <a
          href="https://www.linkedin.com/in/pranav-mishra-3157721ba/"
          className="hover:bg-gray-800 p-2 rounded-full"
        >
          <IoLogoLinkedin className="text-white text-4xl" />
        </a>
        <a
          href="https://github.com/pr-a-nav"
          className="hover:bg-gray-800 p-2 rounded-full"
        >
          <IoLogoGithub className="text-white text-4xl" />
        </a>
        <a
          href="https://www.instagram.com/pra._nav_/"
          className="hover:bg-gray-800 p-2 rounded-full"
        >
          <IoLogoInstagram className="text-white text-4xl" />
        </a>
        <a
          href="https://twitter.com/PranavM57263792"
          className="hover:bg-gray-800 p-2 rounded-full"
        >
          <IoLogoTwitter className="text-white text-4xl" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
