import PropTypes from 'prop-types';
import { BiBookmark, BiShareAlt } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { Link } from 'react-router-dom';
import ReactStarsRating from 'react-awesome-stars-rating';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const News = ({ info }) => {
    const {user} = useContext(AuthContext);
    const { _id, image_url, details, author, title, total_view, rating } = info;

    return (
        <div className="border my-8 rounded">
            <div className='flex items-center justify-between p-4 bg-slate-200'>
                <div className='flex gap-4 items-center'>
                    <img src={author.img} alt="" className='h-10 rounded-full' />
                    <div>
                        <h2 className='font-bold text-xl'>{author.name}</h2>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className='flex text-xl gap-4'>
                    <BiBookmark></BiBookmark>
                    <BiShareAlt></BiShareAlt>
                </div>
            </div>

            <div className='p-4'>
                <h2 className='text-xl font-bold my-2'>{title}</h2>
                <img src={image_url} alt="" className='py-2' />
                <p className='py-2'>{details.slice(0, 200)}...</p>
                {
                    user? 
                    <Link to={`/detail/${_id}`} className='text-red-500 font-bold italic pb-4 border-b-2  block'>Read More</Link>
                    :
                    <Link to="/login" className='text-red-500 font-bold italic pb-4 border-b-2  block'>Read More</Link>
                }
            </div>

            <div className='flex items-center justify-between p-4'>
                <div className='flex items-center gap-3 text-xl'>
                    <ReactStarsRating value={`${rating.number}`} primaryColor="rgba(255, 140, 71, 1)" isEdit={false} size={28} className="flex"/>
                    <p>{rating.number}</p>
                </div>
                <div className='flex gap-3 text-xl items-center'>
                    <FiEye></FiEye>
                    <p>{total_view}</p>
                </div>
            </div>
        </div>
    );
};

News.propTypes = {
    info: PropTypes.object.isRequired, // Use propTypes, and mark it as required if 'info' is required
};

export default News;
