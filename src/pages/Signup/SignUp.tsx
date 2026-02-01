import { PasswordInput } from "@/components/ui/password-input"
import { Box, Button, Field, Fieldset, Input, Stack, Text } from "@chakra-ui/react"
import { Link as RouterLink  } from "react-router-dom"




const SignUp = () => {
  return (
    <>

      <Box 
        className="grid place-items-center h-svh w-full "  
        bg={'bg.subtle'} 
      >
        <Fieldset.Root size="lg" maxW="md" px={'6'}>
          <Stack>
            <Fieldset.Legend fontSize={'xl'}>Hello! Register to get started.</Fieldset.Legend>
            {/* <Fieldset.HelperText>
              Please enter details to sign in.
            </Fieldset.HelperText> */}
          </Stack>

          <Fieldset.Content>

            <Field.Root>
              <Field.Label>Full Name</Field.Label>
              <Input name="email" type="text" autoComplete="off" />
            </Field.Root>

            <Field.Root>
              <Field.Label>Email</Field.Label>
              <Input name="email" type="email" autoComplete="off" />
            </Field.Root>

            <Field.Root>
              <Field.Label>Password</Field.Label>
              {/* <Input name="email" type="email" /> */}
               <PasswordInput autoComplete="off"/>
            </Field.Root>
          </Fieldset.Content>

          <Button 
            type="submit" 
            alignSelf="flex-start"
            width={'full'}
          >
            Register
          </Button>

    
          <div className="flex items-center justify-center">

            <Text 
              fontSize={'sm'}
              color={'fg.muted'}
              >
                Already have an account? 
            </Text>

            &nbsp;
            &nbsp;

            <RouterLink to="/login" className="text-sm! font-medium! hover:underline!">
              Log in
            </RouterLink>

          </div>

        </Fieldset.Root>
      </Box>
    
    
    </>
  )
}

export default SignUp