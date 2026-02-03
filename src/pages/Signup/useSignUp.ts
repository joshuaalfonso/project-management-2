import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../service/signup.api";



export const useSignup = () => {

    const {mutate: signUpMutation, isPending, error} = useMutation({
        mutationFn: signUp
    })

    return {signUpMutation , isPending, error}
    
};