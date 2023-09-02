import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <div className="flex justify-center mt-40">
    <h1 className="text-white text-9xl font-semibold mx-7">Who&apos;s gonna carry <br /> the boats</h1>
    </div>
    </>
  )
}
