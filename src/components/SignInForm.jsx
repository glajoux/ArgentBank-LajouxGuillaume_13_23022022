import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function SignInForm(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rememberMe, setRememberMe] = useState(false);

  const selectState = useSelector((state) => state.user);
  const dispatch = useDispatch();

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
    const userToPost = {
      email,
      password,
    };
    e.preventDefault();
    // dispatch fetchUsers avec userToPost en second param
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username" required onChange={handleChange} />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" onChange={handleChange} />
            <label for="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" onSubmit={handleSubmit}>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default SignInForm;
