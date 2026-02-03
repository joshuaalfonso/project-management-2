import { api } from "@/lib/axios";
import type { LoginPost, LoginResponse } from "@/model/login.model";




export const logInApi = async (newItem: LoginPost) => {
    const { data } = await api.post<LoginResponse>("/user/login", newItem);
    return data;
};