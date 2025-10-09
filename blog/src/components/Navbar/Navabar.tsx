import React from "react";
import Link from "next/link";
import { BiPlus, BiSolidUserCircle ,BiSearchAlt } from "react-icons/bi";

function Navabar() {
  return (
    <nav>
      <div className="navbar-left">
        <Link href="/profile" className="link">
          <BiSolidUserCircle className="icon" />
        </Link>
        <Link href="/addblog">
          <BiPlus />
        </Link>
        <Link href="/search">
          <BiSearchAlt />
        </Link>
      </div>
      <div className="navbar-middle">
        
      </div>
      <div className="navabr-right"></div>
    </nav>
  );
}
export default Navabar;
