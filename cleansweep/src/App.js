import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios'

//components
import Leaderboards from "./Components/LeaderBoards";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Chores from './Components/Chores';
import Cart from './/Components/Cart';


const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/leaderboards" element={<Leaderboards />} />
      <Route path="/chores/" element={<Chores />} />
      <Route path="/cart/" element={<Cart />} />
    </Routes>
  </BrowserRouter>
);




export default App;
