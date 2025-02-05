// import screenImg from "../assets/banner.jpg";
import { GiSelfLove } from "react-icons/gi";
import { FaTrailer } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addFavorite, getAllFavorites } from "../utils/utils";


const ProductDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const singleData = data.find((product) => product.product_id == id);
    setProduct(singleData);
    const favorites = getAllFavorites();
    const isExist = favorites.find((item) => item.id == singleData.id);
    if (isExist) {
      setIsFavorite(true);
    }
  }, [data, id]);
  //   console.log(coffee.product_title)
  const {
    product_title,
    product_image,
    price,
    description,
    Specification,
    rating
  } = product;

  //   Handle favorite btn click
  const handleFavorite = (product) => {
    addFavorite(product);
    setIsFavorite(true);
  };
  return (
    <div className="w-[100%] mx-auto -mt-[50px] p-4 rounded-xl">
      <div className="w-[100%] mx-auto text-center mt-10 pb-44 bg-[#9538E2] p-4 rounded-xl pt-16">
        <h2 className="text-5xl font-bold text-white mb-6 w-[70%] mx-auto">
          Product Details
        </h2>
        <p className="text-white w-[50%] mx-auto font-thin">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="w-[70%] mx-auto h-[450px]  rounded-xl bg-white -mt-28">
        <div className="flex items-center">
          <div className="w-[60%] ">
            <img
              className="w-full h-[430px] rounded-3xl p-6"
              src={product_image}
              alt=""
            />
          </div>
          <div>
            <h2 className="font-bold text-xl p-1">{product_title}</h2>
            <p>Price:${price}</p>
            <button className="btn btn-warning">In Stock</button>
            <p className="font-thin">{description}</p>
            <h2 className="font-bold p-2">Specipication</h2>

            {Specification &&
              Specification.map((item, i) => (
                <li className="list-decimal font-thin" key={i}>
                  {item}
                </li>
              ))}
            <h2 className="font-bold flex items-center gap-2">
              Rating
              <FaStar className="text-yellow-400" />
            </h2>

            <div className="flex items-center mt-2">
              <div className="flex">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-white" />
              </div>
              <p className="flex bg-gray-200 rounded-xl p-1 ">{rating}</p>
            </div>
            <div className="flex items-center gap-4">
              <button
              disabled={isFavorite}
              onClick={() => handleFavorite(product)}
              className="w-[40%] bg-[#9538E2] p-2 mt-2 rounded-2xl">
                Add To Card
                <FaTrailer className="text-white" />
                {/* <div className="flex items-center gap-3 text-white font-bold">
                  Add To Card
                  <FaTrailer className="text-white" />
                </div> */}
              </button>
              <div className="border-2 border-gray-400 rounded-full mt-2">
                <button className="text-2xl  font-bold p-2 flex justify-center items-center">
                  <GiSelfLove />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
