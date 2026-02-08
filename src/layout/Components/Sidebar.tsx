import { useColorModeValue } from "@/components/ui/color-mode"
import { useWorkSpace } from "@/context/workspace/useWorkspace"
import { Avatar, Box, Text } from "@chakra-ui/react"
import { FiCheckCircle, FiFolder, FiGrid, FiSettings, FiUsers } from "react-icons/fi"
import { LuChevronsUpDown } from "react-icons/lu"
import { NavLink } from "react-router-dom"



const Sidebar = () => {

    const { activeWorkspace } = useWorkSpace();

    const workSpaceName = activeWorkspace?.workspace_name || 'Unknown workspace';

    return (
        <Box
            borderRightWidth="1px"
            borderRightColor={useColorModeValue("gray.200", "gray.800")}
            className="w-0 xl:w-69 px-0! xl:px-5! overflow-x-hidden"
        >

            <div className="flex items-center gap-4 h-14.5 mb-6!">
                <Avatar.Root shape="rounded" size={'sm'}variant={'solid'} >
                    <Avatar.Fallback name={workSpaceName} />
                    <Avatar.Image src="" />
                </Avatar.Root>
                <div className="flex flex-col">
                    <span className="text-sm!">{workSpaceName}</span>
                    {/* <Text fontSize={'xs'} color={'fg.muted'}>1 Workspace</Text> */}
                </div>
                <div className="flex-1! flex justify-end">
                    <LuChevronsUpDown />
                </div>
            </div>

            <nav className="flex flex-col gap-1.5">
                <NavLink to="/dashboard">
                    {({ isActive }) => (
                        <Text
                            bg={isActive ? "bg.emphasized" : "transparent"}
                            color={isActive ? 'fg' : 'fg.muted'}
                            px="3"
                            py="1.5"
                            rounded="sm"
                            fontSize="sm"
                            _hover={{
                                background: "bg.emphasized",
                                color: "fg",
                            }}
                            className="flex items-center gap-3"
                        >
                            <FiGrid size={'20'} /> Dashboard 
                        </Text>
                    )}
                </NavLink>
                <NavLink to="/my-task">
                    {({ isActive }) => (
                        <Text
                            bg={isActive ? "bg.emphasized" : "transparent"}
                            color={isActive ? 'fg' : 'fg.muted'}
                            px="3"
                            py="1.5"
                            rounded="sm"
                            fontSize="sm"
                            _hover={{
                                background: "bg.emphasized",
                                color: "fg",
                            }}
                            className="flex items-center gap-3"
                        >
                            <FiCheckCircle size={'20'} /> My Task 
                        </Text>
                    )}
                </NavLink>
                <NavLink to="/project">
                    {({ isActive }) => (
                        <Text
                            bg={isActive ? "bg.emphasized" : "transparent"}
                            color={isActive ? 'fg' : 'fg.muted'}
                            px="3"
                            py="1.5"
                            rounded="sm"
                            fontSize="sm"
                            _hover={{
                                background: "bg.emphasized",
                                color: "fg",
                            }}
                            className="flex items-center gap-3"
                        >
                            <FiFolder size={'20'} /> Project 
                        </Text>
                    )}
                </NavLink>
                <NavLink to="/workspace-member">
                    {({ isActive }) => (
                        <Text
                            bg={isActive ? "bg.emphasized" : "transparent"}
                            color={isActive ? 'fg' : 'fg.muted'}
                            px="3"
                            py="1.5"
                            rounded="sm"
                            fontSize="sm"
                            _hover={{
                                background: "bg.emphasized",
                                color: "fg",
                            }}
                            className="flex items-center gap-3"
                        >
                            <FiUsers size={'20'} /> Member 
                        </Text>
                    )}
                </NavLink>
                <NavLink to="/workspace-setting">
                    {({ isActive }) => (
                        <Text
                            bg={isActive ? "bg.emphasized" : "transparent"}
                            color={isActive ? 'fg' : 'fg.muted'}
                            px="3"
                            py="1.5"
                            rounded="sm"
                            fontSize="sm"
                            _hover={{
                                background: "bg.emphasized",
                                color: "fg",
                            }}
                            className="flex items-center gap-3"
                        >
                            <FiSettings size={'20'} /> Setting 
                        </Text>
                    )}
                </NavLink>
            
            </nav>

        </Box>
    )
}

export default Sidebar