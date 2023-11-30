import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex">
      <Link href="/">
        <Image src='/logo.png' width={400} height={50} alt="Logo | Madison Beer" />
      </Link>
      <ul className="flex">
        <li>Music</li>
        <li>Videos</li>
        <li>LIVE</li>
        <li>Photos</li>
        <li>News</li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </header>
  )
}