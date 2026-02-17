import { WorkspaceRoles } from "@/features/WorkspaceMember/components/WorkspaceRoles";
import { useWorkspaceMember } from "@/features/WorkspaceMember/hooks/useWorkspaceMember"
import LoadingSpinner from "@/shared/components/LoadingSpinner";
import { Avatar, createListCollection, Heading, Input, Portal, Select, Separator, Text } from "@chakra-ui/react";
import { Clipboard, IconButton } from "@chakra-ui/react";

const workspaceRole = createListCollection({
  items: [
    { label: "Owner", value: '1' },
    { label: "Admin", value: '2' },
    { label: "Member", value: '3'},
    { label: "Viewer", value: '4' },
  ],
})

const WorkspaceMember = () => {

  const { workspace_members, isPending, error } = useWorkspaceMember();


  if (isPending) return <LoadingSpinner />;
  if (error) return <p> Failed to load workspace members</p>;

  return (
    <>
        <div className="space-y-8!">
          
          <div className="max-w-5xl mx-auto!">
            <div className="flex items-center gap-4 h-14.5 mb-6!">
                <Avatar.Root shape="rounded" size={'xl'} variant={'solid'} >
                    <Avatar.Fallback name={workspace_members?.workspace_name ?? '?'} />
                </Avatar.Root>
                <div className="flex flex-col">
                    <span className="text-xl!">{workspace_members?.workspace_name}</span>
                    <Text fontSize={'sm'} color={'fg.muted'}>
                      { workspace_members?.workspace_members.length } Member
                    </Text>
                </div>
            </div>
          </div>

          <Separator />

          <div className="max-w-5xl mx-auto!">
            <Heading
              fontSize={'md'}
            >
              Workspace members
            </Heading>
            <Text 
              fontSize={'sm'}
              color={'fg.muted'}
            >
              Users who are part of the workspace. Their access depends on their workspace role and project memberships.
            </Text>
          </div>

          <div className="max-w-5xl mx-auto!">
            <Separator />
          </div>

          <WorkspaceRoles />

          <div className="max-w-5xl mx-auto!">
            <Separator />
          </div>

          <div className="max-w-5xl mx-auto!">
            <Heading
              fontSize={'md'}
            >
              Invite members to join you
            </Heading>
            <Text 
              fontSize={'sm'}
              color={'fg.muted'}
              mb={4}
            >
              Anyone in with an invite link can join this Workspace.
            </Text>
            <div className="flex items-center gap-2">
              <Input value="http://strive/workspace/join" size={'sm'} />
              <Clipboard.Root value="https://chakra-ui.com">
                <Clipboard.Trigger asChild>
                  <IconButton variant="surface" size="xs">
                    <Clipboard.Indicator />
                  </IconButton>
                </Clipboard.Trigger>
              </Clipboard.Root>
            </div>
          </div>

          <div className="max-w-5xl mx-auto!">
            <Separator />
          </div>

          <div className="max-w-5xl mx-auto!">

            <ul>
              { workspace_members?.workspace_members.map(member => (
                
                <li className="flex items-center gap-4 h-14.5 mb-6!" key={member.user_email}>
                  <Avatar.Root 
                    shape="full" 
                    size={'sm'} 
                    variant={'solid'}
                    colorPalette={'blue'} 
                  >
                      <Avatar.Fallback 
                        name={member.user_fullname} 
                      />
                  </Avatar.Root>
                  <div className="flex flex-col">
                      <span className="text-sm!">{member.user_fullname}</span>
                      <Text fontSize={'xs'} color={'fg.muted'}>{ member.user_email }</Text>
                  </div>
                  <div className="flex-1! flex items-center justify-end">
                      <Select.Root 
                        collection={workspaceRole} 
                        size="sm" 
                        width="180px"
                        defaultValue={[String(member.workspace_role_id)]}
                        disabled={member.workspace_role == 'Owner'}
                      >
                        <Select.HiddenSelect />
                        <Select.Control>
                          <Select.Trigger>
                            <Select.ValueText placeholder="Select Role" />
                          </Select.Trigger>
                          <Select.IndicatorGroup>
                            <Select.Indicator />
                          </Select.IndicatorGroup>
                        </Select.Control>
                        <Portal>
                          <Select.Positioner>
                            <Select.Content>
                              {workspaceRole?.items.map((role) => (
                                <Select.Item 
                                  item={role} 
                                  key={role.value} 
                                >
                                  {role.label} 
                                  <Select.ItemIndicator />
                                </Select.Item>
                              ))}
                            </Select.Content>
                          </Select.Positioner>
                        </Portal>
                      </Select.Root>
                  </div>
                </li>
              )) }
            </ul>

          </div>
          

        </div>
    </>
  )
}

export default WorkspaceMember