import { myProjects } from "../constants";

const Projects = () => {
  return <section className="relative c-space section-spacing">
    <h2 className="text-heading">My Selected Projects</h2>
    <div className="bg-linear-to-l from-transparent
        via-neutral-700 to-transparent mt-12 h-[1px] w-full"/>
        {myProjects.map((project)=>({Projects}))}
  </section>
};

export default Projects;