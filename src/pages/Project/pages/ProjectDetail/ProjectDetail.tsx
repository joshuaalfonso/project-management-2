import { Heading, Tabs, Text } from "@chakra-ui/react"
import { BiCalendar, BiCheck, BiGroup } from "react-icons/bi";
import { LuFile, LuList, LuListChecks, LuSettings } from "react-icons/lu";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {

    const { project_id } = useParams();
    console.log(project_id)

    return (
        <>
        
            <div className="mb-8!">
                <Heading 
                    size={'2xl'}
                >
                    Logistics Information System
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


            <Tabs.Root defaultValue="overview">
                <Tabs.List>
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
                <Tabs.Content value="overview">Manage your project overview</Tabs.Content>
                <Tabs.Content value="task">Manage your projects</Tabs.Content>
                <Tabs.Content value="attachment">
                    Manage your tasks for freelancers
                </Tabs.Content>
                <Tabs.Content value="setting">
                    Manage your project setting
                </Tabs.Content>
            </Tabs.Root>
        
        
        </>
    )
}

export default ProjectDetail