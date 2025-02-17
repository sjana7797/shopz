import Header from "@/dashboard/features/(apps)/apps/components/header";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function AppLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default AppLayout;
