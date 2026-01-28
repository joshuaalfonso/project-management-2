import { Box, Heading, Text } from "@chakra-ui/react"



const Overview = () => {
  return (
    <>
    
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

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

        </div>
    
    </> 
  )
}

export default Overview