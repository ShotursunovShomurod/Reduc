import Footer from "@/components/footer/footer";
import Hader from "@/components/header/header";
import React from "react";
import { Outlet } from "react-router-dom";

const mainLayout = () => {
  return (
    <>
      <Hader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default mainLayout;
