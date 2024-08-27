import React from "react";
import { Card } from "antd";
import { FaHeart } from "react-icons/fa";
import { useStateValue } from "@/context/index";
import Skeletons from "@/components/skelotons/skeletons";
import { CiStar } from "react-icons/ci";

const Products = ({ data, loading }) => {
  if (loading) {
    return <Skeletons limit={10} />;
  }
  
  const [{ wishlist }, dispatch] = useStateValue();
  
  return (
    <div className="container mx-auto mt-7 mb-6">
      <div className="grid grid-cols-2 mt-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {data?.map((product) => (
          <Card
            key={product.id}
            className="relative rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            cover={
              <div className="relative">
                <img
                  alt={product.title}
                  src={product.images[0]}
                  className="h-[220px] w-full object-contain rounded-t-lg"
                />
                <button
                  onClick={() => dispatch({ type: "TOGGLE_WISHLIST", payload: product })}
                  className="absolute top-2 right-2 bg-white p-2 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  <FaHeart />
                </button>
              </div>
            }
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#253D4E]">
                {product.title.slice(0, 20)}...
              </h3>
              <p className="text-sm text-[#ADADAD]">{product.category}</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-1 text-[#FADB14]">
                  <CiStar className="text-xl" />
                  <span className="text-lg">{product.rating}</span>
                </div>
                <p className="text-lg text-[#3BB77E] font-bold">
                  ${product.price}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
