import { FaGoogle, FaGithub, FaFacebook, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const RightSideNav = () => {
    const { googleLogin } = useContext(AuthContext);
    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div>
            <div className="text-2xl font-bold ml-2 mt-2">Login With</div>
            <div className="flex flex-col gap-4 mt-2 mb-12">
                <button onClick={handleGoogleLogin} className="btn btn-outline mx-2">
                    <FaGoogle className="text-xl text-blue-500"></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline mx-2">
                    <FaGithub className="text-xl"></FaGithub>
                    Login with Github
                </button>
            </div>


            <div className="text-2xl font-bold ml-2 mt-2">Find Us On</div>
            <div className="my-2 pb-8">
                <a href="https://www.facebook.com/" className="flex items-center gap-3 mx-2 border rounded-t-lg p-4">
                    <FaFacebook className="text-xl text-blue-500"></FaFacebook>
                    Facebook
                </a>
                <a href="https://twitter.com/" className="flex items-center gap-3 mx-2 border-x p-4">
                    <FaTwitterSquare className="text-xl text-blue-500"></FaTwitterSquare>
                    Twitter
                </a>
                <a href="https://www.instagram.com/" className="flex items-center gap-3 mx-2 border rounded-b-lg p-4">
                    <FaInstagramSquare className="text-xl text-red-400"></FaInstagramSquare>
                    Instagram
                </a>
            </div>

            <div className="bg-slate-200 rounded">
                <div className="text-2xl font-bold ml-2 mt-4 pt-2">Q-Zone</div>
                <img src={qZone1} alt="qZone1" className="py-4 px-2 w-full" />
                <img src={qZone2} alt="qZone2" className="py-4 px-2 w-full" />
                <img src={qZone3} alt="qZone3" className="py-4 px-2 w-full" />
            </div>
        </div>
    );
};

export default RightSideNav;