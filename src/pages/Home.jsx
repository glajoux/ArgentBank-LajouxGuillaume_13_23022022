import React from "react";
import Banner from "../components/Banner";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home(props) {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
