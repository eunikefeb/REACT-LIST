import React from "react";
import { Routes, Route } from "react-router-dom";

import Beranda from "./pages/Beranda";
import TentangSaya from "./pages/TentangSaya";
import Karya from "./pages/Karya";
import Kontak from "./pages/Kontak";
import Gallery from "./pages/Gallery";

const Utama = () => (
    <Routes>
        <Route path="/home" element={<Beranda/>} />
        <Route path="/about" element={<TentangSaya/>} />
        <Route path="/karya" element={<Karya/>} />
        <Route path="/contact" element={<Kontak/>} />
        <Route path="/gallery" element={<Gallery/>} />
    </Routes>
)

export default Utama;