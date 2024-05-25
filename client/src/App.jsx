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

function App() {
  const user = useRecoilValue(userAtom);
  console.log(user);
  return (
    <Container maxWidth="620px">
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <HomePage /> : <Navigate to={"/auth"} /> } />
        <Route path="/auth" element={!user ? <AuthPage /> : <Navigate to={"/"} />} />

        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/posts/:postId" element={<PostPage />} />
      </Routes>

      {user && <LogoutButton />}
    </Container>
  );
}

export default App;
