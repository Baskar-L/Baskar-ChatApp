 // src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import AppLayout from "./layouts/AppLayout";

function App() {
  const [authUser] = useAuth();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={authUser ? <AppLayout /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <Signup /> : <Navigate to="/" />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
