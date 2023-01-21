import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex h-[10vh] items-center justify-center gap-4 p-4">
      <a
        className="text-xl"
        href="https://twitter.com/SameerJadav_"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>

      <p className="text-xl">-</p>
      <Link className="text-xl" href="/results">
        Results
      </Link>
      <p className="text-xl">-</p>
      <Link className="text-xl" href="/about">
        About
      </Link>
    </footer>
  );
}
