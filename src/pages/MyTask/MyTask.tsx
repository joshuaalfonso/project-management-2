import { Avatar, Badge, Box, Group, Heading, Separator, Stack, Text } from "@chakra-ui/react"
import { BiComment } from "react-icons/bi"
import { FiClock } from "react-icons/fi"
import { GrAttachment } from "react-icons/gr"



const MyTask = () => {


  const users = [
    {
      name: 'Christian Schröter',
      src: 'https://avatars.githubusercontent.com/u/1846056?v=4',
    },
    {
      name: 'Segun Adebayo',
      src: 'https://avatars.githubusercontent.com/u/6916170?v=4',
    },
    {
      name: 'Philipp Körner',
      src: 'https://avatars.githubusercontent.com/u/153984143?v=4',
    },
  ]

  return (
    <>
      <Heading mb={'10'}>
        My Task 
      </Heading>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">

        <div>

          <Heading 
            fontSize={'sm'}
            color={'fg.muted'}
            mb={4}
          >
            To Do
          </Heading>

          <Box 
            p={4} 
            borderWidth={1} 
            borderColor={'border'}
            rounded={'xl'}
            spaceY={'3'}
          >

            <div>
              <Heading fontSize={'md'}>Responsive design</Heading>
              <Text color={'fg.muted'} fontSize={'sm'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            </div>

            <div className="flex items-center gap-2">
              <Badge colorPalette="yellow">Bug</Badge>
              <Badge colorPalette="red">Urgent</Badge>
              <Badge variant="outline" colorPalette="bg">
                <FiClock />
                3 days left
              </Badge>
            </div>

            <div className=" pt-2!">
              <Separator />
            </div>

            <div className="flex justify-between">
              <div className="flex gap-4">
                <div className="flex items-center gap-1">
                  <Text 
                    fontSize={'sm'} 
                    color={'fg.muted'}
                  >
                    <GrAttachment />
                  </Text>
                  <Text 
                    fontSize={'sm'} 
                    color={'fg.muted'}
                  >
                    <span>3</span>
                  </Text>
                </div>
                <div className="flex items-center gap-1">
                  <Text 
                    fontSize={'sm'} 
                    color={'fg.muted'}
                  >
                    <BiComment />
                  </Text>
                  <Text 
                    fontSize={'sm'} 
                    color={'fg.muted'}
                  >
                    <span>10</span>
                  </Text>
                </div>
              </div>

              <Stack gap="6">
                <Group gap="0" spaceX="-3">
                  {users.map((user) => (
                    <Avatar.Root key={user.name} size="xs" borderWidth="2px" borderColor="gray.surface.bg">
                      <Avatar.Fallback name={user.name} />
                      <Avatar.Image src={user.src} />
                    </Avatar.Root>
                  ))}
                  <Avatar.Root size={'xs'} bg="colorPalette.3">
                    <Avatar.Fallback>+3</Avatar.Fallback>
                  </Avatar.Root>
                </Group>
              </Stack>
            </div>

          </Box>

        </div>

        <div>
          In Progress
        </div>

        <div>
          To Review
        </div>

        <div>
          Completed
        </div>

      </div>

    </>
  )
}

export default MyTask