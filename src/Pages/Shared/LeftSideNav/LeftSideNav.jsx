import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold">All Category</h2>
            {
                categories.map(category => <Link className="block ml-4 text-xl" key={category.id} to={`/category/${category.id}`}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;