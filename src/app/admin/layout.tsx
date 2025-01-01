"use client";
import Login from "@/components/admin-panel/Login";
import { useAppSelector } from "@/redux/hook";
import { useSession } from "next-auth/react";

export default function layout() {
  const isLoading = useAppSelector((state) => state.loadingReducer);

  const { data: session } = useSession();

  if (!session?.user) {
    return <Login />;
  }

  return <div>Admin</div>;
}
