// import { Box, Heading, Text } from "@chakra-ui/react"
import { useProjectDescription } from "../hooks/useProjectDescription";
import DOMPurify from 'dompurify';
import '../styles/project-description.css';
import { Box, Field, Heading, Separator, Text } from "@chakra-ui/react";


const Overview = () => {

    const { projectDescription, isPending, error } = useProjectDescription();

    if (isPending) return <p>Loading...</p>;

    if (error) return <p>Failed to load description</p>;

    const cleanHTML = DOMPurify.sanitize(projectDescription?.project_description || '-');

    

    return (
        <>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-4">

            <Box 
                className="project-description space-y-3!"
                dangerouslySetInnerHTML={{ __html: cleanHTML }}
                css={{
                    "& p": {
                        color: "var(--chakra-colors-fg-muted)",
                    },
                }}
            />

            <Box 
               className="space-y-8!"
            >

                <div>
                    <Heading
                        mb={'5'}
                    >
                        Client Information
                    </Heading>

                    <div className="space-y-5!">
                        <Field.Root invalid>
                            <Field.Label>Client:</Field.Label>
                            <Text 
                                color={'fg.muted'}
                            >
                                Joshua Alfonso
                            </Text>
                        </Field.Root>
                        <Field.Root invalid>
                            <Field.Label>Stakeholder:</Field.Label>
                            <Text 
                                color={'fg.muted'}
                            >
                                Joshua Alfonso
                            </Text>
                        </Field.Root>
                    </div>
                </div>

                <Separator />

                <div>
                    <Heading
                        mb={'5'}
                    >
                        Schedule
                    </Heading>

                    <div className="space-y-5!">
                        <Field.Root invalid>
                            <Field.Label>Start Date:</Field.Label>
                            <Text 
                                color={'fg.muted'}
                            >
                                Sat, 09 Mar 2024
                            </Text>
                        </Field.Root>
                        <Field.Root invalid>
                            <Field.Label>Due date:</Field.Label>
                            <Text 
                                color={'fg.muted'}
                            >
                                Joshua Alfonso
                            </Text>
                        </Field.Root>
                        <Field.Root invalid>
                            <Field.Label>Status:</Field.Label>
                            <Text 
                                color={'fg.muted'}
                            >
                                In Progress
                            </Text>
                        </Field.Root>
                    </div>
                </div>
            </Box>
        </div>

            {/* <div 
                className="grid grid-cols-1 xl:grid-cols-3 gap-5"
            >

                <div className="col-span-2">

                    <Heading mb={'2'}>
                        Project Goal 
                    </Heading>

                    <Text color={'fg.muted'} mb={'7'}>
                        The goal of TaskFlow is to provide a clean, intuitive interface that helps users
                        organize tasks, track progress, and stay focused on priorities. The project
                        emphasizes usability, clarity, and modern UI design, serving as a static
                        demonstration of how a productivity application could look and feel.
                    </Text>

                    <Heading mb={'2'}>
                        Key Features
                    </Heading>
                
                    <Box 
                        as="ul" 
                        listStyleType="circle" 
                        listStylePosition="inside"
                        color={'fg.muted'}
                    >
                        <li>
                            <strong>Dashboard Overview:</strong> 
                            Centralized view of tasks and progress.
                        </li>
                        <li><strong>Task Organization:</strong> Create, categorize, and prioritize tasks.</li>
                        <li><strong>Progress Tracking:</strong> Visual indicators for task completion.</li>
                        <li><strong>User-Friendly Interface:</strong> Clean and minimalist design.</li>
                        <li><strong>Responsive Layout:</strong> Works across all screen sizes.</li>
                        <li><strong>Static UI Demonstration:</strong> UI-focused with no backend logic.</li>
                    </Box>
                    
                </div>

                <div>
                    <Heading mb={'2'}>
                        Client
                    </Heading>
                </div>

            </div> */}

        </> 
    )
}

export default Overview