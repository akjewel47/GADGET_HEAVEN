import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLaoutes = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-334px)] container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLaoutes;
