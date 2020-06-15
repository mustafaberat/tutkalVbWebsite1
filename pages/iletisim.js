import React from 'react';

import MyHead from "../components/MyHead"
import Header from "../components/Header"
import Iletisim from "../components/Iletisim"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <div className="container">
            <MyHead />
            <Header />
            <Iletisim />
            <Footer />
        </div>
    )
}
