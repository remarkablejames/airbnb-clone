import React from "react";
const Login = () => {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className=" -mt-8">
        <h1 className="text-4xl text-center mb-4">Login </h1>
        <form className="max-w-md mx-auto ">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="youremail@example.com"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <button className="primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
