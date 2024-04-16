import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/righSideNav/RightSideNav";

const News = () => {
    const {id,image_url ,title ,details}=useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3 ">
                <h1 className="text-xl font-semibold">Dragon News</h1>
                <div className="border mb-4">
                    <p>{id}</p>
                    <img src={image_url} alt="" />
                    <h1>{title}</h1>
                    <p>{details}</p>
                </div>

                </div>
                <div>
                   <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;