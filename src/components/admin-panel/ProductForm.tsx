"use client";

import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch } from "@/redux/hook";
import { makeToast } from "@/utils/helper";
import { UploadButton } from "@/utils/uploadthing";
import axios from "axios";
import { set } from "mongoose";
import Image from "next/image";
import React, { FormEvent, useState } from "react";

interface IPayload {
  name: string;
  price: string;
  category: string;
  imgSrc: null | string;
  fileKey: null | string;
}

export default function ProductForm() {
  const [payload, setPayload] = useState<IPayload>({
    imgSrc: null,
    name: "",
    price: "",
    category: "",
    fileKey: null,
  });

  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(setLoading(true));

    axios
      .post("/api/add_product", payload)
      .then((res) => {
        makeToast("Product added Successfully.");
        setPayload({
          imgSrc: null,
          name: "",
          price: "",
          category: "",
          fileKey: null,
        });
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoading(false)));
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Image
        width={800}
        height={500}
        className="max-h-[300px] w-auto object-contain rounded-md"
        alt="product image"
        src={payload.imgSrc ? payload.imgSrc : "/placeholder.jpeg"}
      />
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);

          setPayload({
            ...payload,
            imgSrc: res[0]?.url,
            fileKey: res[0]?.key,
          });
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </form>
  );
}
