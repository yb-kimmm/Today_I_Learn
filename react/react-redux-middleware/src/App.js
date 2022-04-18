import "./App.css";
// import CounterContainer from "./containers/CounterContainer";
import { Routes, Route } from "react-router-dom";
import PostPage from "./pages/PostPage";
import PostListPage from "./pages/PostListPage";
import CounterContainer from "./containers/CounterContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostListPage />} />
      <Route path="/:id" element={<PostPage />} />
    </Routes>
  );
}

export default App;
