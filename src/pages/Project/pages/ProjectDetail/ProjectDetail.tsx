import { Heading, Tabs, Text } from "@chakra-ui/react"
import { BiCalendar, BiCheck, BiGroup } from "react-icons/bi";
import { LuFile, LuList, LuListChecks, LuSettings } from "react-icons/lu";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

const ProjectDetail = () => {

    const { project_id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const currentTab = location.pathname.split("/").pop() ?? "overview";

    console.log(project_id)

    return (
        <>
        
            <div className="mb-6!">
                <Heading 
                    size={'2xl'}
                >
                    TaskFlow
                </Heading>
                <div className="flex gap-3 mt-2!">
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


            <Tabs.Root value={currentTab}  onValueChange={(value) => navigate(value.value)}>

                <Tabs.List mb={'8'}>
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

                <Outlet />

            </Tabs.Root>
        
        
        </>
    )
}

export default ProjectDetail