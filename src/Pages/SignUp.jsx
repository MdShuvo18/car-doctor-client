import { Link } from "react-router-dom";
import img from "../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then((res) => {
                const user = res.user
                console.log(user)

            }

            )
            .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">

                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <h1 className="text-4xl text-center font-bold">Sign Up</h1>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="email" className="input input-bordered" required />
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
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>

                    <p className="my-4 text-center"> Alreadt Have an Account :
                        <Link className="text-orange-700 font-bold" to='/login'>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;