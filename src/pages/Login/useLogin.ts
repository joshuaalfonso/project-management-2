import { useMutation } from "@tanstack/react-query";
import { logInApi } from "@/service/login.api";



export const useLogIn = () => {

    const {mutate: logInMutation, isPending, error} = useMutation({
        mutationFn: logInApi
    })

    return {logInMutation , isPending, error}
    
};