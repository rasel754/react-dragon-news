import logo from '../../../assets/logo.png';
import moment from 'moment';


const Header = () => {
    return (
        <div className='text-center space-y-5'>
          <img className='mx-auto' src={logo} alt="" />
          <p>Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;