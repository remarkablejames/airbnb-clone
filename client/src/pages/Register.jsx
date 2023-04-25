import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/test", {
        name,
        email,
        password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className=" -mt-8">
        <h1 className="text-4xl text-center mb-4">Register </h1>
        <form className="max-w-md mx-auto " onSubmit={(e) => registerUser(e)}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="youremail@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
