
import { useEffect, useState } from "react";
import {
    Heading,
    Box,
    Center,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';

const Profile = ({token}) => {
  const [profile, setProfile] = useState([]);  

    useEffect(() => {
      const MyAccount = async () => {
        fetch('https://strangers-things.herokuapp.com/api/2202-FTB-PT-WEB-PT/users/me', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            }).then(profile => profile.json())
            .then(profile => {
                console.log(profile.data);
                setProfile(profile.data);
            })
            .catch(console.error);
          }
          MyAccount();
        }, [])
        return (
            <Center py={6}>
              <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}>
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                  <p>
                  Username: 
                  </p>
                </Heading>
                <Text
                  textAlign={'center'}
                  color={useColorModeValue('gray.700', 'gray.400')}
                  px={3}>
                  Actress, musician, songwriter and artist. PM for work inquires or{' '}
                  me in your posts
                </Text>

        
                <Stack mt={8} direction={'row'} spacing={4}>
                  <Button
                    flex={1}
                    fontSize={'sm'}
                    rounded={'full'}
                    _focus={{
                      bg: 'gray.200',
                    }}>
                    Message
                  </Button>
                </Stack>
              </Box>
            </Center>
          );
}


export default Profile;