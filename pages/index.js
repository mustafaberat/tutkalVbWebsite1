import React from 'react';

import MyHead from "../components/MyHead"
import Header from "../components/Header"
import CardContainer from "../components/Cards/CardContainer"
import InfoCardBig from "../components/Cards/InfoCardBig"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="container">
      <MyHead />
      <Header />
      <CardContainer />
      <InfoCardBig />
      <CardContainer />
      <Footer />
    </div>
  )
}
