import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { VscMenu } from "react-icons/vsc";

const Navbar = () => {
  return (
    <nav className="py-[25px] px-[25px] md:py-12 md:px-28 flex items-center justify-between font-[400]">
      <Link
        to="mailto:juadebgabriel@gmail.com"
        className="flex items-center justify-between gap-[10px] hover:underline underline-offset-2 duration-100 ease-linear"
      >
        <AiOutlineMail />
        <span> Juadebgabriel@gmail.com</span>
      </Link>
      <ul className="hidden md:flex items-center justify-between gap-5">
        <Link
          to="/"
          className="hover:underline underline-offset-2 duration-100 ease-linear"
        >
          <li>About</li>
        </Link>
        <Link
          to="/"
          className="hover:underline underline-offset-2 duration-100 ease-linear"
        >
          <li>Services</li>
        </Link>
        <Link
          to="/"
          className="hover:underline underline-offset-2 duration-100 ease-linear"
        >
          <li>Portfolio</li>
        </Link>
        <Link
          to="/"
          className="hover:underline underline-offset-2 duration-100 ease-linear"
        >
          <li>Contact</li>
        </Link>
      </ul>
      <VscMenu className="text-[25px] flex md:hidden" />
    </nav>
  );
};

export default Navbar;
