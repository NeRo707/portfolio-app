import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  const notifyError = () => {
    toast.error("Will be soon added 🎲", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const notify = () => {
    toast("📧Gmail copied to clipboard📧", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText("tazo.gorgadze.02@gmail.com");
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt="logo" style={{ width: "80px" }} />
      </div>



      <ul className="hidden md:flex">
        <Link to="home" smooth={true} duration={500}>
          <li className="hover:text-pink-600 duration-300">Home</li>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <li className="hover:text-pink-600 duration-300">About</li>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <li className="hover:text-pink-600 duration-300">Skills</li>
        </Link>
        <Link to="work" smooth={true} duration={500}>
          <li className="hover:text-pink-600 duration-300">Work</li>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <li className="hover:text-pink-600 duration-300">Contact</li>
        </Link>
      </ul>


      <div onClick={handleClick} className="block md:hidden z-10">
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      <ul
        style={{ backgroundColor: "hsla(217, 64%, 11%, 0.8)" }}
        className={
          nav
            ? "md:hidden absolute top-0 right-0 left-0 bottom-0 w-full h-screen flex flex-col justify-center items-center ease-out duration-300"
            : "md:hidden absolute top-0 right-0 left-[-100%] bottom-0 w-full h-screen flex flex-col justify-center items-center ease-out duration-300"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>


      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 items-center">
        <ul>
        <li className="pr-0 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]">
            <a
              className="flex justify-between items-center text-gray-300 w-[160px] h-[60px] pr-4"
              href="https://github.com/NeRo707"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="pr-0 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center text-gray-300 w-[160px] h-[60px] pr-4"
              href="https://github.com/NeRo707"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="pr-0 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-teal-700">
            <div
              onClick={notify}
              className="flex justify-between items-center w-full text-gray-300 h-[60px] pr-4"
            >
              Email <HiOutlineMail size={30} />
            </div>
          </li>
          <li className="pr-0 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <div
              onClick={notifyError}
              className="flex justify-between items-center text-gray-300 w-[160px] h-[60px] pr-4"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </div>
          </li>
        </ul>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
};

export default Navbar;
