import { Link, NavLink } from "react-router-dom";
import userImg from '../../../assets/user.png'
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
    const { user, userLogout } = useContext(AuthContext);
    const handleLogout = () =>{
        userLogout()
        .then(result =>{
            console.log(result);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>

    </>
    return (
        <div className="md:pb-24">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className=" lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 w-52">
                            {navLinks}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                        <h2 className="font-bold text-pink-700">{user.email}</h2>
                        :
                        ''
                    }
                    <label tabIndex={0} className=" btn btn-ghost btn-circle avatar">
                        <div className="w-8 rounded-full">
                            <img src={userImg} />
                        </div>
                    </label>
                    {
                        user ?
                            <button onClick={handleLogout} className="btn btn-sm bg-black text-white">Log out</button>
                            :
                            <Link to="/login">
                                <button className="btn btn-sm bg-black text-white">Login</button>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;