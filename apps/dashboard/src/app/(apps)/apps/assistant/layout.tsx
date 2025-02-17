"use client";

import Sidebar from "@/dashboard/features/(apps)/assistant/components/sidebar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function AssistantLayout({ children }: Props) {
  return (
    <main className="flex h-[calc(100vh-64px)] flex-1">
      <Sidebar />
      {children}
    </main>
  );
}

export default AssistantLayout;
