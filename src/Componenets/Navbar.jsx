import React,{useState ,useEffect} from "react";
import Sidebar from "./Sidebar";
import FixedNavbar from "./FixedNavbar";
import './Navbar.css';


export function Navbar()
{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

 
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

 
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
   
  return(
    <div className="bg-yellow-600 ">
        {showNavbar && <FixedNavbar />}
       <div className="flex flex-row md:px-28 sm:px-10 py-10 px-5 justify-between items-center logo-padding">
         <div>
              <img className="w-70 h-10 cursor-pointer sm:w-50 sm:h-8" src={`${process.env.PUBLIC_URL}/Images/lejhro_logo_white.png`} alt="Img_logo"></img>
         </div>

         <div className="pl-10 text-white custom-hidden pad">
             <ul className="flex flex-row flex-nowrap pl-10  pad">
                <li className="mx-4 list-margin hover:text-gray-300"><a href="#">Innovations</a></li>
                <li className="mx-4 list-margin hover:text-gray-300"><a href="#">Business Services</a></li>
                <li className="mx-4 list-margin hover:text-gray-300"><a href="#">Finacial Services</a></li>
                <li className="mx-4 list-margin hover:text-gray-300"><a href="#">Bootcamp</a></li>
             </ul>
         </div>

         <div >
              <img className="w-70 h-10 bg-white rounded-full p-1 cursor-pointer" src={`${process.env.PUBLIC_URL}/Images/menu.png`}  onClick={toggleSidebar} ></img>
         </div>
       </div>

       <div className="flex flex-row px-28 py-10 justify-start items-center logo-padding">
           <h1 className="text-5xl text-white">Blogs</h1>
       </div>

       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
    </div>
  )
}
export default Navbar;