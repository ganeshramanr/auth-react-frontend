import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import UnProtectedRoutes from "./UnProtectedRoutes";
import LoginPage from "./pages/LoginPage"
import UserRegistrationPage from "./pages/UserRegistrationPage"
import Dashboard from "./pages/Dashboard"
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UnProtectedRoutes />} >
          <Route path="register" element={<UserRegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route element={<ProtectedRoutes />} >
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
