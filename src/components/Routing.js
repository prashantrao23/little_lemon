import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";
import About from "./About";
import Menu from "./Menu";
import BookingPage from "./BookingPage";
import Order from "./Order";
import Confirmation from "./Confirmation";
import Login from "./Login";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />

            <Route path="/reservations" element={<BookingPage />} />

            <Route path="/order" element={<Order />} />
            <Route path="/login" element={<Login />} />

            <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
    );
}