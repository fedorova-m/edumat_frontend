<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";

import { SubjectPage } from "./pages/SubjectsPage/subjectsPage";
import { LoginPage } from "./pages/LoginPage/loginPage";
import  PageForSubject from "./pages/PageForSubject/PageForSubject"; // Новый импорт
=======
import { BrowserRouter, Routes, Route } from "react-router"

import "./App.css"
import { SubjectPage } from "./pages/SubjectsPage/subjectsPage"
import { LoginPage } from "./pages/LoginPage/loginPage"
import { RegPage } from "./pages/LoginPage/regPage"
>>>>>>> 49d363489249d9a022c9543cedc64c967b5de177

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<SubjectPage />} />
        <Route path="/subject" element={<PageForSubject />} /> 
=======
        <Route path="/" element={<LoginPage />} />
        <Route path="/registration" element={<RegPage />} />
        <Route path="/account" element={<SubjectPage />} />
>>>>>>> 49d363489249d9a022c9543cedc64c967b5de177
      </Routes>
    </BrowserRouter>
  )
}

<<<<<<< HEAD
export default App;
=======
export default App
>>>>>>> 49d363489249d9a022c9543cedc64c967b5de177
