import { BrowserRouter, Routes, Route } from "react-router";

import "./App.css";
import { SubjectPage } from "./pages/SubjectsPage/subjectsPage";
import { LoginPage } from "./pages/LoginPage/loginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<SubjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
