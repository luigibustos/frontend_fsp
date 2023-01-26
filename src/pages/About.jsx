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
      <div className="bg-eeireBlack h-3/4 w-11/12 rounded-lg flex flex-wrap flex-col sm:flex-row  justify-center items-center text-platinum shadow-xl relative z-0">
        <div className="h-1/2 sm:h-full w-full sm:w-1/2 px-10 flex flex-col justify-center items-center">
          <div className="w-full h-auto">
            <h1 className="h-auto w-full text-left text-6xl my-4 font-bodoni">
              ABOUT ME
            </h1>
            <p className="text-xl font-light">
              As a General Assembly Software Engineer graduate, I’ve refined my
              skills in JavaScript, Python, MongoDB, Express, React, and NodeJs
              to become a well-rounded full-stack engineer. Before General
              Assembly, working as a Service Desk Technician sparked my passion
              for learning new technologies. My experience with Atlassian and
              ServiceNow administration introduced me to JavaScript and Agile
              software development. My goal is to pivot into a Web Developer or
              Frontend Engineer role position to create innovative user
              experiences and enhance existing business processes.
            </p>
          </div>
        </div>
        <div className="h-1/2 sm:h-full w-full sm:w-1/2 px-10 flex flex-row flex-wrap justify-center items-center content-center gap-5 text-eeireBlack z-20">
          {skills.map((skill) => {
            return (
              <span className="bg-orangeWeb rounded-full h-14 w-14 p-3 text-center">
                <FontAwesomeIcon icon={skill} className="h-8 w-8" />
              </span>
            );
          })}
        </div>
        <div className="absolute sm:bottom-0 sm:right-0 z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            // xmlns:svgjs="http://svgjs.com/svgjs"
            width="100%"
            height="800"
            preserveAspectRatio="none"
            viewBox="0 0 1440 500"
          >
            <g mask='url("#SvgjsMask1108")' fill="none">
              <path
                d="M362.78 586.95C538.97 581.04 661.71 316.47 1009.99 307.06 1358.27 297.65 1484.97 74.23 1657.2 70.56"
                stroke="rgba(235, 235, 235, 0.8)"
                stroke-width="2"
              ></path>
              <path
                d="M532.87 598.12C705.3 580.16 812.54 209.22 1105.99 207.72 1399.45 206.22 1531.78 344.26 1679.12 345.22"
                stroke="rgba(235, 235, 235, 0.8)"
                stroke-width="2"
              ></path>
              <path
                d="M754.16 613.85C904.48 591.8 990.38 236.04 1229.99 235.84 1469.61 235.64 1570.06 491.19 1705.83 499.84"
                stroke="rgba(235, 235, 235, 0.8)"
                stroke-width="2"
              ></path>
              <path
                d="M387.42 650.36C481.03 649.93 466.43 576.28 753.69 572.54 1040.95 568.8 1292.06 317.79 1486.23 314.04"
                stroke="rgba(235, 235, 235, 0.8)"
                stroke-width="2"
              ></path>
              <path
                d="M715.1 564.03C850.95 534.38 908.19 179.86 1115.52 177.99 1322.84 176.12 1407.19 344.99 1515.93 348.49"
                stroke="rgba(235, 235, 235, 0.8)"
                stroke-width="2"
              ></path>
            </g>
            <defs>
              <mask id="SvgjsMask1108">
                <rect width="1450" height="550" fill="#ffffff"></rect>
              </mask>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default About;
