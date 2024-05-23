import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <Container maxWidth="640px">
      <Routes>
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/posts/:postId" element={<PostPage />} />
      </Routes>
    </Container>
  );
}

export default App;
