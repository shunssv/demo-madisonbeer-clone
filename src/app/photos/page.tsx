import Image from "next/image";

export default function Page() {
  return (
    <section className="max-w-screen-xl mx-auto">
      <h1>Photos</h1>
      <div className="columns-4 gap-8">
        <Image src="/photos/01.jpg" width={1200} height={1300} alt="photo | madison beer" className="rounded-2xl"/>
        <Image src="/photos/02.jpg" width={1200} height={1300} alt="photo | madison beer" className="rounded-2xl"/>
        <Image src="/photos/03.jpg" width={1200} height={1300} alt="photo | madison beer" className="rounded-2xl"/>
        <Image src="/photos/04.jpg" width={1200} height={1300} alt="photo | madison beer" className="rounded-2xl"/>
        <Image src="/photos/05.jpg" width={1200} height={1300} alt="photo | madison beer" className="rounded-2xl"/>
        <Image src="/photos/06.jpg" width={1200} height={1300} alt="photo | madison beer" className="rounded-2xl"/>
        <Image src="/photos/07.jpg" width={1200} height={1300} alt="photo | madison beer" className="rounded-2xl"/>
        <Image src="/photos/08.jpg" width={1200} height={1300} alt="photo | madison beer" className="rounded-2xl"/>
        <Image src="/photos/09.jpg" width={1200} height={1300} alt="photo | madison beer" className="rounded-2xl"/>
        <Image src="/photos/10.jpg" width={1200} height={1300} alt="photo | madison beer" className="rounded-2xl"/>
        <Image src="/photos/11.jpg" width={1200} height={1300} alt="photo | madison beer" className="rounded-2xl"/>
      </div>
    </section>
  )
}