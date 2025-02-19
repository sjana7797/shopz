import Link from "next/link";
import UserAction from "./user-action";
import { Button, buttonVariants } from "@repo/ui/components/button";
import { Bell, ChartSpline, MessageSquareText } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 flex h-16 shrink-0 items-center justify-between gap-2 border-b bg-white px-4">
      <h1>
        <Link href="/" className="text-xl font-bold">
          ShopZ
        </Link>
      </h1>
      <div className="flex items-center gap-2">
        <nav className="flex list-none items-center justify-end gap-2">
          <li>
            <Link
              href="/dashboard"
              className={buttonVariants({
                variant: "secondary",
              })}
            >
              <ChartSpline className="size-4" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/assistant"
              className={buttonVariants({
                size: "icon",
              })}
            >
              <MessageSquareText className="size-4" />
              {/* Chat with ShopZ */}
            </Link>
          </li>
          <li>
            <Button size="icon" variant="outline">
              <Bell />
            </Button>
          </li>
        </nav>
        <UserAction />
      </div>
    </header>
  );
}

export default Header;
