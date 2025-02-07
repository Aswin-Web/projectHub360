"use client"
import Button from "@/components/Button";
import Container from "@/components/Container";
import { SERVER_URL } from "@/config/config";
import React from "react";
const Page = () => {
  const handleClick =  (event: any) => {
    event.preventDefault();
    window.location.href = `${SERVER_URL}/auth/google`;
  };
   return (
    // Container
    <Container>
      {/*Button Container  */}
      <div>
        {/* Each button */}
        <Button handleClick={handleClick}>Sign In With Google</Button>
      </div>
    </Container>
  );
};

export default Page;
