<<<<<<< HEAD
import "./App.css"
<<<<<<< HEAD
// import SubjectPage from "./pages/SubjectsPage/subjectsPage"
// import { LoginPage } from "./pages/LoginPage/loginPage"
import AddSubject from './components/addsubject/addsubject'
=======
import SubjectPage from "./pages/SubjectsPage/subjectsPage"
import { LoginPage } from "./pages/LoginPage/loginPage"
>>>>>>> 0bda4405d4e06ab15cd807f4997b5481700228db

function App() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      {/* <SubjectPage /> */}
      <AddSubject />
    </div>
  )
=======
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
>>>>>>> 8496d883b4db84190b0b99a84bafdaf9ec258bdc
}

export default App;
