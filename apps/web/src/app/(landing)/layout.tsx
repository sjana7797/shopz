import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function LandingLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroHeader />
      {children}
      <FooterSection />
      <p className="inset-x-0 bg-gradient-to-b from-neutral-50 to-neutral-200 bg-clip-text text-center text-4xl font-bold text-transparent md:text-8xl lg:text-[16rem] dark:from-neutral-950 dark:to-neutral-800">
        ShopZ
      </p>
    </div>
  );
}

export default LandingLayout;
