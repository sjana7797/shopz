import StorefrontLayout from "@/dashboard/layouts/storefront-layout";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function DashboardLayout({ children }: Props) {
  return <StorefrontLayout>{children}</StorefrontLayout>;
}

export default DashboardLayout;
