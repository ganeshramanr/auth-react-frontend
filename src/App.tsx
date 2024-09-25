import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage"
import UserRegistrationPage from "./pages/UserRegistrationPage"
import Dashboard from "./pages/Dashboard"
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<UserRegistrationPage />} />
        <Route path="home" element={<Dashboard />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
