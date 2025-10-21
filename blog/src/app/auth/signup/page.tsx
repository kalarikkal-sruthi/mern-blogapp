import Navabar from '@/components/Navbar/Navabar'
import React from 'react'
import Link from 'next/link'
import "../auth.css"

function Signup() {
  return (
  <div className="authout">
     <Navabar />
     <div className="authin">
        <div className="left">

        </div>
        <div className="right">
            <form action="">
                <div className="forminput-content"> 
                <label htmlFor="">Name</label>
                <input type="text" name="" placeholder="Enter Your Name"  />
                </div>
                  <div className="forminput-content"> 
                <label htmlFor="">Email</label>
                <input type="email" name="" placeholder="Enter Your Email"/>
                </div>
                  <div className="forminput-content"> 
                <label htmlFor="">Password</label>
                <input type="text" name="" placeholder="Enter Password"  />
                </div>
                  <div className="forminput-content"> 
                <label htmlFor="">Confirm Password</label>
                <input type="text" name="" placeholder="Confirm Password" />
                </div>

                <button type='submit' className='main-button'>Submit</button>
                <p>Already have an account <Link href="/auth/signin"> Login</Link></p>
              
            </form>
        </div>
     </div>


  </div>
  )
}

export default Signup