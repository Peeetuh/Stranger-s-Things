import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
  } from '@chakra-ui/react';
import { useEffect, React, useState } from "react";
import { Link } from "react-router-dom";
import deletePost from '../Components/DeletePost'


const Post = ({posts, setPosts, token}) => {
  const [APIData, setAPIData] = useState([])
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const searchItems = (searchValue) => {
      setSearchInput(searchValue)
      if (searchInput !== '') {
      const filteredData = APIData.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    }
    else{
      setFilteredResults(APIData)
    }
  }
    // console.log('posts: ', posts);
    useEffect(() => {
        const fetchPosts = async () => {
            const resp = await fetch(`https://strangers-things.herokuapp.com/api/2202-ftb-pt-web-pt/posts`);
            const data = await resp.json();
            setPosts(data.data.posts);
        }
        fetchPosts();
    }, []);

    useEffect(() => {
      const fetchSearch = async () => {
          const resp = await fetch(`https://strangers-things.herokuapp.com/api/2202-ftb-pt-web-pt/posts`);
          const data = await resp.json();
            setAPIData(data.data.posts);
      }
      fetchSearch();
  }, []);
  
  
    return (
        <div id="postPage">
              <div className='searchBar'>
           <input onChange={(e) => searchItems(e.target.value)} type='text' placeholder='Search' />
            
           
              </div>
            {posts.map(({title, price, description, _id, author}) => {
                return(
                    <div id="card" key={_id}>
                         <Center py={6}>
                  <Box
                    textAlign={"center"}
                    maxW={'445px'}
                    w={'full'}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    p={6}
                    overflow={'hidden'}>
                    <Stack>
                  <Text fontWeight={1000}
                        fontSize = {'large'}
                  >
                    {title}
                  </Text>
                  <Text
                        color={'green.500'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}>
                        {price}
                  </Text>
                      <Text color={'gray.500'}>
                        {description}
                      </Text>
                  </Stack>
                  <Stack mt={6} direction={'column'} spacing={4} align={'center'}>
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                      <Text alignItems={'center'} fontWeight={600}>{author.username}</Text>
                      {token && author && (
                      <button
                      onClick={() => deletePost(token, _id)}
                      >
                        Delete
                      </button>
                      )}
                    </Stack>
                  </Stack>
      </Box>
    </Center>
                    </div>
                )
            })}
        </div>
    )
   
   
    
}
export default Post;