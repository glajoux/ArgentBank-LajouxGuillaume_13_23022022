import React from "react";
import Account from "../components/Account";
import Footer from "../components/Footer";
import Header from "../components/Header";

function User(props) {
  const titleBank = {
    checking: "Argent Bank Checking (x8349)",
    savings: "Argent Bank Savings (x6712)",
    creditCard: "Argent Bank Credit Card (x8349)",
  };

  const amoutBank = {
    checking: "2,082.79",
    savings: "10,928.42",
    creditCard: "184.30",
  };

  const descriptionBank = {
    checking: "Available Balance",
    savings: "Available Balance",
    creditCard: "Current Balance",
  };

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title={titleBank.checking}
          amount={amoutBank.checking}
          description={descriptionBank.checking}
        />
        <Account
          title={titleBank.savings}
          amount={amoutBank.savings}
          description={descriptionBank.savings}
        />
        <Account
          title={titleBank.creditCard}
          amount={amoutBank.creditCard}
          description={descriptionBank.creditCard}
        />
      </main>
      <Footer />
    </>
  );
}

export default User;
