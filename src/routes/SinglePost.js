// import {
//     Box,
//     Center,
//     Heading,
//     Text,
//     Stack,
//   } from '@chakra-ui/react';
// import { useParams } from "react-router-dom"
// import { useEffect } from "react"

// const SinglePost = ({token, posts, setPosts}) => {
//     const fetchPosts = async () => {
//         const resp = await fetch(`https://strangers-things.herokuapp.com/api/2202-ftb-pt-web-pt/posts`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`
//                     }
//         })
//         const data = await resp.json();
//         return data;
//         // setPosts(data.data.posts);
//         // console.log(data.data.posts)
//     }

//     const fetchpost = async () => {
//         const data = await fetchPosts();
//         //console.log(data);
//         setPosts(data);
//         //console.log(posts);        
//         //return data;
//     }
    
//     useEffect(() => {
//         fetchpost();
//     }, []);
//     const {postId} = useParams();
//     //console.log(posts);
//     //console.log(posts);
//     console.log(posts);
//     // const post = posts.find(post => {
//     //         return post._id === postId
//     // })
//     // console.log(post);
   
    
    
//     // console.log(post);
// return(
//     <div id="card">
//          <Center py={6}>
//     <Box
//         textAlign={"center"}
//         maxW={'445px'}
//         w={'full'}
//         boxShadow={'2xl'}
//         rounded={'md'}
//         p={6}
//         overflow={'hidden'}>
//         <Stack>
//     <Text
//             color={'green.500'}
//             textTransform={'uppercase'}
//             fontWeight={800}
//             fontSize={'sm'}
//             letterSpacing={1.1}>
//             {post.price}
//     </Text>

//     <Heading
//             fontSize={'2xl'}
//             fontFamily={'body'}>
//             {post.title}
//     </Heading>
//         <Text color={'gray.500'}>
//             {post.description}
//         </Text>
//     </Stack>
//     <Stack mt={6} direction={'column'} spacing={4} align={'center'}>
//     <Stack direction={'column'} spacing={0} fontSize={'sm'}>
//     <Text alignItems={'center'} fontWeight={600}>{post.author.username}</Text>
//     </Stack>
//     </Stack>
//     </Box>
//     </Center>
//     </div>
// )

// }

// export default SinglePost;

            // <h1>{post.title}</h1>
            // <p>{post.price}</p>
            // <p>{post.description}</p>
            // <p>{post.author.username}</p>

