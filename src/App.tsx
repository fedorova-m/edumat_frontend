import { BrowserRouter, Routes, Route } from "react-router"

import "./App.css"
import { SubjectPage } from "./pages/SubjectsPage/subjectsPage"
import { LoginPage } from "./pages/LoginPage/loginPage"
import { RegPage } from "./pages/LoginPage/regPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registration" element={<RegPage />} />
        <Route path="/account" element={<SubjectPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
