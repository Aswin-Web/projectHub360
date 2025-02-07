"use client"
import Container from "@/components/Container";
import { ProductName } from "@/components/Data";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Notification from "@/components/Notification";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter()
  const searchParams = useSearchParams();
  useEffect(() => {
    const access_token = searchParams.get("access");
    if (access_token) {
      localStorage.setItem("ticket", access_token);
      router.replace("/app/dashboard")

    } else {
      <Notification message="No access token found... Please contact the admin" />;
    }
  }, []);
  return (
    <Container>
      <div className="text-lg">
        Welcome to <ProductName />. We are validating your credentials. Please
        wait.....
      </div>
    </Container>
  );
};

export default page;
