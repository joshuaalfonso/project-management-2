import { api } from "@/lib/axios";
import type { SignUp } from "../model/signup.model";
import type { ApiResponse } from "@/model/apiResponse.model";




export const signUp = async (newItem: SignUp) => {
    const { data } = await api.post<ApiResponse>("/user/signup", newItem);
    return data;
};