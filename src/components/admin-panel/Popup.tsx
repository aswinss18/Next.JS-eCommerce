import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { makeToast } from "@/utils/helper";
import axios from "axios";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface PropsType {
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
}

export default function Popup({ setOpenPopup, setUpdateTable }: PropsType) {
  const productData = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();

  const [inputData, setInputData] = useState({
    name: productData.name,
    price: productData.price,
    category: productData.category,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));

    axios
      .put(`/api/edit_product/${productData._id}`, inputData)
      .then((res) => {
        makeToast("Product Updated Successfully");
        setUpdateTable((state) => !state);
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoading(false)));
    setOpenPopup(false);
  };

  return (
    <div className="fixed top-0 left-0 h-screen bg-[#000070] grid  place-items-center">
      <div className="bg-white w-[700px] py-8 rounded-lg text-center relative">
        <IoIosCloseCircleOutline
          className="absolute top-0 right-0 text-2xl m-4 cursor-pointer hover:text-red-600"
          onClick={() => setOpenPopup(false)}
        />
        <h2 className="text-2xl mt-3">Edit Product</h2>

        <form
          action=""
          onSubmit={handleSubmit}
          className="mt-6 w-fit space-y-4 mx-auto"
        >
          <input
            type="text"
            className="border block border-gray-500 outline-none px-4 py-2"
            value={inputData.name}
            onChange={(e) =>
              setInputData((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="Product Name"
            required
          />{" "}
          <input
            type="text"
            className="border block border-gray-500 outline-none px-4 py-2"
            value={inputData.category}
            onChange={(e) =>
              setInputData((prev) => ({ ...prev, category: e.target.value }))
            }
            placeholder="Category"
            required
          />{" "}
          <input
            type="text"
            className="border block border-gray-500 outline-none px-4 py-2"
            value={inputData.price}
            onChange={(e) =>
              setInputData((prev) => ({ ...prev, price: e.target.value }))
            }
            placeholder="Price"
            required
          />
          <div className="flex justify-end">
            <button className="bg-accent  block text-white px-8 py-2 rounded-lg self-center">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
