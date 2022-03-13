import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/actions/actionUser";
import { useNavigate } from "react-router-dom";
import { selectUsers } from "../redux/selectors/selectors";

function SignInForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const state = useSelector(selectUsers);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.id === "remember-me") {
      setRememberMe(!rememberMe);
    }
    if (e.target.id === "password") {
      setPassword(e.target.value);
    }
    if (e.target.id === "username") {
      setEmail(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    console.log(state);
    const userToPost = {
      email,
      password,
    };
    e.preventDefault();
    console.log(userToPost);
    dispatch(fetchUsers(userToPost));
    if (rememberMe) {
      localStorage.setItem("localLogin", email);
      localStorage.setItem("localPassword", password);
    }
    console.log(state);
    navigate("/user");
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label>Username</label>
            <input type="text" id="username" required onChange={handleChange} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" onChange={handleChange} />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default SignInForm;
