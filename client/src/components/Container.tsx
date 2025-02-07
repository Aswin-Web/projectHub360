import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className='flex justify-center items-center min-h-[100vh]'>{children}</div>;
};

export default Container;
