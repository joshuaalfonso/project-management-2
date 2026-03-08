import { create } from "zustand"

type ModalType =
  | "createProject"
  | "editProject"
  | "createTask"
  | "editTask"
  | null

type ModalState = {
  type: ModalType
  data?: any
  openModal: (type: ModalType, data?: any) => void
  closeModal: () => void
}

export const useModalStore = create<ModalState>((set) => ({
  type: null,
  data: undefined,

  openModal: (type, data) =>
    set({
      type,
      data,
    }),

  closeModal: () =>
    set({
      type: null,
      data: undefined,
    }),
}))