import { Box, Heading, Text } from "@chakra-ui/react"
import type { ProjectList } from "../project.model"
import { Link } from "react-router-dom"



const ProjectCardList = ( {projects}: {projects: ProjectList[]} ) => {
    return (
        
        <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4">

            {projects?.map((item) => (
                <Box
                    key={item.project_id}
                    borderWidth="1px"
                    borderColor="border.disabled"
                    rounded={'md'}
                    px={'6'}
                    py={'4'}
                    _hover={{boxShadow: 'sm'}}
                    className="space-y-3!"
                >
                
                    <div>
                        <Heading size={'md'} mb={'1'} _hover={{textDecoration: 'underline'}}>
                        <Link 
                            to={`/project/${item.project_id}/overview`}
                        >
                            { item.project_name }
                        </Link>
                        </Heading>

                        <Text fontSize={'sm'} color={'fg.muted'}>
                        { item.project_description }
                        </Text>
                    </div>

                </Box>
            ))}

        </div>
    )
}

export default ProjectCardList