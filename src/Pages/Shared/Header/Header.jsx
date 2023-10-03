import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <img  className="flex justify-center mx-auto my-8" src={logo} alt="" />
            <p className="flex justify-center mx-auto text-xl">Journalism Without Fear or Favour</p>
            <p className="flex justify-center mx-auto text-xl mb-4">{moment().format("dddd, MMMM DD, YYYY")}</p>
        </div>
    );
};

export default Header;