import { ColorModeButton } from "@/components/ui/color-mode";
import { useAuth } from "@/context/auth/useAuth";
import { Box, Button } from "@chakra-ui/react";
import { GrLogout } from "react-icons/gr";


const Header = () => {

    const {logout} = useAuth();

    return (
        <>
            <Box
                borderBottomWidth="1px"
                borderRightColor={'border'}
                className="sticky w-full h-12.5! flex justify-between items-center px-8! md:px-12! xl:px-16! py-6!"
            >
                <h1></h1>
                <div className="flex items-center gap-2">
                    <ColorModeButton />
                    {/* <button onClick={() => logout()}>logout</button> */}
                    <Button 
                        size={'xs'} 
                        variant={'ghost'} 
                        onClick={() => logout()}
                    >
                        <GrLogout />
                    </Button>
                </div>
            </Box>
        </>
    )
}

export default Header