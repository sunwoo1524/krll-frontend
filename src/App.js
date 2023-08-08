import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Nav from "./components/Nav";

function Layout() {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    )
}

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    );
}

export default App;