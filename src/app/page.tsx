"use client";

import Navbar from "@/components/front-end/Navbar";
import { useState } from "react";

export default function Home() {
  const [showCart, setShowCart] = useState(false);

  return (
    <main>
      <Navbar setShowCart={setShowCart} />
    </main>
  );
}
