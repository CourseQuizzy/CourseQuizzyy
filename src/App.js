import Home from "./pages/HomePage/Home";
import Catalogue from "./pages/CourseCatalogue/CourseCatalogue";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseHomePage from "./pages/CourseHomePage/CourseHomePage";
import EnrollConfirmationPopup from "./pages/CourseHomePage/EnrollConfirmationPopup";
import PopUpContent from "./pages/PopUpPage/FirstPage";
import SecContent from "./pages/PopUpPage/SecPage";

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
        <Route path="/popcontent" exact element={<PopUpContent />} />
        <Route path="/seccontent" exact element={<SecContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
