import Home from "./pages/HomePage/Home";
import Catalogue from "./pages/CourseCatalogue/CourseCatalogue";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseHomePage from "./pages/CourseHomePage/CourseHomePage";
import EnrollConfirmationPopup from "./pages/CourseHomePage/EnrollConfirmationPopup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/catalogue" exact element={<Catalogue />} />
        <Route path="/courses/1" exact element={<CourseHomePage />} />
        <Route
          path="/courses/1/confirm"
          exact
          element={<EnrollConfirmationPopup />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
