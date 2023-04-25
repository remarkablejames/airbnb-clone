import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", {
        email,
        password,
      });
      // navigate programmatically to the index page
      window.location.href = "/";
    } catch (error) {
      alert("User login failed");
      console.log(error);
    }
  };

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className=" -mt-8">
        <h1 className="text-4xl text-center mb-4">Login </h1>
        <form className="max-w-md mx-auto " onSubmit={(e) => loginUser(e)}>
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
            Don't have an account?{" "}
            <Link to={"/register"} className="underline">
              Register
            </Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
