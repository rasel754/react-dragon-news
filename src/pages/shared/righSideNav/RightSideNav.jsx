import { FaGoogle, FaGithub, FaFacebook,FaTwitter ,FaInstagram  } from "react-icons/fa";
import Qzone1 from '../../../assets/qZone1.png'
import Qzone2 from '../../../assets/qZone2.png'
import Qzone3 from '../../../assets/qZone3.png'




const RightSideNav = () => {
  return (
    <div>
      <div className="p-3 bg-[#F3F3F3] space-y-3 mb-6">
        <h1 className="font-bold">Login with</h1>
        <button className="btn btn-outline btn-info w-full">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>

      <div className="p-3 bg-[#F3F3F3] space-y-3 mb-6">
        <h1 className="font-bold">Find Us On</h1>
        <a
          className="flex items-center text-lg border rounded-t-lg p-4"
          href=""
        >
          <FaFacebook></FaFacebook>
          <span className="ml-2">Facebook</span>
        </a>
        <a
          className="flex items-center text-lg border rounded-t-lg p-4"
          href=""
        >
            <FaTwitter></FaTwitter>
          <span className="ml-2">Twitter</span>
        </a>
        <a
          className="flex items-center text-lg border rounded-t-lg p-4"
          href=""
        >
            <FaInstagram></FaInstagram>
          <span className="ml-2">Instagram</span>
        </a>
      </div>
      <div className="p-3 bg-[#F3F3F3] space-y-3 mb-6">
        <h1 className="font-bold">Q-Zone</h1>
        <img src={Qzone1} alt="" />
        <img src={Qzone2} alt="" />
        <img src={Qzone3} alt="" />
        
      </div>
    </div>
  );
};

export default RightSideNav;
