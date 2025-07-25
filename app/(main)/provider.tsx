"use client";
import React, { useEffect } from "react";
import Header from "./components/Header";
import { useRouter } from "next/navigation";
import { GetAuthUserData } from "@/services/GlobalApi";

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter();
  useEffect(() => {
    CheckUseAuth();
  });

  const CheckUseAuth = async () => {
    const token = localStorage.getItem("user_token");
    const user = token && (await GetAuthUserData(token));
    if (!user.email) {
      router.replace("/sign-in");
    }
    try {
    } catch (e) {}
  };

  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Provider;
