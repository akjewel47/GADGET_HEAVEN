import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Heading from "../Components/Heading";
import Categories from "../Components/Categories";

const Home = () => {
    const categories = useLoaderData()
// console.log(categories)
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      {/* Heading */}
      <Heading title={"Explore Cutting-Edge Gadgets"}></Heading>
      {/* Categories tab section */}
      {/* <div role="tablist" className="tabs tabs-lifted">
        <a role="tab" className="tab">
          Tab 1
        </a>
        <a role="tab" className="tab tab-active">
          Tab 2
        </a>
        <a role="tab" className="tab">
          Tab 3
        </a>
      </div> */}
      <Categories
      categories={categories}
      ></Categories>
      {/* Dynamic nested components */}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
