import Home from "./pages/HomePage/Home";
import Catalogue from "./pages/CourseCatalogue/CourseCatalogue";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseHomePage from "./pages/CourseHomePage/CourseHomePage";
import CourseContent from "./pages/CourseContent/CourseContent";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/catalogue" exact element={<Catalogue />} />
        <Route path="/courses/1" exact element={<CourseHomePage />} />
        <Route path="/courses/1/contents" exact element={<CourseContent />} />
        <Route path="/dashboard" exact element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
