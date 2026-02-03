import { PasswordInput } from "@/components/ui/password-input"
import { Box, Button, Field, Fieldset, HStack, Input, Separator, Stack, Text } from "@chakra-ui/react"
import { useForm, type SubmitHandler } from "react-hook-form";
import { GrGoogle } from "react-icons/gr"
import { Link as RouterLink, useNavigate  } from "react-router-dom"
import { useLogIn } from "./useLogin";
import { toaster } from "@/components/ui/toaster";
import { getErrorMessage } from "@/lib/axios";
import { useAuth } from "@/context/auth/useAuth";


interface LoginFormValues {
  email: string;
  password: string;
}

const Login = () => {

  const { login } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>();

  const { logInMutation, isPending } = useLogIn();

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {

    logInMutation(
      data,
      {
        onSuccess: (response) => {
          login(response.token, response.user);
          navigate("/dashboard")
        },
        onError: (error) => {
          const errorMessage = getErrorMessage(error);
          toaster.create({
            description: errorMessage,
            type: "info",
            duration: 5000
          })
        }
      }
    )
      
  };

  return (
    <>

      <Box 
        className="grid place-items-center h-svh w-full "  
        bg={'bg.subtle'} 
      >
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">


        <Fieldset.Root size="lg" maxW="md" px={'6'}>
          <Stack>
            <Fieldset.Legend fontSize={'xl'}>Welcome! Glad to see you.</Fieldset.Legend>
            <Fieldset.HelperText>
              Please enter details to sign in.
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content>

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

          <Button 
            type="submit" 
            alignSelf="flex-start"
            width={'full'}
            loading={isSubmitting || isPending}
          >
            Sign in
          </Button>

          <HStack>
            <Separator flex="1" />
            <Text 
              flexShrink="0" 
              textTransform={'uppercase'}
              fontSize={'xs'}
              color={'fg.muted'}
              >
                Or continue with
            </Text>
            <Separator flex="1" />
          </HStack>

          <Button  variant="outline">
            <GrGoogle /> Google
          </Button>

          <div className="flex items-center justify-center">
            <Text 
              fontSize={'sm'}
              color={'fg.muted'}
              >
                Don't have an account? 
            </Text>
            &nbsp;
            &nbsp;
            {/* <Link fontSize={'sm'} fontWeight={'medium'}> */}
              <RouterLink to="/signup" className="text-sm! font-medium! hover:underline!">
                Sign up
              </RouterLink>
            {/* </Link> */}
          </div>

        </Fieldset.Root>
        </form>
      </Box>
    
    
    </>
  )
}

export default Login