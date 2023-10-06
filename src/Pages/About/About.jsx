
import Navbar from "../Shared/Navbar/Navbar";


const About = () => {
    return (
        <div className="text-center lg:p-20 p-8">
            <Navbar></Navbar>
            <p className="lg:px-32"><span className="text-2xl italic font-extrabold text-orange-600">Welcome</span> to <span className="font-bold text-2xl">Dragon News</span>, your trusted source for the latest and most comprehensive news coverage. At Dragon News, we are committed to delivering accurate, unbiased, and timely news stories that matter most to you. Our dedicated team of journalists and editors works tirelessly to bring you the latest updates on a wide range of topics, including politics, business, technology, entertainment, sports, and more. With a focus on integrity and journalistic excellence, we aim to keep you informed and engaged in the rapidly evolving world around us. Thank you for choosing Dragon News as your go-to source for news, and we look forward to serving you with our commitment to quality journalism.</p>
        </div>
    );
};

export default About;