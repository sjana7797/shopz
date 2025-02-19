import React from "react";
import Apps from "@/dashboard/features/(apps)/apps/components/apps";
import WelcomeBanner from "@/dashboard/features/(apps)/welcome/components/banner";

function HomePage() {
  return (
    <main className="mx-auto flex max-w-7xl flex-1 flex-col gap-4 p-4">
      <WelcomeBanner />
      <Apps />
    </main>
  );
}

export default HomePage;
