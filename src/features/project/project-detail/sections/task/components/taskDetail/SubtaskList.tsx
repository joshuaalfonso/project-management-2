import { For, Stack } from "@chakra-ui/react"
import type { Subtask } from "../../projectTask.model"
import SubtaskRow from "./SubtaskRow"


interface Props {
    subtasks: Subtask[]
}


const SubtaskList = ({subtasks}: Props) => {


  return (
    <Stack gap={'3'}>
        <For
            each={subtasks}
        >
            {(item) => (
                <SubtaskRow subtask={item} />
            )}
        </For>
    </Stack>
  )


}

export default SubtaskList