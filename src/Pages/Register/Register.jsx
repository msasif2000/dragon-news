import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const handleRegister = (e) => {

        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, photo, email, password);
        createUser(email, password)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center  ">
                        <h1 className="text-5xl font-bold">Register your account!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                    {/* data:image/jpeg;base64,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 */}
                                </label>
                                <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email Address</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Accept <Link to="/terms&condition" className="font-bold">Term & Conditions</Link></span>
                                    <input type="checkbox" className="checkbox checkbox-primary" required />
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <label className="label">
                                <p>Already Have An Account? <Link to="/login" className="label-text-alt link link-hover text-red-600 font-bold text-xl underline"> Login</Link> </p>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;