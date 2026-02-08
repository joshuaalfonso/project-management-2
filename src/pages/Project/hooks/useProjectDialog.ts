import { createDialogContext } from "@/context/dialog/CreateDialogContext";
import type { ProjectList } from "../project.model";







export const {
  DialogProvider: ProjectDialogProvider,
  useDialog: useProjectDialog,
} = createDialogContext<ProjectList>();
