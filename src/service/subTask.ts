import { api } from "@/lib/axios";



export const completeSubtaskApi = async ( is_completed: boolean, subtask_id: number) => {
      const { data } = await api.post(`/subtask/${subtask_id}/complete`, {is_completed});
      return data;
}