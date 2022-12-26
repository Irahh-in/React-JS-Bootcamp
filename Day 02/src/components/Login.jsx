import React from "react";

function Login() {
  function Handler(e) {
    e.preventDefault(); // Prevents the page from reloading
    var email = e.target.email.value;
    var password = e.target.password.value;
    if (email === "ayushmaster100@gmail.com") {
      if (password === "123456") {
        alert("Login Successfull");
      } else {
        alert("Wrong Password");
      }
    } else {
      alert("Wrong Email");
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={Handler}>
        <div>
          <label>Email</label>
          <input type="email" name="email" id="email" />
        </div>{" "}
        <div>
          <label>Password</label>
          <input type="password" name="password" id="Password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
