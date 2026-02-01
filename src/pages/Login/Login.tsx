import { PasswordInput } from "@/components/ui/password-input"
import { Box, Button, Field, Fieldset, HStack, Input, Separator, Stack, Text } from "@chakra-ui/react"
import { GrGoogle } from "react-icons/gr"
import { Link as RouterLink  } from "react-router-dom"




const Login = () => {
  return (
    <>

      <Box 
        className="grid place-items-center h-svh w-full "  
        bg={'bg.subtle'} 
      >
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
            Sign in
          </Button>

          <HStack>
            <Separator flex="1" />
            <Text 
              flexShrink="0" 
              textTransform={'capitalize'}
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
      </Box>
    
    
    </>
  )
}

export default Login