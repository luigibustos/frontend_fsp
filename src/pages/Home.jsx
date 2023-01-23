import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div className="h-screen w-screen bg-platinum flex items-center justify-center">
      <div className="relative w-full max-w-lg">
        <div className="absolute inset-1 text-center z-10">
          <h1 className="text-spanishGrey">FULL STACK ENGINEER</h1>
          <h1 className="text-6xl drop-shadow-xlg my-5">LUIGI BUSTOS</h1>
          <div>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="mx-6 cursor-pointer border-b-4 border-solid border-spanishGrey hover:border-orangeWeb ease-linear duration-700"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="h-8 hover:text-orangeWeb ease-linear duration-500"
              />
              <span className="ml-2 text-2xl">LinkedIn</span>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="mx-6 cursor-pointer border-b-4 border-solid border-spanishGrey hover:border-orangeWeb ease-linear duration-500"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="h-8 hover:text-orangeWeb ease-linear duration-700"
              />
              <span className="ml-2 text-2xl">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
