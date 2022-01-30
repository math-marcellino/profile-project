import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SideNavbar from '../components/SideNavbar'
import ThemeToggle from '../components/ThemeToggle'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Matthew Marcellino's Portofolio</title>
        <meta name="description" content="Matthew Marcellino's Portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='fixed right-0 p-4'>
        <ThemeToggle/>
      </div>
      <SideNavbar />
    </div>
  )
}

export default Home
