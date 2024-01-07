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
import AddCourseStep1 from "./pages/CreateCourse/AddCourse2";

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
        <Route path="/course/create" exact element={<AddCourseStep1 />} />
        <Route path="/course/create2" exact element={<AddCourseStep2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
