import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"


const Layout = () => {

    return (
        // <Box
        //     bg={'bg.subtle'} 
        //     className="flex h-dvh w-full"
        // >

        //     <Sidebar />

        //     <div className="flex-1 bg-red-200/10 overflow-y-auto">

        //         <Header />

        //         <main className="px-8! md:px-12! overflow-y-auto! xl:px-16! py-6! overflow-x-hidden">
        //             <Outlet />
        //         </main>

        //     </div>


        // </Box>

        <Box 
            bg={'bg.subtle'} 
            className="flex h-svh"
        >
            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <div className="flex-1 min-h-svh overflow-y-auto!">
                {/* Header */}
                <Header />

                {/* Main area */}
                <main className="px-8! md:px-12! xl:px-16! py-6! ">
                    <Outlet />
                </main>
            </div>
        </Box>

        
    )
}

export default Layout