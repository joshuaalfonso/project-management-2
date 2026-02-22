
import { EmptyState, VStack } from "@chakra-ui/react"
import { HiColorSwatch } from "react-icons/hi"




export const EmptyList = () => {
    return (
        <EmptyState.Root>
            <EmptyState.Content>
                <EmptyState.Indicator>
                <HiColorSwatch />
                </EmptyState.Indicator>
                <VStack textAlign="center">
                <EmptyState.Title>List is empty</EmptyState.Title>
                <EmptyState.Description>
                    Add a new item to get started
                </EmptyState.Description>
                </VStack>
                {/* <ButtonGroup>
                <Button>Create token</Button>
                <Button variant="outline">Import</Button>
                </ButtonGroup> */}
            </EmptyState.Content>
        </EmptyState.Root>
    )
}