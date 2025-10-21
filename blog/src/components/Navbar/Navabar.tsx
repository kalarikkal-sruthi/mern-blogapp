import React from "react";
import Link from "next/link";
import { BiPlus, BiSolidUserCircle, BiSearchAlt } from "react-icons/bi";
import Image from "next/image";
import logo from "@/assets/logo.png";
import "./Navbar.css"

function Navabar() {
  return (
    <nav>
      <div className="navbar-left">
        <Link href="/pages/profile" className="link">
          <BiSolidUserCircle className="icon" />
        </Link>
        <Link className="link" href="/pages/addblog">
          <BiPlus />
        </Link>
        <Link className="link" href="/search">
          <BiSearchAlt />
        </Link>
      </div>
      <div className="navbar-middle">
        <Link href="">
          <Image src={logo} alt=""  style={{width:'100px',height:'100px'}} className=""></Image>
        </Link>
      </div>
      <div className="navbar-right">
        <Link href="/pages/profile" className="link">
          Home
        </Link>
        <Link  className="link" href="/pages/addblog">About</Link>
        <Link className="link" href="/pages/contact">Contact</Link>
      </div>
    </nav>
  );
}
export default Navabar;
