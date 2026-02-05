import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"


const Layout = () => {


    
    return (
        <Box
            bg={'bg.subtle'} 
            className="flex h-svh w-full"
        >

            <Sidebar />

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