import React, { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Login = () => {
    const { googleSignIn, signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleGoogle = () => { 
      googleSignIn()
      .then(result =>{
        navigate(location?.state ? location?.state : "/");
        console.log(result.user)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'You have logged in!',
          showConfirmButton: false,
          timer: 1500
        })
      })
    }
  
    const handleSignIn = (e) => {
      e.preventDefault();
      const form = e.target;
      const getPassword = form.Password.value;
      const getEmail = form.Email.value;
    
      if(getEmail,getPassword){
        signIn(getEmail,getPassword)
        .then(result => {
          console.log(result.user)
        })
        .catch(err => {
          setError(err.message)
        })
      }
    } 
    return (
        <div>
        <Helmet>
    <title>TrailTango | Login</title>
  </Helmet>
  <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">
        We are all on a journey through life, doing our best to weather the storms and to enjoy precious moments with family and friends. Whether you’re taking a spiritual journey or about to undertake a physical trip, there are many adventure quotes to inspire you. 
        </p>
        <br />
        <p className="text-lg font-bold">Don't have an account?</p>
        <br />
        <Link to={"/register"}>
          <button className="btn btn-secondary">Register</button>
        </Link>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSignIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            name="Email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
            name="Password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label"></label>
          </div>
          <div className="form-control mt-6 gap-y-3">
            <button type='submit' className="btn btn-primary">Login</button>
            <button onClick={handleGoogle} className="btn btn-primary">Google Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;