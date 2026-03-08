import { Box, Button, Heading, Menu, Portal, Tag } from "@chakra-ui/react"
import type { ProjectList } from "../project.model"
import { useNavigate } from "react-router-dom"
import { FiEdit, FiEye, FiMoreHorizontal, FiTrash2 } from "react-icons/fi"
import { useModalStore } from "@/shared/store/modal.store"


interface Props {
    row: ProjectList
}


const ProjectCardRow = ({row}: Props) => {

    const openModal = useModalStore((s) => s.openModal)

    const navigate = useNavigate();

    const goToDetails = () => {
        navigate(`/project/${row.project_id}/task`); 
    };


    return (

        <Box
            key={row.project_id}
            borderWidth="1px"
            borderColor="border.disabled"
            rounded={'md'}
            px={'6'}
            py={'4'}
            // _hover={{boxShadow: 'sm'}}
            className="space-y-3!"
        >
        
            <div>


                <div className="flex justify-between items-center">
                    <Heading 
                        size={'md'} 
                        mb={'1'} 
                        _hover={{textDecoration: 'underline'}}
                        cursor={'pointer'} 
                        onClick={() => goToDetails()}
                    >
                        {/* <Link 
                            to={`/project/${row.project_id}/overview`}
                        > */}
                            { row.project_name }
                        {/* </Link> */}
                    </Heading>

                    <Menu.Root>
                        <Menu.Trigger asChild>
                            <Button 
                                variant="plain" 
                                size="sm"
                            >
                                <FiMoreHorizontal />
                            </Button>
                        </Menu.Trigger>
                        <Portal>
                            <Menu.Positioner>
                            <Menu.Content>
                                <Menu.Item 
                                    value="viewDetails"
                                    cursor={'pointer'}
                                    onClick={() => goToDetails()}
                                >
                                    <FiEye />
                                    View Details
                                </Menu.Item>
                                <Menu.Item 
                                    value="edit"
                                    cursor={'pointer'}
                                    onClick={() => openModal('createProject', {project_id: row.project_id})}
                                >
                                    <FiEdit />
                                    Edit
                                </Menu.Item>
                                <Menu.Item
                                    value="delete"
                                     cursor={'pointer'}
                                    color="fg.error"
                                    _hover={{ bg: "bg.error", color: "fg.error" }}
                                >
                                    <FiTrash2 />
                                    Delete 
                                </Menu.Item>
                            </Menu.Content>
                            </Menu.Positioner>
                        </Portal>
                    </Menu.Root>
                </div>

                <Tag.Root
                    colorPalette={'yellow'}
                >
                    <Tag.Label>
                        { row.project_status_name }
                    </Tag.Label>
                </Tag.Root>

                {/* <Text fontSize={'sm'} color={'fg.muted'}>
                { item.project_description }
                </Text> */}
            </div>

        </Box>
    )


}

export default ProjectCardRow