import React from "react"

export function Footer()
{
    return(
        <div className="border-t-4 border-blue-600">
             <div className="flex flex-row lg:mx-28 md:mx-20 sm:mx-10 mx-5 lg:p-10 md:p-5 p-3 justify-between flex-wrap lg:flex-nowrap">
                <div>
                <h1 className='text-lg my-2 font-bold'>Company</h1>
                  <ul>
                    <li className="mt-2"><a href="#">Innovations</a></li>
                    <li className="mt-2"><a href="#">Business Services</a></li>
                    <li className="mt-2"><a href="#">Finacial Services</a></li>
                    <li className="mt-2"><a href="#">Bootcamp</a></li>
                    <li className="mt-2"><a href="#">About</a></li>
                    <li className="mt-2"><a href="#">Blogs</a></li>
                  </ul>
                </div>
                <div>
                <h1 className='text-lg my-2 font-bold'>Programs</h1>
                  <ul>
                    <li className="mt-2"><a href="#">Lejhro Bootcamp</a></li>
                    
                  </ul>
                </div>
                <div>
                <h1 className='text-lg my-2 font-bold'>Support</h1>
                  <ul>
                    <li className="mt-2"><a href="#">Contact</a></li>
                    <li className="mt-2"><a href="#">Terms of Use</a></li>
                    <li className="mt-2"><a href="#">Privacy Statement</a></li>
                   
                  </ul>  
                </div>
                <div>
                <h1 className='text-lg my-2 font-bold'>Contact with Us</h1>
                  <ul>
                    <li className="mt-2"><a href="#">Contact</a></li>
                    <li className="mt-2"><a href="#">Terms of Use</a></li>
                    <li className="mt-2"><a href="#">Privacy Statement</a></li>
                   
                  </ul>  
                </div>
             </div>
             <div className="flex flex-row justify-center mb-3">
                <h1>© 2024 LEJHRO. All Rights Reserved.</h1>
             </div>
        </div>
    )
}
export default Footer;