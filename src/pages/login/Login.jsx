import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../authprovider/Authprovider";

const Login = () => {

    const { loginUser } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        //loginUser
        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                // use navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error?.code)
            })


    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="md:w-3/4 lg:w-1/2 mx-auto text-center border">
                <h1 className="text-5xl font-bold mt-3">Login now!</h1>
                <hr />
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="mb-2">Dont’t Have An Account ? <Link className="text-green-900 font-medium" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;