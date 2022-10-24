import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Switch } from "react-router-dom";
import axios from "axios";

//components
import LeaderBoards from "./Components/Pages/LeaderBoards";
import Header from "./Components/Header";
import Chores from "./Components/Pages/Chores";
// import { index } from "./Components/Pages/MyChores";
import Login from "./Components/Pages/Login";
import { CartProvider } from "./hooks/useCart";
import MyChores from './Components/Pages/MyChores';
import Register from "./Components/Pages/Register";

// hooks
import useAuth, { AuthProvider } from "./hooks/useAuth";

const AuthenticatedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  return children;
};

const Router = () => (
  <Routes>
    <Route
      path="/"
      element={
        <AuthenticatedRoute>
            <LeaderBoards />
        </AuthenticatedRoute>
      }
    />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route
      path="/leaderboards"
      element={
        <AuthenticatedRoute>
          <LeaderBoards />
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
    <Route
      path="/mychores"
      element={
        <AuthenticatedRoute>
          <index />
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
