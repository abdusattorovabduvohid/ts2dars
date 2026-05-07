import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-slate-900 text-white shadow-md">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight hover:text-slate-300 transition-colors"
        >
          MyApp
        </Link>
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-slate-300 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="hover:text-slate-300 transition-colors"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/users"
              className="hover:text-slate-300 transition-colors"
            >
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
