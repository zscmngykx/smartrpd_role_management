import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import RoleManagement from './pages/RoleManagement';

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/roles"
          element={isLoggedIn ? <RoleManagement /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
