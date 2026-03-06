import { createDialogContext } from "@/context/dialog/CreateDialogContext";
import type { ProjectList } from "../project-list/project.model";







export const {
  DialogProvider: ProjectDialogProvider,
  useDialog: useProjectDialog,
} = createDialogContext<ProjectList>();
