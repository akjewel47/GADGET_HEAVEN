import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const ProductCard = () => {
    const navigate = useNavigate()

    const data = useLoaderData()
    const { category } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
      if (category) {
        const filteredByCategory = [...data].filter(
          product => product.category === category
        )
        setProduct(filteredByCategory)
      } else {
        setProduct(data.slice(0, 6))
      }
    }, [category, data])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      {product.map((product) => (
        <Card 
        key={product.id} 
        product={product}
        ></Card>
      ))}
    </div>
  );
};

export default ProductCard;
