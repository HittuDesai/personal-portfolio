import Head from 'next/head'
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import ProjectPage from '../components/ProjectPage'
import ContactPage from '../components/ContactPage'

export default function Home() {
  return (
    <div className='main-bg'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HEADER */}
      <Header />

      {/* MAIN */}
      {/* <HomePage /> */}
      {/* <ProjectPage /> */}
      <ContactPage />

      {/* FOOTER */}
      <footer></footer>
      
    </div>
  )
}
