import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Banner from "../components/Banner";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { fetchUsers } from "../redux/actions/actionUser";

function Home(props) {
  const email = localStorage.getItem("localLogin");
  const password = localStorage.getItem("localPassword");

  const dispatch = useDispatch();

  console.log(email, password);

  // Permet de vérifier si l'utilisateur est déjà enregistré
  useEffect(() => {
    if (email) {
      const userToPost = {
        email,
        password,
      };
      dispatch(fetchUsers(userToPost));
    }
  });
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
