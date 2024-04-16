import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex mb-8 bg-[#F3F3F3] mt-8">
   
     <button className="btn btn-secondary">Breaking News</button>
     
      <Marquee pauseOnHover={true} speed={100}>
      Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default BreakingNews;
