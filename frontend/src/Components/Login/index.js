import React from "react";

const index = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default index;
