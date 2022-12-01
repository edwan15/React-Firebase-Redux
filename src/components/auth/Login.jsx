import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaGooglePlusG} from "react-icons/fa"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const AuthWithGoogle = () => {};

  const handleSubmit = () => {};

  return (
    <div className="h-screen   bg-[url('https://pablomoratinos.es/wp-content/uploads/2020/01/clean-login-wordpress-2048x1338.jpg')] bg-cover  bg-center bg-no-repeat  ">
      <section>
        <div className="flex flex-cols-2 items-center justify-center ">
          <div className="max-w-lg max-h-[200px flex items-end justify-end ">
            {/* <img src={login} alt="login" className=" h-[465px] w-[500px] " /> */}
          </div>
          <div className="p-2  bottom-28 max-w-xl mt-20  ">
            <div className="p-4  border-solid border-2  rounded-lg shadow-lg my-10 bg-cardOverlay">
              <form action="" className="flex flex-col" onSubmit={handleSubmit}>
                <p className="text-center text-2xl text-red-500 font-bold">
                  Login
                </p>
                <input
                  type="text"
                  placeholder="  Email "
                  className="border-solid border-2 rounded-md mt-3  "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="  Password"
                  className="border-solid border-2 rounded-md mt-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  className="p-1 px-2 bg-blue-500 rounded-md mt-2 text-white"
                  type="submit"
                >
                  Enviar
                </button>
                <Link to="/reset">
                  <p className="mt-2 cursor-pointer">Reset Password</p>
                </Link>
                <p className="text-center ">--or--</p>
                <button
                  className="p-1 px-2 bg-orange-500 rounded-md mt-2 text-white flex items-center justify-center"
                  type="submit"
                  onClick={AuthWithGoogle}
                >
                  <FaGooglePlusG /> Login With Google
                </button>
                <p className="text-center mt-2">
                  Don't have an account?
                  <Link to="/register">
                    <span className="font-bold cursor-pointerjustify-center">
                      Register
                    </span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
