import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Breaking = () => {
    return (
        <div className="flex gap-4 mb-4 bg-slate-200 p-2 w-full">
            <button className="btn text-white bg-red-400 font-bold text-xl">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link to="/">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as.......</Link>
                <Link to="/">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as.......</Link>
                <Link to="/">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as.......</Link>
            </Marquee>
        </div>
    );
};

export default Breaking;