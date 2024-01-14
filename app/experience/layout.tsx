import React from "react";
import Header from "../_components/Layout/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header theme="white" />
      {children}
    </div>
  );
};

export default Layout;
