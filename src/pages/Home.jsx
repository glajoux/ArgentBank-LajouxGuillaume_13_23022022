import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Banner from "../components/Banner";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { fetchUsers } from "../redux/actions/actionUser";

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
