import CardProject from "./CardProject";
import rawProjects from "../assets/projects.json";
import { Project } from "../types";

const getImageUrl = (filename: string) => {
  return new URL(`../assets/${filename}`, import.meta.url).href;
};

const projects = rawProjects.map((project) => ({
  ...project,
  backgroundImage: getImageUrl(project.backgroundImage),
})) as Project[];

const SectionProjects = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-violet-800 to-violet-600">
      <div className="container mx-auto py-10">
        <div className="mx-4">
          <h1 className="font-light text-5xl text-white mb-10">Projects</h1>

          <div className="grid gap-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, i) => (
              <CardProject
                key={i}
                href={project.href}
                backgroundImage={project.backgroundImage}
                backgroundImagePosition={project.backgroundImagePosition}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionProjects;
