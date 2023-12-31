import React, { useContext } from "react";
import Navbar from "../../shared/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { mainContext } from "../../provider/AuthProvider";

const Login = () => {
  const location=useLocation()
  console.log('dd',location);
  const navigate = useNavigate(); 
  const { signInUser } = useContext(mainContext);
  const handleLogin = (e) => {
    e.preventDefault();
    // console.log('a',e.target.email.value);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location.state?location.state:'/');
        e.target.reset();
      })
      .catch((error) => console.log(error.massage));

    // console.log(email,password,signInUser);
  };

  return (
    <div>
      <Navbar />

      <div>
        <div className="text-center my-12">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitati
          </p>
        </div>
        <form onSubmit={handleLogin} className="card-body w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center">
          create a new account{" "}
          <span className="font-bold">
            <Link to={"/register"}>register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
