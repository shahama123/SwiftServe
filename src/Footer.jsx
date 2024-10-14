import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black text-slate-300 pt-4 pl-10 pb-5">
      <div className=" flex justify-between">
        <div>
          <p>© 2024 Ayishath Shahama. All rights reserved.</p>
        </div>
        <div className="flex space-x-5 pr-16 text-lg">
          <a href="/">
            <FaInstagram />
          </a>
          <a href="/">
            <FaLinkedin />
          </a>
          <a href="/">
            <MdEmail />
          </a>
          <a href="/">
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-4 pl-32 pt-5">
        <div>
          <h4>Project</h4>
          <div className="grid grid-cols-1">
            <a href="/">Change log</a>
            <a href="/">Status</a>
            {/* <a href="/">License</a> */}
            {/* <a href="/">All Versions</a> */}
          </div>
        </div>
        <div>
          <h4>Community</h4>
          <div className="grid grid-cols-1">
            <a href="/">GitHub</a>
            <a href="/">Issues</a>
            {/* <a href="/">Projects</a> */}
            {/* <a href="/">All Twitter</a> */}
          </div>
        </div>
        <div>
          <h4>Help</h4>
          <div className="grid grid-cols-1">
            {" "}
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            {/* <a href="/">Contact Us </a> */}
          </div>
        </div>
        <div>
          <h4>Others</h4>
          <div className="grid grid-cols-1">
            {" "}
            <a href="/">Terms of Service </a>
            <a href="/">Privacy Policy</a>
            {/* <a href="/">License</a> */}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
