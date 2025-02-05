import screenImg from "../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="w-[100%] mx-auto -mt-[118px]  p-4 rounded-xl">
      <div className="text-center mt-10 pb-44 bg-[#9538E2] p-4 rounded-xl pt-16">
        <h2 className="text-5xl font-bold text-white mb-6 w-[70%] mx-auto">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h2>
        <p className="text-white w-[50%] mx-auto font-thin">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div>
          <button className="bg-white text-[#9538E2] p-3 mt-4 rounded-xl text-xl font-bold">
            shop Now
          </button>
        </div>
      </div>
      <div className="w-[50%] mx-auto h-[400px]  rounded-xl bg-[#ffffff7b] flex justify-center items-center -mt-28">
        <img
          className="py-4 px-4 w-[100%] h-[400px] rounded-3xl"
          src={screenImg}
          alt="screenimg"
        />
      </div>
    </div>
  );
};

export default Banner;
