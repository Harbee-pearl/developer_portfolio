import { useState } from "react";
import { MobileNavIcon } from "../assets/icons";
import { UserAvatar } from "../assets/images";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <div className="w-full bg-white py-2 relative z-50">
      <div className="w-full lg:w-11/12 xl:w-10/12  px-4 mx-auto flex items-center justify-between ">
        <div className="rounded-full">
          <img
            src={UserAvatar}
            alt="itex-logo"
            className="rounded-full w-20 h-20"
          />
        </div>

        <div className="md:hidden w-fit p-2 " onClick={toggleMenu}>
          <img src={MobileNavIcon} alt="nav-icon" />
        </div>

        <div className=" hidden md:flex items-center">
          <a href="#home" className="nav-item">
            HOME
          </a>
          <a href="#about" className="nav-item">
            ABOUT ME
          </a>
          <a href="#projects" className="nav-item">
            PROJECTS
          </a>
          <a href="#contact" className="nav-item">
            CONTACT
          </a>
        </div>

        <div
          className={`${
            mobileMenu
              ? "flex absolute top-6 right-0 left-0 bg-white h-20rem shadow-customOne rounded-bl-md rounded-br-md z-[60] flex-col items-between overflow-y-auto"
              : "hidden"
          } `}
        >
          <div className="">
            <div className="flex items-center justify-end">
              <span
                className="font-bold text-lg mt-8 mr-8"
                onClick={toggleMenu}
              >
                X
              </span>
            </div>

            <div className=" mx-4 flex flex-col items-start gap-y-5">
              <a href="#home" className="nav-item">
                HOME
              </a>
              <a href="#about" className="nav-item">
                ABOUT ME
              </a>
              <a href="#projects" className="nav-item">
                PROJECTS
              </a>
              <a href="#contact" className="nav-item">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
