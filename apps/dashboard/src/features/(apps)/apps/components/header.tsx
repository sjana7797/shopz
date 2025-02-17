import Link from "next/link";
import UserAction from "./user-action";
import { buttonVariants } from "@repo/ui/components/button";

function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
      <h1>
        <Link href="/" className="text-xl font-bold">
          ShopZ
        </Link>
      </h1>
      <div className="flex items-center gap-2">
        <nav className="flex list-none items-center justify-end gap-2">
          <li>
            <Link
              href="/apps/assistant"
              className={buttonVariants({
                size: "sm",
              })}
            >
              Chat with ShopZ
            </Link>
          </li>
        </nav>
        <UserAction />
      </div>
    </header>
  );
}

export default Header;
