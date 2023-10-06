import { AiOutlineArrowLeft } from "react-icons/ai";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { Link, useLoaderData, useParams } from "react-router-dom";

const NewsDetails = () => {
    const news = useLoaderData();
    const { _id } = useParams();
    console.log(news);
    const currentNews = news.find(currentNews => currentNews._id == _id)



    return (
        <div className="mx-auto">
            <Header></Header>
            <div className="lg:flex gap-6 flex-row-reverse">
                <div>
                    <RightSideNav></RightSideNav>
                </div>
                <div className="lg:w-2/3">
                    <h3 className="text-2xl font-bold my-4">Dragon News</h3>
                    <div className="border p-4 space-y-4">
                        <img src={currentNews.image_url} alt="" className="w-full"/>
                        <h3 className="font-bold text-xl">{currentNews.title}</h3>
                        <p>{currentNews.details}</p>
                        <button><Link to="/" className="bg-[#D72050] flex items-center gap-2 text-white px-4 py-2"><AiOutlineArrowLeft className="font-bold "></AiOutlineArrowLeft>All news in this category</Link></button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default NewsDetails; 