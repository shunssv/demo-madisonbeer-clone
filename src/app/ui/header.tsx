import Image from "next/image";

export default function Header() {
  return (
    <header className="flex">
      <Image src='/logo.png' width={400} height={50} alt="Logo | Madison Beer" />
      <ul className="flex">
        <li>Music</li>
        <li>Videos</li>
        <li>LIVE</li>
        <li>Photos</li>
        <li>News</li>
        <li>About</li>
      </ul>
    </header>
  )
}