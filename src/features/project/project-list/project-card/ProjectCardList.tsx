import type { ProjectList } from "../project.model"
import ProjectCardRow from "./ProjectCardRow"



const ProjectCardList = ( {projects}: {projects: ProjectList[]} ) => {
    return (
        
        <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4">

            {projects?.map((item) => (
                <ProjectCardRow 
                    key={item.project_id} 
                    row={item} 
                />
            ))}

        </div>
    )
}

export default ProjectCardList