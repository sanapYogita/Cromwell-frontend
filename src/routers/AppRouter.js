import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import Registration from "../components/Registration";


export default function AppRouter() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
