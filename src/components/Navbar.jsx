import React,{useState} from "react";
import Men from "./navComponents/Men";
import Women from "./navComponents/Women";
import Kids from "./navComponents/Kids";
import Beauty from "./navComponents/Beauty";
import HomeAndLiving from "./navComponents/HomeAndLiving";
import Placeholder from "./navComponents/Placeholder";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
const [toggle, setToggle] = useState(true);
const menu=document.querySelector('.menu')
console.log(menu);
  const toggleMenu=()=>{
    setToggle(!toggle)
    menu.classList.toggle('top-0')
  }
  return (
    <div className="flex flex-row w-screen h-16 bg-cyan-100 justify-between items-center fixed z-50 ">
      <div className="ml-10">
        <img src="" alt="LOGO" />
      </div>
      <div className="sm:relative">
      <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
      <button onClick={toggleMenu}>
      {toggle&&<GiHamburgerMenu />}
      {!toggle&&<IoClose />}
      </button>
      </div>
      <div className="menu flex sm:flex-col sm:bg-white flex-row  justify-between sm:absolute sm:left-0  sm:w-screen sm:justify-center sm:items-center sm:z-40 sm:-top-[500px]">
        <div>
          <Men />
        </div>
        <div>
          <Women />
        </div>
        <div>
          <Kids />
        </div>
        <div>
          <Beauty />
        </div>
        <div>
          <HomeAndLiving />
        </div>
      </div>
      </div>
      <div>
        <div className="">
          <Placeholder />
        </div>
      </div>
      <div className="sm:w-20 w-40 flex flex-row justify-between items-center ">
        <a href="#" class="block w-1/2  text-center ">
          <div>
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 20a8 8 0 0 1-5-1.8v-.6c0-1.8 1.5-3.3 3.3-3.3h3.4c1.8 0 3.3 1.5 3.3 3.3v.6a8 8 0 0 1-5 1.8ZM2 12a10 10 0 1 1 10 10A10 10 0 0 1 2 12Zm10-5a3.3 3.3 0 0 0-3.3 3.3c0 1.7 1.5 3.2 3.3 3.2 1.8 0 3.3-1.5 3.3-3.3C15.3 8.6 13.8 7 12 7Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </a>
        <a href="#" class="block w-1/2  text-center ">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M14 7h-4v3a1 1 0 1 1-2 0V7H6a1 1 0 0 0-1 1L4 19.7A2 2 0 0 0 6 22h12c1 0 2-1 2-2.2L19 8c0-.5-.5-.9-1-.9h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 1 1 8 0v1h-2V6a2 2 0 0 0-2-2Z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a href="#" class="block w-1/2  text-center ">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="m12.7 20.7 6.2-7.1c2.7-3 2.6-6.5.8-8.7A5 5 0 0 0 16 3c-1.3 0-2.7.4-4 1.4A6.3 6.3 0 0 0 8 3a5 5 0 0 0-3.7 1.9c-1.8 2.2-2 5.8.8 8.7l6.2 7a1 1 0 0 0 1.4 0Z" />
          </svg>
        </a>
      </div>
      
    </div>
  );
};

export default Navbar;



