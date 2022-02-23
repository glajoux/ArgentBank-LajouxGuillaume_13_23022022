import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SignInForm from "../components/SignInForm";

function SignIn(props) {
  return (
    <>
      <Header />
      <SignInForm />
      <Footer />
    </>
  );
}

export default SignIn;
