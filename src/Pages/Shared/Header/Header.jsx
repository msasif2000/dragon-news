import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <img  className="mx-auto lg:w-1/2 w-full  my-8 " src={logo} alt="" />
            <p className="text-center text-2xl">Journalism Without Fear or Favour</p>
            <p className="text-center text-xl mb-4">{moment().format("dddd, MMMM DD, YYYY")}</p>
        </div>
    );
};

export default Header;