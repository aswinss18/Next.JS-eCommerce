import { Dispatch, SetStateAction } from "react";
import { IProduct } from "@/app/admin/dashboard/page";
import { useAppDispatch } from "@/redux/hook";
import { setProduct } from "@/redux/features/productSlice";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
interface PropsType {
  srNo: number;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
  product: IProduct;
}

export default function ProductRow({
  srNo,
  setOpenPopup,
  setUpdateTable,
  product,
}: PropsType) {
  const dispatch = useAppDispatch();

  const onEdit = () => {
    dispatch(setProduct(product));
    setOpenPopup(true);
  };

  const onDelete = () => {
    dispatch(setProduct(product));
    setUpdateTable(true);
  };

  return (
    <tr>
      <td>
        <div>{srNo || "1"}</div>
      </td>
      <td>
        <div>{product.name || "Aswin"}</div>
      </td>
      <td>
        <div>{product.price || "100 RS"}</div>
      </td>
      <td className="py-2 ">
        <Image
          src={
            product.imgSrc ||
            "https://www.google.com/imgres?q=image%20messi&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fb4%2FLionel-Messi-Argentina-2022-FIFA-World-Cup_%2528cropped%2529.jpg%2F220px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%2528cropped%2529.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FLionel_Messi&docid=AuyWdm0nnVxl4M&tbnid=F2RGU9Nexo1F5M&vet=12ahUKEwjcnvuT7eCKAxUwyzgGHfBOBdkQM3oECBsQAA..i&w=220&h=294&hcb=2&ved=2ahUKEwjcnvuT7eCKAxUwyzgGHfBOBdkQM3oECBsQAA"
          }
          width={40}
          height={40}
          alt="Product image"
        />
      </td>
      <td>
        <div className="text-2xl flex items-center gap-2 text-gray-600">
          <CiEdit
            className="cursor-pointer hover:text-black"
            onClick={onEdit}
          />
          <RiDeleteBin5Line
            className="text-[20px] cursor-pointer hover:text-red-600"
            onClick={onDelete}
          />
        </div>
      </td>
    </tr>
  );
}
