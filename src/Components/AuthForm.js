import {
    Button,
    Checkbox,
    Flex,
    Heading,
    Input,
    Link,
    Stack,
    Image,
  } from '@chakra-ui/react';
import { useState } from 'react';

const AuthForm = ({setToken}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async (event) =>{
        event.preventDefault();
        const response = await fetch(
            'https://strangers-things.herokuapp.com/api/2202-FTB-HY-WEB-PT/users/register',
            {
                method: "POST",
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                user: {
                    username,
                    password
               }
            })
          }
        )
        const data = await response.json();
        console.log(data);
        window.localStorage.setItem('token', data.data.token)
        setToken(data.data.token)
        }

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Create an account</Heading>
          
            <form onSubmit={registerUser}>
            <label>Username</label>
            <Input type="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        
          
            <label>Password</label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

              <Button type="submit" colorScheme={'blue'} variant={'solid'}>
              Register
            </Button>
            </form>

          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
           

          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}
        // <form onSubmit={registerUser}>
        //     <label>Username</label>
        //     <input value={username} onChange={(e) => setUsername(e.target.value)}/>
        //     <label>Password</label>
        //     <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        //     <button type='submit'>Submit</button>
        // </form



/* <FormControl id="username">
<FormLabel>Username</FormLabel>
<Input type="username" value={username} onChange={(e) => setUsername(e.target.value)} />
</FormControl>
<FormControl id="username">
<FormLabel>Password</FormLabel>
<Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
</FormControl> */

export default AuthForm;