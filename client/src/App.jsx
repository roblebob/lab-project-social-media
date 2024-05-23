import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import { Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Container maxWidth="620px">
      <Navbar />
      <Routes>
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/posts/:postId" element={<PostPage />} />
      </Routes>
    </Container>
  );
}

export default App;
