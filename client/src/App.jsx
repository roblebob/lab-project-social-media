import { Navigate, Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import HomePage from "./pages/HomePage";
import { Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import AuthPage from "./pages/AuthPage";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom";
import LogoutButton from "./components/LogoutButton";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import CreatePost from "./components/CreatePost";

function App() {
  const user = useRecoilValue(userAtom);
  console.log(user);
  return (
    <Container maxWidth="620px">
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <HomePage /> : <Navigate to={"/auth"} /> } />
        <Route path="/auth" element={!user ? <AuthPage /> : <Navigate to={"/"} />} />
        <Route path="/update" element={user ? <UpdateProfilePage /> : <Navigate to={"/auth"} />} />

        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/post/:postId" element={<PostPage />} />
      </Routes>

      {user && <LogoutButton />}
      {user && <CreatePost />}
    </Container>
  );
}

export default App;
