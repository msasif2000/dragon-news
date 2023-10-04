import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Breaking from "./Breaking";
import News from "./News";


const Home = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data));
    }, [])
    return (
        <div>
            <Header></Header>
            <Breaking></Breaking>
            <Navbar></Navbar>
            <div className="grid  grid-cols-1 lg:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                <h2 className="text-xl font-bold">Dragon News Home</h2>
                    {
                        news.map(info => <News key={news._id} info={info}></News>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;