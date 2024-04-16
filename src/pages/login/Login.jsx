import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const {signIn}=useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault(); 
        console.log(e.currentTarget);
        const form =new FormData(e.currentTarget);

        
        const email=form.get('email');
        const password=form.get('password');

        signIn(email, password)
        .then(result => { 
          console.log(result.user);

          navigate (location?.state ? location.state : '/');

    })
        .catch(error => {
          console.error(error);
        });
        
        console.log(email, password);

    }
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h1 className="text-3xl text-center mt-5">Login your account</h1>
        <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
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
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center ">do not have a account ? please <span className="text-red-700 font-semibold"><Link to="/register">Register</Link></span> </p>
      </div>
    </div>
  );
};

export default Login;
