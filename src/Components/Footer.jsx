const Footer = () => {
  return (
    <footer className="footer footer-center bg-gray-200 p-10">
      <aside>
        <h1 className="font-bold text-4xl pb-1">Gadget Heaven</h1>
        <p className="font-thin ">
          Leading the way to cutting-edge technology adn innovation
        </p>
      </aside>
      <div className="w-[90%] h-[1px] bg-gray-400"></div>

        <div className="flex justify-between gap-20 items-center">
          <div className="text-center">
            <h1 className="font-bold">Service</h1>
            <p className="font-thin">Product Support</p>
            <p className="font-thin">Order Tracking</p>
            <p className="font-thin">Shipping & Delivery</p>
            <p className="font-thin">Returns</p>
          </div>
          <div className="text-center">
            <h1 className="font-bold">Company</h1>
            <p className="font-thin">About Us</p>
            <p className="font-thin">Careers</p>
            <p className="font-thin">Contact</p>
          </div>
          <div className="text-center">
            <h1 className="font-bold">Legal</h1>
            <p className="font-thin">Terms of Service</p>
            <p className="font-thin">Privacy Policy</p>
            <p className="font-thin">Cookie Policy</p>
          </div>
        </div>

    </footer>
  );
};

export default Footer;
