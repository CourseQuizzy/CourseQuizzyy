import Home from "./pages/HomePage/Home";
import MyLearningPageHome from "./pages/MyLearningPage/MyLearningPageHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/my-learning-page-home" exact element={<MyLearningPageHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
