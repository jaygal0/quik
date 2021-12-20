import Head from 'next/head'
import Hero from './components/Hero'
import ImgTextBtn from './components/ImgTextBtn'
import Navbar from './components/Navbar'

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
      </main>
    </>
  )
}
