// FixedNavbar.jsx
import React,{useState ,useEffect} from "react";
import Sidebar from "./Sidebar";
import './Navbar.css';


    
    

const FixedNavbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
     
    
      // Function to scroll to the top
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Optional: adds smooth scrolling effect
        });
      };
     
     
  return (
    <div className="bg-white text-white fixed top-0 left-0 w-full shadow-lg flex flex-row justify-between">
      <div className="lg:mx-28 md:mx-20 sm:mx-10 mx-5 lg:p-5 md:p-5 p-3">
        <img  className="w-30 h-8 lg:w-70 lg:h-10 cursor-pointer sm:w-30 sm:h-10"  src={`${process.env.PUBLIC_URL}/Images/lejhro_logo_blue.png`} alt="Logo" />
      </div>
      <div className='flex flex-row justify-center items-center lg:mx-28 md:mx-20 sm:mx-10 mx-5 lg:p-5 md:p-5 p-3'>
        <h1 className='text-blue-600 mr-2 cursor-pointer font-md font-bold custom-hidden '>Let's Talk &rarr;</h1>
        <img className="w-70 h-10 bg-white rounded-full p-1 cursor-pointer"  src={`${process.env.PUBLIC_URL}/Images/menu.png`} alt="menu"  onClick={toggleSidebar} ></img>
        
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className="">
      <img className="fixed bottom-3 right-3 w-10 h-10 rounded-full cursor-pointer" src={`${process.env.PUBLIC_URL}/Images/arrow.png`} alt="arrow"  onClick={scrollToTop}></img>
      </div>
      
    </div>
  );
};

export default FixedNavbar;
