import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="py-4">
        <Image src="/home/hero-1.jpg" width={1000} height={500} alt="madison beer tour" className="mx-auto" />
      </div>
    </>
  )
}