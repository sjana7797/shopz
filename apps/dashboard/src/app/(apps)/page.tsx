import React from "react";
import Apps from "@/dashboard/features/apps/components/apps";

function HomePage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 max-w-7xl mx-auto">
      <Apps />
    </main>
  );
}

export default HomePage;
