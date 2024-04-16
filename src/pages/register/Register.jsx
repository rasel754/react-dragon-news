import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {

  const {createUser}=useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault(); 
        console.log(e.currentTarget);
        const form =new FormData(e.currentTarget);

        const name=form.get('name');
        const photo=form.get('photo');
        const email=form.get('email');
        const password=form.get('password');

        createUser(email, password)
        .then(result => {
           console.log(result.user);
         })
        .catch(error => {
           console.error(error);
 
        })

        console.log(name , photo , email , password);

    }

    return (
        <div>
            <Navbar></Navbar>
      <div>
        <h1 className="text-3xl text-center mt-5">Register your account</h1>
        <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Submit Your photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo URL"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
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
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center "> already have an account ? please <span className="text-blue-700 font-semibold"><Link to="/login">Login</Link></span> </p>
      </div>
        </div>
    );
};

export default Register;