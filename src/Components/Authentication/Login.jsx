import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import auth from "../../firebase/firebase.config";





const Login = () => {

    const { signInUser } = useContext(AuthContext)
    const [LoginErr, setLoginErr] = useState('');

    // const [success, setSuccess] = useState('')

    const Auth = auth;
    console.log(Auth)
    const provider = new GoogleAuthProvider()


    const handleGoogleSignIn = () => {
        signInWithPopup(Auth, provider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .then(error =>{
            console.log('error', error.message)
        })
    }


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        setLoginErr('');


        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire('You have successfully logged in!')
            })
            .catch(error => {
                console.error(error)
                setLoginErr(error.message)
            })
    }
    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login Now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required autoComplete="current-email" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required autoComplete="current-password" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <input className="btn btn-error" type="Submit" value="Login" />
                        </form>
                        {
                            <button onClick={handleGoogleSignIn}>Login with Google</button>
                        }
                        {
                            LoginErr && <p className="text-red-600 pl-3">{LoginErr}</p>
                        }

                        <p className="p-4">New to our site? Please <Link to="/signUp">
                            <button className="btn btn-link">SignUp</button></Link>
                        </p>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;