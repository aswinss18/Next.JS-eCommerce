"use client";

import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch } from "@/redux/hook";
import { makeToast } from "@/utils/helper";
import axios from "axios";
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

  return <>ProductForm</>;
}
