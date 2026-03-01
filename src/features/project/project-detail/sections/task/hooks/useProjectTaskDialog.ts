



import { createDialogContext } from "@/context/dialog/CreateDialogContext";
import type { TaskDetail } from "../projectTask.model";




export const {
  DialogProvider: ProjectTaskDialogProvider,
  useDialog: useProjectTaskDialog,
} = createDialogContext<TaskDetail>();
