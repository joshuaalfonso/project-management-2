import AnimatedProjectRoutes from "@/shared/components/AnimatedProjectRoutes";
import { Heading, Tabs, Text } from "@chakra-ui/react"
// import { AnimatePresence } from "framer-motion";
import { BiCalendar, BiCheck, BiGroup } from "react-icons/bi";
import {LuFile, LuList, LuListChecks, LuMoveLeft, LuSettings } from "react-icons/lu";
// import { LuFile, LuList, LuListChecks, LuSettings } from "react-icons/lu";
import {  useLocation, useNavigate, useParams } from "react-router-dom";
// import AnimatedProjectRoutes from "@/shared/components/AnimatedProjectRoutes";

const ProjectDetail = () => {

    const { project_id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const currentTab = location.pathname.split("/").pop() ?? "overview";

    console.log(project_id)
    console.log(currentTab)

    // const tabs = [
    //     { value: "overview", label: "Overview" },
    //     { value: "task", label: "Task" },
    //     { value: "attachment", label: "Attachment" },
    //     { value: "setting", label: "Setting" },
    // ];

    // const MotionBox = motion(Box);

    // const tabVariants = {
    // hidden: { opacity: 0, y: 50 },
    // enter: { opacity: 1, y: 0 },
    // exit: { opacity: 0, y: -50 },
    // };


    return (
        <>
            
        
            <div className="mb-6!">
                <div className="flex items-center gap-3">
                    
                    <button
                        className="cursor-pointer hover:-translate-x-1 transition-all duration-300 ease-in-out"
                        onClick={() => navigate('/project')}
                    >
                        <LuMoveLeft size={'22'} />
                    </button>
                    <Heading 
                        size={'2xl'} 
                    >
                        TaskFlow
                    </Heading>
                </div>
                <div className="flex flex-wrap gap-3 mt-2!">
                    <Text 
                        fontSize={'sm'} 
                        color={'fg.muted'}
                        className="flex items-center gap-1"
                    >
                        <BiCalendar size={'21'} />
                        <span>Due October 10, 2026</span>
                    </Text>
                    <Text 
                        fontSize={'sm'} 
                        color={'fg.muted'}
                        className="flex items-center gap-1"
                    >
                        <BiGroup size={'21'} />
                        <span>5 Members</span>
                    </Text>
                    <Text 
                        fontSize={'sm'} 
                        color={'fg.muted'}
                        className="flex items-center gap-1"
                    >
                        <BiCheck size={'21'} />
                        <span>4 / 16</span>
                        <span>Tasks</span>
                    </Text>
                </div>
            </div>

            <Tabs.Root 
                value={currentTab}  
                onValueChange={(value: { value: string }) => navigate(`/project/${project_id}/${value.value}`)}
            >


                <Tabs.List 
                    mb={'8'}  
                    
                >
                    <Tabs.Trigger value="overview">
                        <LuList size={'20'} />
                        OverView
                    </Tabs.Trigger>
                    <Tabs.Trigger value="task">
                        <LuListChecks size={'20'} />
                        Task
                    </Tabs.Trigger>
                    <Tabs.Trigger value="attachment">
                        <LuFile size={'20'}/>
                        Attachment
                    </Tabs.Trigger>
                    <Tabs.Trigger value="setting">
                        <LuSettings size={'20'}/>
                        Setting
                    </Tabs.Trigger>
                </Tabs.List>

                <AnimatedProjectRoutes />

                {/* <Outlet /> */}


            </Tabs.Root>


        
        </>
    )
}

export default ProjectDetail