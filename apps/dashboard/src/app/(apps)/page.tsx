import React from "react";
import Apps from "@/dashboard/features/(apps)/apps/components/apps";

function HomePage() {
  return (
    <main className="mx-auto flex max-w-7xl flex-1 flex-col gap-4 p-4">
      <Apps />
    </main>
  );
}

export default HomePage;
