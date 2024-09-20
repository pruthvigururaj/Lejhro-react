import React from "react";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-96 bg-white text-white transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4">
        <div className="flex flex-row justify-between pb-3">
          <div>
            <img className="w-52 h-10" src="/Images/lejhro_logo_blue.png" alt="img_blue"></img>
           </div>
           <div className="text-2xl bg-white text-black rounded-full px-2 py-1 border border-black cursor-pointer  hover:bg-black hover:text-white" onClick={toggleSidebar}>
            X
          </div>
        </div>
        <hr></hr>
        
        
        <ul className="mt-4 text-black text-2xl font-bold">
          <li className="mt-5"><a className="hover:text-blue-400" href="#">Innovation</a></li>
          <li className="mt-5"><a className="hover:text-blue-400" href="#">Bootcamp</a></li>
          <li className="mt-5"><a className="hover:text-blue-400" href="#">Business Services</a></li>
          <li className="mt-5"><a className="hover:text-blue-400" href="#">Finacial Services</a></li>
          <li className="mt-5"><a className="hover:text-blue-400" href="#">About</a></li>
          <li className="mt-5"><a className="hover:text-blue-400" href="#">Contact Us</a></li>
          <li className="mt-5"><a className="hover:text-blue-400" href="#">Blogs</a></li>
        </ul>

        <div className="flex flex-row mt-5">
            <img className="w-10 h-10 cursor-pointer" src="/Images/twitter.png" alt="twitter"></img>
            <img className="w-10 h-10 ml-2 cursor-pointer" src="/Images/facebook.png" alt="twitter"></img>
            <img className="w-10 h-10 ml-2 cursor-pointer" src="/Images/linkdn.png" alt="twitter"></img>
            <img className="w-10 h-10 ml-2 cursor-pointer" src="/Images/youtube.png" alt="twitter"></img>
        </div>
      </div>
    </div>
  );
}
