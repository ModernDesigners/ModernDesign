import { useState } from "react";
import { IiconBG } from "../assets/icons/icons";
import navLinks from "./Navlinks";

export default function Navbar() {
  const [navActive, setNavActive] = useState(0);
  const navButtons: {
    name: string;
    link: string;
  }[] = navLinks;

  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

  return (
    <nav
      className={`w-full border-b-2 top-0 border-navLine h-[65px]  z-10 transition-all  bg-white md:fixed md:z-50 md:overflow-hidden md:pb-3 ${
        isNavbarOpen ? "!h-[340px]" : ""
      } `}
    >
      <div
        onClick={() => setIsNavbarOpen((state) => !state)}
        className=" h-9 aspect-square absolute top-4 right-5  items-center z-30 flex-col gap-[10px] hidden  md:flex"
      >
        <span
          className={`block w-full h-[2px] transition-transform duration-150 bg-mainBlack ${
            isNavbarOpen ? "translate-y-3 rotate-45" : ""
          }`}
        ></span>
        <span
          className={`block w-full h-[2px] transition-opacity duration-150 bg-mainBlack ${
            isNavbarOpen ? "opacity-0" : ""
          } `}
        ></span>
        <span
          className={`block w-full h-[2px] transition-transform duration-150 bg-mainBlack ${
            isNavbarOpen ? "-translate-y-3 -rotate-45" : ""
          }`}
        ></span>
      </div>

      <div className="max-w-[1350px] px-[15px] m-auto  flex items-center justify-between h-full md:flex-col md:pt-3 ">
        <div className="min-h-[40px]   logo flex justify-center items-center gap-3 iconBg cursor-pointer min-w-[220px] rounded-lg ">
          {IiconBG}
          <p className=" font-main2 text-white tracking-wider">ModernDesign</p>
        </div>
        <ul className="  inline-flex items-center gap-7 md:flex-col md:gap-2">
          {navButtons.map((e, i) => (
            <li
              onClick={() => setIsNavbarOpen(false)}
              className={` h-[60px] relative text-mainBlack flex  before:w-full items-center text-base before:transition-transform before:duration-300 before:origin-left before:content-[''] before:absolute before:bottom-0 before:h-[2px] rounded-lg before:rounded before:bg-main before:scale-x-0 ${
                navActive == i ? " before:scale-x-100" : " before:scale-x-0"
              }`}
              key={i}
            >
              <p
                className={` font-semibold cursor-pointer transition-colors duration-300 ${
                  navActive == i ? "text-main" : ""
                }`}
                onClick={() => setNavActive(i)}
              >
                {e.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
