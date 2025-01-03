"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

export default function Authprovider({ children }: PropsType) {
  return <SessionProvider>{children}</SessionProvider>;
}
