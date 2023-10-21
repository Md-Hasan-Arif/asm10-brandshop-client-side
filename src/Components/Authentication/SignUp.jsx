
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";



const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const [registerErr, setRegisterErr] = useState('');
    const [success, setSuccess] = useState('')



    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password, name)

        setRegisterErr('');
        setSuccess('');
        if (password.length < 6) {
            setRegisterErr('password should be at least 6 characters or longer')
            return;
        }
        else if(!/[A-z]/.test(password)){
            setRegisterErr('Your password should have at least one capital letter')
            return;
        }
        else if(!/[>>!#$%&*?<< ]/.test(password)){
            setRegisterErr('Your password should have at least one special character')
            return;
        }



        // // create user in firebase
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire('You registration complete successfully !')
            })
            .catch(error => {
                console.error(error);
                setRegisterErr(error.message)
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">signUp now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                        </div>
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
                        <input className="btn btn-secondary" type="Submit" value="SignUp" />
                    </form>
                    {
                        registerErr && <p className="text-red-600">{registerErr}</p>
                    }
                    {
                        success && <p className="text-green-600 pl-4">{success}</p>
                    }
                    <p className="p-4">Already have an account? Please <Link to="/login">
                        <button className="btn btn-link">Login</button></Link>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default SignUp;