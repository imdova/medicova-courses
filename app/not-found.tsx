import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-white text-main">
      <div className="px-6 text-center">
        <h1 className="mb-6 bg-gradient-to-r from-primary to-light-primary bg-clip-text text-[9rem] font-extrabold tracking-tight text-transparent">
          404
        </h1>
        <p className="mb-4 text-2xl font-semibold text-secondary">
          Page Not Found
        </p>
        <p className="mb-8 text-lg text-secondary">
          We couldn&apos;t find the page you were looking for. It might have
          been moved or deleted.
        </p>
        <Link
          href="/"
          className="inline-block transform rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary-900">
          Go Back Home
        </Link>
      </div>

      <div className="absolute bottom-4 text-sm text-secondary">
        <p>© {new Date().getFullYear()} Medicova. All rights reserved.</p>
      </div>
    </div>
  );
}
