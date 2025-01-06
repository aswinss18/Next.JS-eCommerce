import { Dispatch, SetStateAction } from "react";
import { IProduct } from "@/app/admin/dashboard/page";
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
  return <div>ProductRow</div>;
}
