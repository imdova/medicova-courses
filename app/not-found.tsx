import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="grid h-[80vh] place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Sorry!
        </p>

        <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>

        <Link
          href="/"
          className="focus:ring-3 focus:outline-hidden bg-primary mt-6 inline-block rounded-3xl px-5 py-3 font-medium text-white hover:bg-primary-900"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
