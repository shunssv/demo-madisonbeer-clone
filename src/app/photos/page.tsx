import Image from "next/image";

export default function Page() {
  return (
    <section className="max-w-screen-xl mx-auto">
      <h1>Photos</h1>
      <div className="md:grid grid-cols-3 gap-4">
        <Image src="/about/profile-1.jpg" width={1200} height={1300} alt="profile | madison beer" className="rounded-2xl"/>
        <Image src="/about/profile-1.jpg" width={1200} height={1300} alt="profile | madison beer" className="rounded-2xl"/>
        <Image src="/about/profile-2.jpg" width={1200} height={1100} alt="profile | madison beer" className="rounded-2xl"/>
        <Image src="/about/profile-2.jpg" width={1200} height={1100} alt="profile | madison beer" className="rounded-2xl"/>
        <Image src="/about/profile-2.jpg" width={1200} height={1100} alt="profile | madison beer" className="rounded-2xl"/>
      </div>
    </section>
  )
}