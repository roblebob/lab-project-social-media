import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <Routes>
      <Route path="/:username" element={<UserPage />} />
      <Route path="/:username/posts/:postId" element={<PostPage />} />
    </Routes>
  );
}

export default App;
