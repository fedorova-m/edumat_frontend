import { BrowserRouter, Routes, Route } from "react-router"

import "./App.css"
import { SubjectPage } from "./pages/SubjectsPage/subjectsPage"
import { LoginPage } from "./pages/LoginPage/loginPage"
import { RegPage } from "./pages/LoginPage/regPage"
import PageForSubject from "./pages/PageForSubject/PageForSubject"
import store from "./store/store"
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegPage />} />
          <Route path="/" element={<SubjectPage />} />
          <Route path="/subject/12" element={<PageForSubject />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
export default App
