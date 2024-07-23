import { projects } from "@/project-info/projects";
//Components
import FirstSection from "@/components/ProjectPageSections/FirstSection";
import ImageSection from "@/components/ProjectPageSections/ImageSection";

const ProjectPage = ({ params }: { params: { id: number } }) => {
  const id = params.id;

  return (
    <main className="min-h-screen flex flex-col">
      {projects[id].images ? (
        <ImageSection images={projects[id].images} />
      ) : (
        <p className=" bg-off-white md:pt-16"></p>
      )}
      <FirstSection
        title={projects[id].title}
        aboutKey={projects[id].aboutKey}
        technologies={projects[id].technologies}
        github={projects[id].github}
        link={projects[id].link}
      />
    </main>
  );
};

export default ProjectPage;
