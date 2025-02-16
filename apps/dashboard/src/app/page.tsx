import React from "react";
import Header from "@/dashboard/components/home/header";
import Apps from "@/dashboard/components/home/app";

type Props = {};

function HomePage({}: Props) {
  return (
    <div>
      <Header />
      <Apps />
    </div>
  );
}

export default HomePage;
