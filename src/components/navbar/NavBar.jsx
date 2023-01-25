// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const toggleBackground = () => {
    if (window.scrollY >= 60) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  const navItems = [
    {
      name: "HOME",
      route: "/#home",
    },
    {
      name: "ABOUT",
      route: "/#about",
    },
    {
      name: "PROJECTS",
      route: "/#projects",
    },
  ];
  window.addEventListener("scroll", toggleBackground);
  return (
    <nav
      className={`h-14 w-full bg-green-200 fixed top-0 left-0 right-0 flex justify-between items-center text-eeireBlack px-8 z-50 ${
        nav
          ? "bg-cultured drop-shadow-md ease-linear duration-500"
          : "bg-none ease-linear duration-500"
      }`}
    >
      <div className="flex flex-row gap-6 text-md font-light text-davysGrey">
        {navItems.map((item) => {
          return (
            <HashLink
              smooth
              to={item.route}
              className="hover:text-orangeWeb ease-linear duration-500"
            >
              {item.name}
            </HashLink>
          );
        })}
      </div>
      <div className="flex flex-row gap-3 text-md">
        {/* <a className="cursor-pointer hover:text-orangeWeb ease-linear duration-500">
          <FontAwesomeIcon icon={faFileLines} />
        </a>
        <a className="cursor-pointer hover:text-orangeWeb hover:opacity-80 ease-linear duration-500">
          <FontAwesomeIcon icon={faEnvelope} />
        </a> */}
        <span className="text-md font-light text-davysGrey">
          {nav ? "LUIGI BUSTOS" : "SAN FRANCISCO, CA"}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
