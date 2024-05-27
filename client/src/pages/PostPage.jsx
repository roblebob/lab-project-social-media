import { useState, useEffect } from "react";
import {
  Flex,
  Avatar,
  Text,
  Image,
  Box,
  Divider,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions"; 
import useGetUserProfile from "../hooks/useGetUserProfile";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";

const PostPage = () => { 

  const {user, loading} = useGetUserProfile();
  const [post, setPost] = useState(null);
  const showToast = useShowToast(); 

  const { postId } = useParams();

  useEffect(() => { 
    const getPost = async () => {
      try {
        const res = await fetch(`/api/posts/${postId}`);
        const data = await res.json();

        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        console.log(data);
        setPost(data);
      } catch (error) {
        showToast("Error", error, "error"); 
      } 
    }

    getPost();
    
  }, [postId, showToast]);


  if (!user && loading) return (
    <Flex justify={"center"}>
      <Spinner size={"xl"} />
    </Flex>
  );

  if (!post) return null;

  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar name={user.name} src={user.profilePic} size={"md"} />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              {user.username}
            </Text>
            <Image src="/verified.png" w={4} h={4} ml={4} />
          </Flex>
        </Flex>

        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={"sm"} color={"gray.light"}>
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>

      <Text my={3}>{post.text}</Text>
      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src={"/post1.png"} w={"full"} />
      </Box>

      <Flex gap={3} my={3}>
        <Actions post={post} />
      </Flex>

      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"} fontSize={"sm"}>
          258 replies
        </Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"} />
        <Text color={"gray.light"} fontSize={"sm"}>
          {200} likes
        </Text>
      </Flex>

      <Divider my={4} />

      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
        </Flex>

        <Button>Get</Button>
      </Flex>

      <Divider my={4} />

      {/* <Comment
        comment={"Looks really good"}
        createdAt={"2d"}
        likes={100}
        userName={"johndoe"}
        userAvatar={"https://bit.ly/dan-abramov"}
      /> */}


    </>
  );
};

export default PostPage;
