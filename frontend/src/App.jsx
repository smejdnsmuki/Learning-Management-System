import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainWrapper from './layouts/MainWrapper'
import PrivateWrapper from './layouts/PrivateRoute'

import Register from "./views/auth/Register";
import Login from "../src/views/auth/Login";
import Logout from "./views/auth/Logout";
import ForgotPassword from "./views/auth/ForgotPassword";
import CreateNewPassword from "./views/auth/CreateNewPassword";

function App() {
  return (
    <Router>
      <MainWrapper>
        <Routes>
          <Route path="/register/" element={<Register />} />
          <Route path="/login/" element={<Login />} />
        </Routes>
      </MainWrapper>
    </Router>
  )
}

export default App
