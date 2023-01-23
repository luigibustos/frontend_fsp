import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faCss3Alt,
  faHtml5,
  faReact,
  faSquareJs,
  faPython,
  faNode,
  faAtlassian,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  const skills = [
    faHtml5,
    faCss3Alt,
    faSquareJs,
    faPython,
    faReact,
    faNode,
    faBootstrap,
    faAtlassian,
  ];

  return (
    <div className="h-screen w-screen bg-cultured flex flex-row justify-center items-center">
      <div className="bg-eeireBlack h-3/4 w-11/12 rounded-lg flex flex-wrap flex-col sm:flex-row  justify-center items-center text-platinum shadow-xl">
        <div className="h-1/2 sm:h-full w-full sm:w-1/2 px-10 flex flex-col justify-center items-center">
          <h1 className="h-auto w-full text-left text-6xl m-4">ABOUT ME</h1>
          <p className="text-xl">
            Hello, my name is Luigi Bustos! I am currently attending General
            Assembly’s Software Engineering Immersive program. For the past 2.5
            years, I’ve worked as a service desk technician at various
            companies. My experience working as a Service Desk technician
            sparked my passion for creating innovative ways to improve business
            processes and enhancing end-user experiences. Through General
            Assembly, I hope to gain the necessary skills to pivot into web
            development or a front-end engineer position.
          </p>
        </div>
        <div className="h-1/2 sm:h-full w-full sm:w-1/2 px-10 flex flex-row flex-wrap justify-center items-center content-center gap-5 text-eeireBlack">
          {skills.map((skill) => {
            return (
              <span className="bg-orangeWeb rounded-full h-14 w-14 p-3 text-center">
                <FontAwesomeIcon icon={skill} className="h-8 w-8" />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
