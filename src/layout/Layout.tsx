import { useColorModeValue } from "@/components/ui/color-mode"
import { Box, Text } from "@chakra-ui/react"
import { Link, Outlet } from "react-router-dom"






const Layout = () => {
  return (
    <div className="flex h-svh w-full">

        <Box 
            borderRightWidth="1px"
            borderRightColor={useColorModeValue("gray.100", "gray.900")}
            className="w-69"
        >
            <div className="grid place-items-center h-12.5">
                <h1>Logo</h1>
            </div>

            <nav className="flex flex-col gap-1">
                <Link to="/">
                    <Text textStyle="sm">Dashboard</Text>
                </Link>
                <Link to="/project">Project</Link>
            </nav>

        </Box>

        <div className="flex-1">

            <Box
                borderBottomWidth="1px"
                borderBottomColor={useColorModeValue("gray.100", "gray.900")}
                className="sticky w-full h-12.5 flex items-center px-12!"
            >
                header
            </Box>

            <main className="px-12! py-6! ">
                <Outlet />
            </main>

        </div>


    </div>
  )
}

export default Layout