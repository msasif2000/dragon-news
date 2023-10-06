import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Breaking from "./Breaking";
import News from "./News";


const Home = () => {
    const [news, setNews] = useState([]);
    const [dataLength, setDataLength] = useState(5);

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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-xl font-bold">Dragon News Home</h2>
                    {
                        news.slice(0, dataLength).map(info => <News key={news._id} info={info}></News>)
                    }
                    <div className={dataLength >= news.length && 'hidden'}>
                        <button onClick={() => setDataLength(news.length)} className="btn btn-sm bg-[#D72050] text-white m-4 flex mx-auto">See All</button>
                    </div> 
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;