import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'
import Image from 'next/image'
// import projects from '../data/en.json'
import { Footer } from '@/components/Footer'
import { Services } from '@/components/Services'

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    {/* <Services /> */}
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}
