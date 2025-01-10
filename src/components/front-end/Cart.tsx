import { useAppSelector } from "@/redux/hook";
import { Dispatch, SetStateAction } from "react";
import { RxCross1 } from "react-icons/rx";
import CartProduct from "./CartProduct";

interface PropsType {
  setShowCart: Dispatch<SetStateAction<boolean>>;
}

export default function Cart({ setShowCart }: PropsType) {
  const products = useAppSelector((state) => state.cartReducer);

  const getTotal = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll">
      <div className="max-w-[400px] w-full min-h-screen bg-white absolute right-0 top-0 p-6">
        <RxCross1
          className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
          onClick={() => setShowCart(false)}
        />

        <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
          Your cart
        </h3>
        <div className="mt-6 space-y-2">
          {products?.map((item: any) => (
            <CartProduct key={item._id} {...item} />
          ))}
        </div>
        <div className="flex justify-between items-center font-medium text-xl py-4">
          <p>Total:</p>
          <p>${getTotal()}.00</p>
        </div>
        <button className="bg-black text-white w-full text-center rounded-3xl py-2 hover:bg-accent mb-4 mt-4">
          View Cart
        </button>

        <button className="bg-black text-white w-full text-center rounded-3xl py-2 hover:bg-accent">
          CheckOut
        </button>
      </div>
    </div>
  );
}
