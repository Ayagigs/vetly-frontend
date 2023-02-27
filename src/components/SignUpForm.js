import React from 'react'
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
  Box,
  Container,
  Flex,
 IconButton,
  useColorMode,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Button,  
} from '@chakra-ui/react';


const SignUpForm = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <LoginArea />
      </ColorModeProvider>
    </ThemeProvider>
    
  )
}




const LoginArea = () => {
  return (
      <Container  backgroundColor="#ffffff" display="flex">
    <Flex minHeight='60vh' width='full' align='center' justifyContent='center'>
      <Box 
        borderWidth={1}
        px={4}
        width='full'
        maxWidth='500px'
        borderRadius={4}
        textAlign='center'
        boxShadow='lg'
      >
        <ThemeSelector />
        <Box p={4}>
          <LoginHeader />
          <LoginForm />
        </Box>
      </Box>
    </Flex>
    </Container>
 
);
    
  
  
}

const ThemeSelector = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box textAlign='right' py={4}>
      <IconButton
        icon={colorMode === 'light' ? 'moon' : 'sun'}
        onClick={toggleColorMode}
        variant='ghost'
      />
    </Box>
  )
}

const LoginHeader = () => {
  return (
    <Box textAlign='left' >
      <Heading fontFamily='inherit' fontWeight='700' fontSize='22'>Create your account</Heading>
      <Text fontWeight='400' fontSize='12'>
        Enter the fields below to get started
      </Text>
    </Box>
  )
}

const LoginForm = () => {
  return (
    <Box my={4} textAlign='left'>
      <form>
      <FormControl>
          <FormLabel fontSize='12' fontWeight='500'fontFamily='inherit'>Full name</FormLabel>
          <Input type='Full name' fontSize='12' fontWeight='400'fontFamily='inherit' placeholder='Enter Full name' />
        </FormControl>

        <FormControl>
          <FormLabel fontSize='12' fontWeight='500'fontFamily='inherit'>Email</FormLabel>
          <Input type='email' fontSize='12' fontWeight='400'fontFamily='inherit' placeholder='Enter email' />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel fontSize='12' fontWeight='500'fontFamily='inherit'>Password</FormLabel>
          <Input type='password' fontSize='12' fontWeight='400'fontFamily='inherit' placeholder='Create a password' />
        </FormControl>
         <Button colorScheme='blue'  width='full' mt={4} fontSize='12' fontWeight='500'fontFamily='inherit'>Sign up</Button>
        <Text textAlign='center' fontSize='12' fontWeight='500'fontFamily='inherit' > or</Text>
        <Button colorScheme='gray' width='full' mt={4} fontSize='12' fontWeight='500'fontFamily='inherit'>Sign up with Google</Button>
        <Button colorScheme='gray' width='full' mt={4} fontSize='12' fontWeight='500'fontFamily='inherit'>Sign up with Facebook</Button>
        <Text textAlign='center' fontSize='12' fontWeight='500'fontFamily='inherit'>Already have an account?
        <Link colorScheme='blue'>Sign in</Link>
        </Text>
      </form>
    </Box>
  )
}

export default SignUpForm;