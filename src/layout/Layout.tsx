import { useColorModeValue } from "@/components/ui/color-mode"
import { Box, Text } from "@chakra-ui/react"
import { FiFolder, FiGrid, FiList } from "react-icons/fi"
import { NavLink, Outlet } from "react-router-dom"
import Header from "./Components/Header"


const Layout = () => {


    return (
        <Box
            bg={'bg.subtle'} 
            className="flex h-svh w-full"
        >

            <Box 
                borderRightWidth="1px"
                borderRightColor={useColorModeValue("gray.200", "gray.800")}
                className="w-0 xl:w-69 px-0! xl:px-5! overflow-x-hidden"
            >

                <div className="grid place-items-center h-12.5 mb-6!">
                    <h1>Tasky</h1>
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
                                <FiList size={'20'} /> My Task 
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
                   
                </nav>

            </Box>

            <div className="flex-1">

                <Header />

                <main className="px-8! md:px-12! xl:px-16! py-6! overflow-x-hidden!">
                    <Outlet />
                </main>

            </div>


        </Box>
    )
}

export default Layout