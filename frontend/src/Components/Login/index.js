import React from "react";
import axios from "axios";

const Index = () => {
  let [details, setDetails] = React.useState({ email: "", password: "" });
  const handleSubmit = async e => {
    e.preventDefault();
    let config = {
      headers: { "Content-Type": "application/json" }
    };
    let body = JSON.stringify(details);
    try {
      let token = await axios.post(
        "http://localhost:5000/api/auth",
        body,
        config
      );
      console.log(token);
    } catch (err) {
      console.log("error", err.message);
    }
  };
  const handleChange = e => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Index;
