import Home from "./pages/HomePage/Home";
import BookmarkPage from "./pages/MyLearningPage/BookmarkPage";
import MyLearningPage from "./pages/MyLearningPage/MyLearningPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyTeachingPage from "./pages/MyLearningPage/MyTeachingPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/my-learning" exact element={<MyLearningPage />} />
        <Route path="/bookmark" exact element={<BookmarkPage />} />
        <Route path="/my-teaching" exact element={<MyTeachingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
