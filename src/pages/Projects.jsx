function Projects() {
  const projects = [
    {
      name: "Project 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      mainImg: "http://via.placeholder.com/640x360",
      website: "Project Link",
      gitHub: "GitHub Link",
    },
    {
      name: "Project 2",
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      mainImg: "http://via.placeholder.com/640x360",
      website: "Project Link",
      gitHub: "GitHub Link",
    },
    {
      name: "Project 3",
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      mainImg: "http://via.placeholder.com/640x360",
      website: "Project Link",
      gitHub: "GitHub Link",
    },
    // {
    //   name: "Project 4",
    // },
  ];
  return (
    <div className="h-screen bg-platinum">
      <div className="h-full w-full px-10 flex flex-row space-x-6 content-center justify-center items-center">
        {projects.map((project) => {
          return (
            <div className="w-1/4 h-1/2 bg-orangeWeb rounded-lg hover:w-1/2 duration-700 shadow-lg p-6 group">
              <div>
                <img src={project.mainImg} />
              </div>
              <h1 className="w-full text-2xl">{project.name}</h1>
              <p className="w-full text-1xl opacity-0 group-hover:opacity-100 duration-1000 ease-linear">
                {project.desc}
              </p>
              <div className="flex flex-row">
                <p className=" text-1xl opacity-0 group-hover:opacity-100 duration-1000 ease-linear">
                  {project.website}
                </p>
                <p className="text-1xl opacity-0 group-hover:opacity-100 duration-1000 ease-linear">
                  {project.gitHub}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
