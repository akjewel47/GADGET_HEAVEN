const Dashboard = () => {
  return (
    <div>
      <div className="w-[100%] mx-auto text-center pb-24 bg-[#9538E2] p-4 rounded-xl pt-8">
        <h2 className="text-5xl font-bold text-white mb-4 w-[70%] mx-auto">
          Dashboard
        </h2>
        <p className="text-white w-[50%] mx-auto font-thin">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center items-center mt-8 gap-6">
          <button className="px-8 py-2 bg-white rounded-2xl ">Cart</button>
          <button className="px-4 py-2 border-gray-600 border-2 rounded-2xl ">
            wishList
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
