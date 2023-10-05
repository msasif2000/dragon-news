import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="md:container mx-auto font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;