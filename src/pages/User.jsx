import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { selectUsers } from "../redux/selectors/selectors";

function User(props) {
  const state = useSelector(selectUsers);
  const navigate = useNavigate();
  console.log(state);

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

  if (state.error !== null) {
    navigate("/");
  }

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {`${state.data.firstName} ${state.data.lastName}`}
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
