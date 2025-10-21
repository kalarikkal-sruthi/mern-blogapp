import Navabar from "@/components/Navbar/Navabar";
import React from "react";
import "./addblog.css";

function Addblog() {
  return (
    <main>
      <Navabar />
      <div className="addblog_in">
       
        <form
          action=""
          style={{
            width: "70%",
            minWidth: "250px",
            display: "flex",
            flexDirection: "column",
          }}
        > <h1 className="head1">Add Blog</h1>
          <div className="forminput-content">
            <label htmlFor="">Blogname</label>
            <input type="email" name="" placeholder="Enter Your blog" />
          </div>
          <div className="forminput-content">
            <label htmlFor="">Blog Description</label>
            <textarea placeholder="Enter Your blog description" />
          </div>

          <div className="forminput-content">
            <label htmlFor="">Blog Image</label>
            <input type="file" />
          </div>
          <div className="paragraph">
            <div className="forminput-content">
              <label htmlFor="">paragraph title</label>
              <input type="text" name="" placeholder="Enter paragraph title" />
            </div>
            <div className="forminput-content">
              <label htmlFor="">paragraph Description</label>
              <textarea placeholder="Enter Your paragraph description" />
            </div>
            <div className="forminput-content">
              <label htmlFor="">paragraph Image</label>
              <input type="file" />
            </div>
            <button type="submit" className="main-button">
              Add More Paragraph
            </button>
          </div>
          <button type="submit" className="main-button">
            submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default Addblog;
