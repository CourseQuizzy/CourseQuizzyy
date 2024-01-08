import Home from "./pages/HomePage/Home";
import Catalogue from "./pages/CourseCatalogue/CourseCatalogue";
import BookmarkPage from "./pages/MyLearningPage/BookmarkPage";
import MyLearningPage from "./pages/MyLearningPage/MyLearningPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseHomePage from "./pages/CourseHomePage/CourseHomePage";
import CourseContent from "./pages/CourseContent/CourseContent";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import MyTeachingPage from "./pages/MyLearningPage/MyTeachingPage";
import LoginPage from "./pages/AuthPage/LoginPage";
import SignUpPage from "./pages/AuthPage/SignUpPage";
import AddCourseStep1 from "./pages/CreateCourse/AddCourse";
import AddCourseStep2 from "./pages/CreateCourse/AddCourse2";
import PopUpContent from "./pages/PopUpPage/FirstPage";
import SecContent from "./pages/PopUpPage/SecPage";
import ConfirmationPage from "./pages/CreateCourse/ConfirmationPage";

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
        <Route path="/dashboard" exact element={<UserDashboard />} />
        <Route path="/my-learning" exact element={<MyLearningPage />} />
        <Route path="/bookmark" exact element={<BookmarkPage />} />
        <Route path="/my-teaching" exact element={<MyTeachingPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/register" exact element={<SignUpPage />} />
        <Route path="/courses/create" exact element={<AddCourseStep1 />} />
        <Route path="/courses/create2" exact element={<AddCourseStep2 />} />
        <Route path="/popcontent" exact element={<PopUpContent />} />
        <Route path="/seccontent" exact element={<SecContent />} />
        <Route path="/confirm" exact element={<ConfirmationPage />} />
        <Route path="/popfilllsa" exact element={<FillQuizLsa />} />
        <Route path="/popfillmsp" exact element={<FillQuizMsp />} />
        <Route path="/popfillcp" exact element={<FillQuizCp />} />
        <Route path="/popfillrc" exact element={<FillQuizRC />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
