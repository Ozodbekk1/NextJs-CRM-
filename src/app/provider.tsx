/** @format */

import { FC, ReactNode } from "react";
import { HydrationProvider } from "react-hydration-provider";

const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <HydrationProvider>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </HydrationProvider>
  );
};

export default Provider;
