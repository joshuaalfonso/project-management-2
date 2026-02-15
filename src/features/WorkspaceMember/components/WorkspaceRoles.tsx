import {  Box, Heading, Tabs } from "@chakra-ui/react"


export const WorkspaceRoles = () => {
    return (

        <>
        
            <div className="max-w-5xl mx-auto!">

                <Heading
                    fontSize={'md'}
                    mb={'2'}
                >
                    Workspace roles
                </Heading>

                <Tabs.Root defaultValue="1" variant={'subtle'}>
                    <Tabs.List>
                        <Tabs.Trigger value="1">
                        Owner
                        </Tabs.Trigger>
                        <Tabs.Trigger value="2">
                        Admin
                        </Tabs.Trigger>
                        <Tabs.Trigger value="3">
                        Member
                        </Tabs.Trigger>
                        <Tabs.Trigger value="4">
                        Member
                        </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content value="1">
                        <Box 
                            as="ul" 
                            listStylePosition="inside" 
                            className="list-disc! text-sm! space-y-2!"
                            pl={'6'}
                            css={{
                                "& li": {
                                    color: "var(--chakra-colors-fg-muted)",
                                },
                            }}
                        >
                            <li>Full control of the workspace.</li>
                            <li>Can manage workspace settings, all projects and tasks, members, and transfer ownership.</li>
                        </Box>
                    </Tabs.Content>
                    <Tabs.Content value="2">
                        <Box 
                                as="ul" 
                                listStylePosition="inside" 
                                className="list-disc! text-sm! space-y-2!"
                                pl={'6'}
                                css={{
                                    "& li": {
                                        color: "var(--chakra-colors-fg-muted)",
                                    },
                                }}
                            >
                                <li>Workspace manager with broad permissions.</li>
                                <li>Can create and edit projects, manage tasks, and add or remove members. Cannot transfer ownership.</li>
                            </Box>
                    </Tabs.Content>
                    <Tabs.Content value="3">
                       <Box 
                            as="ul" 
                            listStylePosition="inside" 
                            className="list-disc! text-sm! space-y-2!"
                            pl={'6'}
                            css={{
                                "& li": {
                                    color: "var(--chakra-colors-fg-muted)",
                                },
                            }}
                        >
                            <li>Regular collaborator in the workspace.</li>
                            <li>Can view assigned projects, create tasks in accessible projects, and see tasks assigned to them. Cannot manage other members or workspace settings.</li>
                        </Box>
                    </Tabs.Content>
                    <Tabs.Content value="4">
                       <Box 
                            as="ul" 
                            listStylePosition="inside" 
                            className="list-disc! text-sm! space-y-2!"
                            pl={'6'}
                            css={{
                                "& li": {
                                    color: "var(--chakra-colors-fg-muted)",
                                },
                            }}
                        >
                            <li>Read-only participant.</li>
                            <li>Can view public projects and tasks assigned to them. Cannot create or edit tasks.</li>
                        </Box>
                    </Tabs.Content>
                </Tabs.Root>

            </div>
        
        </>
    )
}