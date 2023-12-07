import Image from "next/image";

export default function Page() {
  return (
    <section>
      <div className="md:flex max-w-screen-xl mx-auto md:items-center">
        <h1 className="text-5xl md:text-7xl">Madison Beer is a platinum-selling recording artist, songwriter, producer, and author</h1>
        <Image src="/about/profile-1.jpg" width={1200} height={1300} alt="profile | madison beer" className="rounded-2xl"/>
      </div>

      <Image src="/about/profile-2.jpg" width={1200} height={1100} alt="profile | madison beer" className="rounded-2xl"/>
      <Image src="/about/profile-2.jpg" width={1200} height={1100} alt="profile | madison beer" className="rounded-2xl"/>

    </section>
  )
}