import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
const NavBar = () => {
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
  return (
    <nav class="h-14 w-full bg-green-200 fixed top-0 left-0 right-0 flex justify-between items-center bg-cultured text-eeireBlack drop-shadow-md px-8 z-50">
      <div className="flex flex-row gap-3 text-md">
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
      <div className="flex flex-row gap-3 text-xl">
        <a className="cursor-pointer hover:text-orangeWeb ease-linear duration-500">
          <FontAwesomeIcon icon={faFileLines} />
        </a>
        <a className="cursor-pointer hover:text-orangeWeb hover:opacity-80 ease-linear duration-500">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <span>Luigi Bustos</span>
      </div>
    </nav>
  );
};

export default NavBar;
