import { useAppSelector } from "@/redux/hook";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

interface PropsType {
  setShowCart: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ setShowCart }: PropsType) {
  const cartCount = useAppSelector((state) => state.cartReducer.length);

  return (
    <div className="pt-4 bg-white top-0 sticky">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="text-4xl font-bold">Logo</div>
          <div className="lg:flex hidden w-full max-w-[500px]">
            <input
              type="text"
              className="border-2 border-accent px-6 py-2 w-full"
              placeholder="Search for products..."
            />
            <div className="bg-accent text-white text-[26px] grid place-items-center px-4">
              <BsSearch />
            </div>
          </div>

          <div className="flex gap-4 md:gap-8 items-center">
            <div className="md:flex hidden gap-3">
              <div className="rounded-full border-2 border-gray-300 text-gray-500 text-[32px] w-[50px] h-[50px] grid place-items-center">
                <AiOutlineUser />
              </div>
              <div>
                <p className="text-gray-500">Hello, Sign in</p>
                <p className="font-medium">Your Account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
