import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../authprovider/Authprovider";
import { useState } from "react";

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [emailError, setEmailError] = useState('')

    const handleRegister = (e) => {
        e.preventDefault()
        const from = new FormData(e.currentTarget)
        const name = from.get('name');
        const photo = from.get('photo');
        const email = from.get('email');
        const password = from.get('password');
        console.log(name, photo, email, password)

        setEmailError('')

        //createUser
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            setEmailError(error?.code)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="md:w-3/4 lg:w-1/2 mx-auto border">
                <h1 className="text-5xl font-bold mt-3 text-center">Registration now!</h1>
                <hr className="mt-4" />
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="enter your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    {
                        emailError && <p className="text-red-700">{emailError}</p>
                    }
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="mb-2">Allready have An Account ? <Link className="text-green-900 font-medium" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;