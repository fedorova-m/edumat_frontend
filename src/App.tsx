import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";

import { SubjectPage } from "./pages/SubjectsPage/subjectsPage";
import { LoginPage } from "./pages/LoginPage/loginPage";
import  PageForSubject from "./pages/PageForSubject/PageForSubject"; // Новый импорт

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<SubjectPage />} />
        <Route path="/subject" element={<PageForSubject />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;