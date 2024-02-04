import React, { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const Register = () => {
    const {signUp} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
  
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[error,setError] = useState("")


    const handleRegister = (e) => {

        e.preventDefault();
        const form = e.target;
        const getPassword = form.Password.value;
        const getEmail = form.Email.value;
        const getName = form.Name.value;
        const getPhoto = form.Photourl.value;
    
        setEmail(getEmail)
        setPassword(getPassword)
    
        if(password.length < 6){
            setError("Password must be 6 characters long")
            return;
        }
    
    
                
            signUp(email,password)
            .then(result => {
              navigate(location?.state ? location?.state : "/");
              console.log(result.user)
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'You have been registered!',
                showConfirmButton: false,
                timer: 1500
              })
    
              updateProfile(result.user,{
                displayName:getName,
                photoURL:getPhoto
              })
            })
            .then(() => console.log("profile updated"))
            .catch()
            setError("")  
    
      }
    return (
        <div>
        <Helmet>
    <title>TrailTango | Register</title>
  </Helmet>
  <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Register now!</h1>
        <p className="py-6">
        We are all on a journey through life, doing our best to weather the storms and to enjoy precious moments with family and friends. Whether you’re taking a spiritual journey or about to undertake a physical trip, there are many adventure quotes to inspire you. 
        </p>
        <br />
        <p className="text-lg font-bold">
            Already have an account?
        </p><br />
        <Link to={"/login"}>
        <button className="btn btn-secondary">Login</button>
        </Link>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="Name"
              className="input input-bordered"
              // required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              type="text"
              placeholder="PhotoURL"
              name="Photourl"
              className="input input-bordered"
              // required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="Email"
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
              type="password"
              placeholder="password"
              name="Password"
              className="input input-bordered"
              required
            />
            <label className="label">

            </label>
          </div>
          <div className="form-control mt-6">
            <button type='submit' className="btn btn-primary">Register</button>
            
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;