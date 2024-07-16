import { projects } from "@/project-info/projects";
//Components
import FirstSection from "@/components/ProjectPageSections/FirstSection";
import ImageSection from "@/components/ProjectPageSections/ImageSection";

const ProjectPage = ({ params }: { params: { id: number } }) => {
  const id = params.id;

  return (
    <main className="min-h-screen flex flex-col">
      <ImageSection images={projects[id].images} />
      <FirstSection
        title={projects[id].title}
        about={projects[id].about}
        technologies={projects[id].technologies}
        github={projects[id].github}
      />
    </main>
  );
};

export default ProjectPage;
