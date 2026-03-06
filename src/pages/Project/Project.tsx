import {  Heading } from "@chakra-ui/react"
// import { BiCheck } from "react-icons/bi"
import { useProject } from "@/features/project/project-list/hooks/useProject"
import ProjectCardList from "@/features/project/project-list/project-card/ProjectCardList";
import ProjectDialog from "@/features/project/project-dialog/ProjectDialog";
import { ProjectDialogProvider } from "@/features/project/project-dialog/useProjectDialog";



const Project = () => {


  // const users = [
  //   {
  //     name: 'Christian Schröter',
  //     src: 'https://avatars.githubusercontent.com/u/1846056?v=4',
  //   },
  //   {
  //     name: 'Segun Adebayo',
  //     src: 'https://avatars.githubusercontent.com/u/6916170?v=4',
  //   },
  //   {
  //     name: 'Philipp Körner',
  //     src: 'https://avatars.githubusercontent.com/u/153984143?v=4',
  //   },
  // ]

  const { projects, isPending, error } = useProject();

  if (isPending) return <p>Loading..</p>; 
  if (error) return <p>Failed to load project</p>;

  return (
    <>   
      <ProjectDialogProvider>

        <div className="mb-10! flex items-center justify-between">

          <Heading 
            size={'2xl'}
          >
            Project
          </Heading>

          <ProjectDialog />
          
        </div>

        <ProjectCardList projects={projects || []} />
 
      </ProjectDialogProvider>
    </>
  )
}

export default Project