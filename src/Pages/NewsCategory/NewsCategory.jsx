import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import { AiOutlineArrowLeft } from "react-icons/ai";


const NewsCategory = () => {
    const news = useLoaderData();
    const { category_id } = useParams();
    console.log(category_id);
    const categoryNews = news.filter(categoryNews => categoryNews.category_id == category_id)
    console.log(categoryNews);
    return (
        <div className="mx-auto">
            <Header></Header>
            {
                categoryNews.map(categoryNews => <div key={categoryNews._id} className="border mx-24 mt-4 p-4 space-y-4">
                    <img src={categoryNews.image_url} alt="" className="w-full" />
                    <h3 className="font-bold text-xl">{categoryNews.title}</h3>
                    <p>{categoryNews.details}</p>
                </div>)
            }
            <div className="flex justify-center m-8">
                <button><Link to="/" className="bg-[#D72050] flex items-center gap-2 text-white px-4 py-2"><AiOutlineArrowLeft className="font-bold "></AiOutlineArrowLeft>Back to home</Link></button>
            </div>
        </div>
    );
};

export default NewsCategory;