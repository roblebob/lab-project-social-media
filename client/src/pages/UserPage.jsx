import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader"; 
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";
import Post from "../components/Post";
import useGetUserProfile from "../hooks/useGetUserProfile";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postsAtom";

const UserPage = () => { 
  
  const { username } = useParams();
  const showToast = useShowToast(); 
  const [posts, setPosts] = useRecoilState(postsAtom);
  const [loadingPosts, setLoadingPosts] = useState(true);
  
  const {user, loading} = useGetUserProfile(username);
  
  
  useEffect(() => {
    const getPosts = async () => {
      setLoadingPosts(true);
      try {
        const res = await fetch(`/api/posts/user/${username}`);
        const data = await res.json();

        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        // console.log(data);
        setPosts(data);
      } catch (error) {
        showToast("Error", error, "error");
        setPosts([]);
      } finally {
        setLoadingPosts(false);
      }
    }

    getPosts();
    
  }, [username, showToast, setPosts]);

  // console.log("posts is here and it is recoil state", posts);

  if (!user && loading)
    return (
      <Flex justify={"center"}>
        <Spinner size={"xl"} />
      </Flex>
    );

  if (!user && !loading) return <h1>User not found</h1>;

  return (
    <>
      <UserHeader user={user} />

      {!loadingPosts && posts.length === 0 && <h1>No posts found</h1>}

      {loadingPosts && ( 
        <Flex justifyContent={"center"} my={12}>
          <Spinner size={"xl"} />
        </Flex>
      )}

      {posts.map((post) => (
        <Post key={post._id} post={post} postedBy={post.postedBy}  />
      ))}
    </>
  );
};

export default UserPage;
