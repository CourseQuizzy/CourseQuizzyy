import Home from "./pages/HomePage/Home";
import Catalogue from "./pages/CourseCatalogue/CourseCatalogue";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseHomePage from "./pages/CourseHomePage/CourseHomePage";
import LoginPage from "./pages/AuthPage/LoginPage"
import SignUpPage from "./pages/AuthPage/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/catalogue" exact element={<Catalogue />} />
        <Route path="/courses/1" exact element={<CourseHomePage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/register" exact element={<SignUpPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
