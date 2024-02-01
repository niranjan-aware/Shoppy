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
      <div className="menu flex sm:flex-col sm:bg-white flex-row  justify-between sm:absolute sm:left-0 sm:top-0 sm:w-screen sm:justify-center sm:items-center sm:z-10 sm:-top-[500px]">
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
      
    </div>
  );
};

export default Navbar;



