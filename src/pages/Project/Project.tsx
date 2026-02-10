import {  Heading } from "@chakra-ui/react"
// import { BiCheck } from "react-icons/bi"
import ProjectDialog from "../../features/project/components/ProjectDialog"
import { ProjectDialogProvider } from "../../features/project/hooks/useProjectDialog"
import { useProject } from "../../features/project/hooks/useProject"
import ProjectCardList from "../../features/project/components/ProjectCardList"



const Project = () => {


  // const users = [
  //   {
  //     name: 'Christian Schröter',
  //     src: 'https://avatars.githubusercontent.com/u/1846056?v=4',
  //   },
  //   {
  //     name: 'Segun Adebayo',
  //     src: 'https://avatars.githubusercontent.com/u/6916170?v=4',
  //   },
  //   {
  //     name: 'Philipp Körner',
  //     src: 'https://avatars.githubusercontent.com/u/153984143?v=4',
  //   },
  // ]

  const { projects, isPending, error } = useProject();

  if (isPending) return <p>Loading..</p>;
  if (error) return <p>Failed to load project</p>;

  console.log(projects)
  
  return (
    <>
      
      <ProjectDialogProvider>

        <div className="mb-10! flex items-center justify-between">


          <Heading 
            size={'2xl'}
          >
            Project
          </Heading>

          {/* <Button size={'xs'}>
            <FiPlus />
            Create
          </Button> */}

          <ProjectDialog />
          
        </div>


        <ProjectCardList projects={projects || []} />


        {/* <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4"> */}

          {/* {projects?.map((item) => (
            <Box
              key={item.project_id}
              borderWidth="1px"
              borderColor="border.disabled"
              rounded={'md'}
              px={'6'}
              py={'4'}
              _hover={{boxShadow: 'sm'}} 
              className="space-y-3!"
            >
              
              <div>
                <Heading size={'md'} mb={'1'} _hover={{textDecoration: 'underline'}}>
                  <Link 
                    to={`/project/${item.project_id}/overview`}
                  >
                    { item.project_name }
                  </Link>
                </Heading>

                <Text fontSize={'sm'} color={'fg.muted'}>
                  { item.project_description }
                </Text>
              </div>

            </Box>
          ))} */}

          {/* <Box 
            borderWidth="1px"
            borderColor="border.disabled"
            rounded={'md'}
            px={'6'}
            py={'4'}
            _hover={{boxShadow: 'sm'}}
            className="space-y-3!"
          >
            
            <div>
              <Heading size={'md'} mb={'1'} _hover={{textDecoration: 'underline'}}>
                <Link 
                  to="/project/1/overview"
                >
                  TaskFlow
                </Link>
              </Heading>

              <Text fontSize={'sm'} color={'fg.muted'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </Text>
            </div>

            <Progress.Root maxW="100%" size={'sm'}>
              <HStack gap="3">
                <Progress.Track flex="1">
                  <Progress.Range />
                </Progress.Track>
                <Progress.ValueText fontSize={'sm'} color={'fg.muted'}>40%</Progress.ValueText>
              </HStack>
            </Progress.Root>

            <div className="flex items-center justify-between">

              <Text 
                fontSize={'sm'} 
                color={'fg.muted'}
                className="flex items-center gap-1"
              >
                <BiCheck size={'21'} />
                <span>4 / 16</span>
              </Text>


              <Stack gap="6">
                <Group gap="0" spaceX="-3">
                  {users.map((user) => (
                    <Avatar.Root key={user.name} size="xs" borderWidth="2px" borderColor="gray.surface.bg">
                      <Avatar.Fallback name={user.name} />
                      <Avatar.Image src={user.src} />
                    </Avatar.Root>
                  ))}
                  <Avatar.Root size="xs" bg="colorPalette.3">
                    <Avatar.Fallback>+3</Avatar.Fallback>
                  </Avatar.Root>
                </Group>
              </Stack>

            </div>

          </Box> */}


        {/* </div> */}

        

      </ProjectDialogProvider>
    </>
  )
}

export default Project