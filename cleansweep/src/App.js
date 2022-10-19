import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

//components
import Leaderboards from "./Components/LeaderBoards";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Chores from "./Components/Chores";
import useAuth, { AuthProvider } from "./hooks/useAuth";
import Login from "./Components/Pages/Login";
import { CartProvider } from "./hooks/useCart";

const AuthenticatedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  return children;
};

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route
      path="/leaderboards"
      element={
        <AuthenticatedRoute>
          <Leaderboards />
        </AuthenticatedRoute>
      }
    />
    <Route
      path="/chores"
      element={
        <AuthenticatedRoute>
          <Chores />
        </AuthenticatedRoute>
      }
    />
  </Routes>
);
const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
      <Header />
      <Router />
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
