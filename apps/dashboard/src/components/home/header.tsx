import Link from "next/link";

function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <h1>
        <Link href="/" className="text-xl font-bold">
          ShopZ
        </Link>
      </h1>
      <nav></nav>
    </header>
  );
}

export default Header;
