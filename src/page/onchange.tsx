import React, { useState } from "react";

const Onchange = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (!email) {
      setEmailError("email not found");
    } else {
      setEmailError("");
    }

    console.log({
      email: email,
      password: password,
    });
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          value={email}
          onChange={handleChangeEmail}
          placeholder="Enter your email"
          className={
            emailError === ""
              ? "border-4 border-indigo-500"
              : "border-4 border-red-500"
          }
        />

        <small>{emailError}</small>
        <input
          value={password}
          onChange={handlePassword}
          placeholder="Enter your password"
          className="border-2"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Onchange;
