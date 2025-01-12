import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hook";
import { makeToast } from "@/utils/helper";
import React from "react";
import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
interface Propstype {
  _id: string;
  imgSrc: string;
  fileKey: string;
  name: string;
  price: string;
  category: string;
}
interface PayloadType {
  _id: string;
  imgSrc: string;
  name: string;
  price: string;
  quantity: number;
}

export default function ProductCard({
  _id,
  name,
  price,
  category,
  imgSrc,
  fileKey,
}: Propstype) {
  const dispatch = useAppDispatch();

  const addproductToCart = () => {
    const payload: PayloadType = { _id, imgSrc, name, price, quantity: 1 };
    dispatch(addToCart(payload));
    makeToast("Added to Cart");
  };

  return (
    <div className="border border-gray-200">
      <div className="text-center border-b border-gray-200">
        <img src={imgSrc} alt={name} className="inline-block" />
      </div>
      <div className="px-8 py-4">
        <p className="text-gray-500 text-[14px] font-medium">{category}</p>
        <h2 className="font-medium">{name}</h2>
        <div className="mt-3 flex text-[#FFB21D] items-center]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <p className="text-gray-600 text-[14px] ml-2">(3 Review)</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <h2 className="font-medium text-accent text-xl">{price}</h2>
          <div
            className="flex gap-2 items-center bg-pink text-white px-4 py-2 cursor-pointer hover:bg-accent"
            onClick={addproductToCart}
          >
            <AiOutlineShoppingCart />
            Add To Cart
          </div>
        </div>
      </div>
    </div>
  );
}
