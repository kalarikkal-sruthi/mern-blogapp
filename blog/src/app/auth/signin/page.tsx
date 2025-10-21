import Navabar from "@/components/Navbar/Navabar";
import React from "react";
import Link from "next/link";
import "../auth.css"

function Signin() {
  return (
    <main>
      <div className="authout">
        <Navabar />
        <div className="authin">
          <div className="left"></div>
          <div className="right">
            <form action="" style={{display:'flex',flexDirection:'column'}}>
             
              <div className="forminput-content">
                <label htmlFor="">Email</label>
                <input type="email" name="" placeholder="Enter Your Email" />
              </div>
              <div className="forminput-content">
                <label htmlFor="">Password</label>
                <input type="text" name="" placeholder="Enter Password" />
              </div>
              

              <button type="submit" className="main-button">
                Submit
              </button>
              <p className="authlink">
                Dont have an account  <Link href="/auth/signup">Register</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signin;
