import Image from "next/image";

export default function Page() {
  return (
    <section className="">
      <div className="flex ">
        <h1 className=" text-7xl">Madison Beer is a platinum-selling recording artist, songwriter, producer, and author</h1>
        <Image src="/about/profile-1.jpg" width={1200} height={1300} alt="profile | madison beer"/>
      </div>

      <Image src="/about/profile-2.jpg" width={1200} height={1100} alt="profile | madison beer"/>
    </section>
  )
}