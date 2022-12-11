import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../redux/firebase/config";


const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault()
    if(password !== confirmPassword){
      toast.error("password no coincide")
    }
     setIsLoading(true);

     createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
         // Signed in
         const user = userCredential.user;
         toast.success("registro con exito")
         setIsLoading(false)
         navigate("/")
         console.log(user)
       })
       .catch((error) => {
         toast.error(error.message)
         setIsLoading(false)
       });

  }

  return (
    <div className="h-screen sticky  bg-[url('https://pablomoratinos.es/wp-content/uploads/2020/01/clean-login-wordpress-2048x1338.jpg')] bg-cover  bg-center bg-no-repeat  ">
      <ToastContainer />
      {isLoading && <Loader />}
      <section className="sticky">
        <div className=" items-center justify-center">
          <div className="p-2  bottom-28 w-275  ">
            <div className="p-4 border-solid border-2  rounded-lg shadow-lg my-10">
              <form action="" className="flex flex-col" onSubmit={handleSubmit}>
                <p className="text-center text-2xl text-red-500 font-bold">
                  Register
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
                <input
                  type="password"
                  placeholder="  Confirm-Password"
                  className="border-solid border-2 rounded-md mt-2"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="p-1 px-2 bg-blue-500 rounded-md mt-2 text-white"
                >
                  Register
                </button>

                <p className="text-center mt-2">
                  Already an account?
                  <Link to="/">
                    <span className="font-bold cursor-pointer justify-center">
                      Login
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

export default Register;
