import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className=" -mt-8">
        <h1 className="text-4xl text-center mb-4">Register </h1>
        <form className="max-w-md mx-auto ">
          <input type="text" name="name" id="name" placeholder="John Doe" />
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
          <div className="text-center py-2 text-gray-500">
            Already a member?{" "}
            <Link to={"/login"} className="underline">
              Login
            </Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
