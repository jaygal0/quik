import Head from 'next/head'
import Clients from './components/Clients'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ImgTextBtn from './components/ImgTextBtn'
import Navbar from './components/Navbar'
import Packages from './components/Packages'
import Stats from './components/Stats'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ImgTextBtn
          heading="feeling overwhelmed?"
          text="Got a poorly designed website, that’s too slow and doesn’t convert customers?"
          button="let&#39;s work together"
        />
        <Clients />
        <Stats />
        <ImgTextBtn
          heading="looking for some free advice?"
          text="Share your issues with your website and we’ll see if we can help."
          buttonAlt="book now"
        />
        <Packages />
      </main>
      <Footer />
    </>
  )
}
