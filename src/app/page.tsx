import Image from 'next/image'

export default function Home() {
  return (
    <>
      <p className="hover:text-yellow-400">Madison site Clone</p>
      <Image src="/home/hero-1.jpg" width={1000} height={500} alt="madison beer tour" className="mx-auto" />
    </>
  )
}