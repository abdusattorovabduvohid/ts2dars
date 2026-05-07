import Link from "next/link";

export default function HomePage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to MyApp</h1>
      <p className="text-slate-500 text-lg mb-10">
        A mini Next.js site showcasing ISR and CSR data fetching strategies.
      </p>
      <div className="flex justify-center gap-6 flex-wrap">
        <Link
          href="/products"
          className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors font-medium"
        >
          View Products (ISR)
        </Link>
        <Link
          href="/users"
          className="border border-slate-900 text-slate-900 px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors font-medium"
        >
          View Users (CSR)
        </Link>
      </div>
    </section>
  );
}
