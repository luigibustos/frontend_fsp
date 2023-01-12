import "./SideBar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBridgeWater,
  faHouseUser,
  faSpaceShuttle,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  const navBar = () => {
    const nav = [
      {
        name: "Home",
        icon: faCloud,
        url: "/",
      },
      {
        name: "About",
        icon: faHouseUser,
        url: "/about",
      },
      {
        name: "Projects",
        icon: faBridgeWater,
        url: "/projects",
      },
    ];
    return (
      <nav>
        <ul>
          {nav.map((item, idx) => {
            return (
              <NavLink to={item.url} key={idx}>
                <li className="sidebar-item">
                  <FontAwesomeIcon icon={item.icon} className="sidebar-icon" />
                  <span className="sidebar-tx">{item.name}</span>
                </li>
              </NavLink>
            );
          })}
        </ul>
      </nav>
    );
  };

  const footer = () => {
    const footer = [
      {
        name: "GitHub",
        icon: faGithub,
        url: "/",
      },
      {
        name: "LinkedIn",
        icon: faLinkedin,
        url: "/",
      },
      {
        name: "Instagram",
        icon: faInstagram,
        url: "/",
      },
    ];
    return (
      <footer>
        <ul>
          {footer.map((item, idx) => {
            return (
              <a href={item.url} key={idx}>
                <li className="sidebar-item">
                  <FontAwesomeIcon icon={item.icon} className="sidebar-icon" />
                  <span className="sidebar-tx">{item.name}</span>
                </li>
              </a>
            );
          })}
        </ul>
      </footer>
    );
  };

  return (
    <aside
      className={`sidebar font-oswald p-5 relative h-screen z-50 ${
        open ? "w-48" : "w-16"
      }`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="navbar-container">{navBar()}</div>
      <div className="footer-container">{footer()}</div>
    </aside>
  );
};

export default SideBar;
