import React from "react";
import Account from "../components/Account";
import Footer from "../components/Footer";
import Header from "../components/Header";

function User(props) {
  const titleBankChecking = "Argent Bank Checking (x8349)";
  const titleBankSavings = "Argent Bank Savings (x6712)";
  const titleBankCreditCard = "Argent Bank Credit Card (x8349)";

  const amountBankCheking = "2,082.79";
  const amountBankSavings = "10,928.42";
  const amountBankCreditCard = "184.30";

  const descriptionBankChecking = "Available Balance";
  const descriptionBankSavings = "Available Balance";
  const descriptionBankCreditCard = "Current Balance";

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
          title={titleBankChecking}
          amount={amountBankCheking}
          description={descriptionBankChecking}
        />
        <Account
          title={titleBankSavings}
          amount={amountBankSavings}
          description={descriptionBankSavings}
        />
        <Account
          title={titleBankCreditCard}
          amount={amountBankCreditCard}
          description={descriptionBankCreditCard}
        />
      </main>
      <Footer />
    </>
  );
}

export default User;
