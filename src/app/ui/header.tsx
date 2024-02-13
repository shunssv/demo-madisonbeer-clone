import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="md:container md:mx-auto flex justify-between items-center py-5">
      <Link href="/">
        <Image src='/logo.svg' width={400} height={50} alt="Logo | Madison Beer" />
      </Link>
      <ul className="hidden md:flex md:gap-5">
        <li><Link href="/music">Music</Link></li>
        <li>Videos</li>
        <li>LIVE</li>
        <li><Link href="/photos">Photos</Link></li>
        <li>News</li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </header>
  )
}