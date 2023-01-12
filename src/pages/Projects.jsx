import Waves from "../components/waves/Waves";

function Projects() {
  const projects = [
    {
      name: "Project 1",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      name: "Project 2",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      name: "Project 3",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      name: "Project 4",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8&w=1000&q=80",
    },
  ];
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full px-20 flex flex-row justify-center items-center space-x-5">
        {projects.map((project, idx) => {
          return (
            <div
              key={idx}
              className={`glass-card rounded-lg h-3/5 w-1/6 hover:w-1/2 duration-700`}
            >
              <div className="">
                <h1 className="text-center">{project.name}</h1>
              </div>
            </div>
          );
        })}
      </div>
      <Waves />
    </div>
  );
}

export default Projects;
