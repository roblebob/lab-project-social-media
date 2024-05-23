import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return <>
    <UserHeader />
    <UserPost likes={1200} replies={401} postImage={"/post1.png"} postTitle={"Let'S talk"}/>
    <UserPost likes={450} replies={41} postImage={"/post2.png"} postTitle={"Let'S talk"}/>
    <UserPost likes={200} replies={50} postImage={"/post3.png"} postTitle={"Let'S talk"}/>
    <UserPost likes={100} replies={101}  postTitle={"Let'S talk"}/>
  </>;
};

export default UserPage;
