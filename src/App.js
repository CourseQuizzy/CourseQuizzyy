import Home from "./pages/HomePage/Home";
import Catalogue from "./pages/CourseCatalogue/CourseCatalogue";
import BookmarkPage from "./pages/MyLearningPage/BookmarkPage";
import MyLearningPage from "./pages/MyLearningPage/MyLearningPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseHomePage from "./pages/CourseHomePage/CourseHomePage";
import CourseContent from "./pages/CourseContent/CourseContent";
import FillQuizLsa from "./pages/FillQuiz/LongShortAnswer";
import FillQuizMsp from "./pages/FillQuiz/Msp";
import FillQuizCp from "./pages/FillQuiz/confirmpage";
import FillQuizRC from "./pages/FillQuiz/ReviewCourse";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/catalogue" exact element={<Catalogue />} />
        <Route path="/courses/1" exact element={<CourseHomePage />} />
        <Route path="/courses/1/contents" exact element={<CourseContent />} />
        <Route path="/popfilllsa" exact element={<FillQuizLsa />} />
        <Route path="/popfillmsp" exact element={<FillQuizMsp />} />
        <Route path="/popfillcp" exact element={<FillQuizCp />} />
        <Route path="/popfillrc" exact element={<FillQuizRC />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
