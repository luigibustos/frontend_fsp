import Simon from "../assets/simon.png";
import NiFT from "../assets/nift.png";
import APItizers from "../assets/apitizers.png";
// import Footer from "../components/navbar/Footer";

function Projects() {
  const projects = [
    {
      name: "Simon",
      desc: "Developed and designed a single-player browser game SIMON using Vanilla JavaScript, HTML5, and CSS3. Implemented game logic, user interaction, and audio with JavaScript, animations, and transitions with CSS",
      mainImg: Simon,
      website: "https://luigibustos.github.io/project_1/",
      gitHub: "https://github.com/luigibustos/project_1",
    },
    {
      name: "NiFT",
      desc: "Developed and designed NiFT, a reversed-engineered e-commerce site using the MERN stack. Incorporated MongoDB for database management and Express.js for server-side routing. Implemented responsive design for optimal user experience across different devices with Bootstrap CSS and React",
      mainImg: NiFT,
      website: "https://nift-bld.netlify.app/",
      gitHub: "https://github.com/davidhlee94/project3-frontend",
    },
    {
      name: "APItizers",
      desc: "As a part of General Assembly's Mini Hackathon, our team was tasked to build a front end project in eight hours. This project was built with React.js, JavaScript, BootStrap CSS, CSS, and HTML. Our team won 'Most Finished', 'Most User Friendly', and 'Most Stylish / Vibrant'",
      mainImg: APItizers,
      website: "https://api-tizers.netlify.app/",
      gitHub: "https://github.com/JohnnyGoodrich/snacks-fe",
    },
    // {
    //   name: "Project 4",
    // },
  ];
  return (
    <div className="h-screen bg-platinum relative">
      <div className="absolute top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 text-slateGrey text-7xl font-bodoni drop-shadow-xl italic">
        PROJECTS
      </div>
      <div className="h-full w-full px-10 flex flex-row space-x-6 content-center justify-center items-center z-10">
        {projects.map((project) => {
          return (
            <div className=" bg-eeireBlack rounded-lg duration-700 shadow-lg p-6 text-platinum">
              <div className="h-1/2 w-full">
                <img
                  src={project.mainImg}
                  alt={project.name}
                  className="w-full h-full rounded-md shadow-md object-cover object-top"
                />
              </div>
              <div className="h-1/2 w-full">
                <h1 className="w-full text-2xl font-bold mt-6">
                  {project.name}
                </h1>
                <p className="w-full text-1xl font-semibold italic  duration-1000 ease-linear mt-3">
                  {project.desc}
                </p>
                <div className="flex flex-row justify-around w-full mt-4 text-1xl">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className=" text-1xl z-20"
                  >
                    Website
                  </a>
                  <a
                    href={project.gitHub}
                    target="_blank"
                    rel="noreferrer"
                    className="text-1xl z-20"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-0 z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          // xmlns:svgjs="http://svgjs.com/svgjs"jsjs
          width="100%"
          height="400"
          preserveAspectRatio="none"
          viewBox="0 0 1440 250"
        >
          <g mask='url("#SvgjsMask1075")' fill="none">
            <path
              d="M14 250L264 0L538.5 0L288.5 250z"
              fill="url(#SvgjsLinearGradient1076)"
            ></path>
            <path
              d="M279.6 250L529.6 0L822.1 0L572.1 250z"
              fill="url(#SvgjsLinearGradient1076)"
            ></path>
            <path
              d="M479.20000000000005 250L729.2 0L988.7 0L738.7 250z"
              fill="url(#SvgjsLinearGradient1076)"
            ></path>
            <path
              d="M753.8000000000001 250L1003.8000000000001 0L1084.8000000000002 0L834.8000000000001 250z"
              fill="url(#SvgjsLinearGradient1076)"
            ></path>
            <path
              d="M1394 250L1144 0L935.5 0L1185.5 250z"
              fill="url(#SvgjsLinearGradient1077)"
            ></path>
            <path
              d="M1154.4 250L904.4000000000001 0L568.4000000000001 0L818.4000000000001 250z"
              fill="url(#SvgjsLinearGradient1077)"
            ></path>
            <path
              d="M955.8 250L705.8 0L486.79999999999995 0L736.8 250z"
              fill="url(#SvgjsLinearGradient1077)"
            ></path>
            <path
              d="M701.1999999999999 250L451.19999999999993 0L377.69999999999993 0L627.6999999999999 250z"
              fill="url(#SvgjsLinearGradient1077)"
            ></path>
            <path
              d="M1218.3935014392703 250L1440 28.39350143927021L1440 250z"
              fill="url(#SvgjsLinearGradient1076)"
            ></path>
            <path
              d="M0 250L221.6064985607298 250L 0 28.39350143927021z"
              fill="url(#SvgjsLinearGradient1077)"
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1075">
              <rect width="1440" height="250" fill="#ffffff"></rect>
            </mask>
            <linearGradient
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
              id="SvgjsLinearGradient1076"
            >
              <stop stop-color="rgba(105, 116, 124, 0.4)" offset="0"></stop>
              <stop
                stop-opacity="0"
                stop-color="rgba(105, 116, 124, 0.4)"
                offset="0.66"
              ></stop>
            </linearGradient>
            <linearGradient
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
              id="SvgjsLinearGradient1077"
            >
              <stop stop-color="rgba(105, 116, 124, 0.4)" offset="0"></stop>
              <stop
                stop-opacity="0"
                stop-color="rgba(105, 116, 124, 0.4)"
                offset="0.66"
              ></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Projects;
