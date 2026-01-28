import { Avatar, Badge, Checkbox, Heading, Table } from "@chakra-ui/react"

const Task = () => {

  const todo = [
    { id: 1, name: "Table data incorrect", category: "Bug", price: 999.99 },
    { id: 2, name: "Fix broken UI", category: "Low priority", price: 49.99 },
    
  ]

  const inProgress = [
    { id: 1, name: "Fix dashboard layout", category: "Bug", price: 999.99 },
    { id: 2, name: "New design", category: "Low priority", price: 49.99 },
    { id: 3, name: "Improve user experiences", category: "Bug", price: 150.0 },
  ]

  return (
    <>

      <div className="flex flex-col gap-10">

        <div>

          <Heading 
            size={'sm'} 
            textTransform={'uppercase'}
            mb={'3'}
          >
            To Do
          </Heading>

          <Table.Root size="sm" tableLayout={'fixed'}>
            <Table.Body>
              {todo.map((item, index) => (
                <Table.Row 
                  key={item.id} 
                  background={'bg.subtle'} 
                  color={'fg.muted'}
                  borderBottom={index === todo.length - 1 ? 'none' : undefined}
                >
                  <Table.Cell>
                    <Checkbox.Root variant={'outline'} size={'sm'}>
                      <Checkbox.HiddenInput />
                      <Checkbox.Control />
                    </Checkbox.Root>
                  </Table.Cell>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>
                    <Badge colorPalette="yellow">Bug</Badge>
                  </Table.Cell>
                  <Table.Cell>July 11</Table.Cell>
                  <Table.Cell textAlign="end">
                    <Avatar.Root size={'xs'}>
                      <Avatar.Fallback name="Segun Adebayo" />
                      <Avatar.Image src="https://bit.ly/sage-adebayo" />
                    </Avatar.Root>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>

        </div>

        <div>

          <Heading 
            size={'sm'} 
            textTransform={'uppercase'}
            mb={'3'}
          >
            In Progress
          </Heading>

          <Table.Root size="sm" tableLayout={'fixed'}>
            <Table.Body>
              {inProgress.map((item, index) => (
                <Table.Row 
                  key={item.id} 
                  background={'bg.subtle'} 
                  color={'fg.muted'}
                  borderBottom={index === inProgress.length - 1 ? 'none' : undefined}
                >
                  <Table.Cell>
                    <Checkbox.Root variant={'outline'} size={'sm'}>
                      <Checkbox.HiddenInput />
                      <Checkbox.Control />
                    </Checkbox.Root>
                  </Table.Cell>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>
                    <Badge colorPalette="purple">Low priority</Badge>
                  </Table.Cell>
                  <Table.Cell>July 11</Table.Cell>
                  <Table.Cell textAlign="end">
                    <Avatar.Root size={'xs'}>
                      <Avatar.Fallback name="Segun Adebayo" />
                      <Avatar.Image src="https://bit.ly/sage-adebayo" />
                    </Avatar.Root>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>

        </div>

      </div>
    
    </>
  )
}

export default Task