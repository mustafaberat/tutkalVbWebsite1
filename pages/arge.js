import React from 'react';

import MyHead from "../components/MyHead"
import Header from "../components/Header"
import Arge from "../components/Arge"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <div className="container">
            <MyHead />
            <Header />
            <Arge />
            <Footer />
        </div>
    )
}
