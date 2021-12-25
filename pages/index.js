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
          text="Got a poorly designed website, that&#39;s too slow and doesn&#39;t convert customers?"
          button="let&#39;s work together"
          src="confused-mobile.svg"
        />
        <Clients />
        <Stats />
        <ImgTextBtn
          heading="want free advice?"
          text="Share your issues with your website and we&#39;ll see if we can help."
          buttonAlt="book now"
          src="consult.svg"
        />
        <Packages />
      </main>
      <Footer />
    </>
  )
}
