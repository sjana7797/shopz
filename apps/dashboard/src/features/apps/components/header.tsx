import Link from "next/link";
import UserAction from "./user-action";

function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 justify-between">
      <h1>
        <Link href="/" className="text-xl font-bold">
          ShopZ
        </Link>
      </h1>
      <nav className="flex items-center gap-2"></nav>
      <UserAction />
    </header>
  );
}

export default Header;
