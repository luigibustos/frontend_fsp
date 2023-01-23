import { HashLink } from "react-router-hash-link";
const NavBar = () => {
  return (
    <nav class="h-14 w-full bg-green-200 fixed top-0 left-0 right-0 flex justify-between items-center bg-cultured drop-shadow-md px-8 z-50">
      <div className="flex flex-row gap-3 text-md">
        <HashLink smooth to={"/#home"}>
          HOME
        </HashLink>
        <HashLink smooth to={"/#about"}>
          ABOUT
        </HashLink>
        <HashLink smooth to={"/#projects"}>
          PPROJECTS
        </HashLink>
      </div>
      <div>
        <h1>Luigi Bustos</h1>
      </div>
    </nav>
  );
};

export default NavBar;
