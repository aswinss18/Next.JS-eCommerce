import React from "react";
import {
  TbDiscount,
  TbReceiptRefund,
  TbSubscript,
  TbTruckDelivery,
} from "react-icons/tb";
import FeatureCard from "./FeatureCard";

const data = [
  {
    icon: <TbTruckDelivery className="text-4xl" />,
    title: "Free shipping",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptas.",
  },
  {
    icon: <TbReceiptRefund className="text-4xl" />,
    title: "Refund & Return",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptas.",
  },
  {
    icon: <TbDiscount className="text-4xl" />,
    title: "Member Discount",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptas.",
  },
  {
    icon: <TbSubscript className="text-4xl" />,
    title: "Support 24/7",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptas.",
  },
];

export default function Feature() {
  return (
    <div className="container grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
      {data.map((item) => (
        <FeatureCard key={item.title} {...item} />
      ))}
    </div>
  );
}
