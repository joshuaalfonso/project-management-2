import { PasswordInput } from "@/components/ui/password-input"
import { Box, Button, Field, Fieldset, Input, Stack, Text } from "@chakra-ui/react"
import { Link as RouterLink, useNavigate  } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useSignup } from "./useSignUp";
import { toaster } from "@/components/ui/toaster";



interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<SignUpFormValues>();

  const { signUpMutation, isPending } = useSignup();

  const onSubmit: SubmitHandler<SignUpFormValues> = (data) => {
    // console.log("Form data:", data);
    signUpMutation(
      data,
      {
        onSuccess: ({message}) => {
          toaster.create({
            title: "Hooray 🥳🥳🥳!!!",
            description: message || 'You are successfully registered!',
            type: "info",
            duration: 5000
          })
          reset();
          navigate('/login')
        },
        onError(error) {
          toaster.create({
            description: error.message || 'Something went wrong',
            type: "error",
          })
        },
      }
    )

  };


  return (
    <>

      <Box 
        className="grid place-items-center h-svh w-full "  
        bg={'bg.subtle'} 
      >
        {/* size="lg" maxW="md" */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
          <Fieldset.Root size="lg" maxW="md" px="6">
            <Stack>
              <Fieldset.Legend fontSize="xl">
                Hello! Register to get started.
              </Fieldset.Legend>
              <Fieldset.HelperText>All fields are required.</Fieldset.HelperText>
            </Stack>

            <Fieldset.Content>

              <Field.Root>
                <Field.Label>Full Name</Field.Label>
                <Input
                  type="text"
                  autoComplete="off"
                  {...register("name", { required: "Full name is required" })}
                />
                {errors.name && (
                  <Text color="fg.error" fontSize="sm">
                    {errors.name.message}
                  </Text>
                )}
              </Field.Root>

              <Field.Root>
                <Field.Label>Email</Field.Label>
                <Input
                  type="email"
                  autoComplete="off"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <Text color="fg.error" fontSize="sm">
                    {errors.email.message}
                  </Text>
                )}
              </Field.Root>

              {/* Password */}
              <Field.Root>
                <Field.Label>Password</Field.Label>
                <PasswordInput
                  autoComplete="off"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 8, message: "Password must be at least 8 characters" },
                  })}
                />
                {errors.password && (
                  <Text color="fg.error" fontSize="sm">
                    {errors.password.message}
                  </Text>
                )}
              </Field.Root>
            </Fieldset.Content>

            <Button type="submit" alignSelf="flex-start" width="full" loading ={isSubmitting || isPending}>
              Register
            </Button>

            <div className="flex items-center justify-center mt-4">
              <Text fontSize="sm" color="fg.muted">
                Already have an account?
              </Text>
              &nbsp;&nbsp;
              <RouterLink
                to="/login"
                className="text-sm! font-medium! hover:underline!"
              >
                Log in
              </RouterLink>
            </div>
          </Fieldset.Root>
        </form>
      </Box>
    
    
    </>
  )
}

export default SignUp