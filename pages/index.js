import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import membercard from '../components/Membercard'
import Membercard from '../components/Membercard'
import Footer from '../components/footer'
export default function Home() {
  return (
    <div>
      <Membercard/>
      <Footer/>
    </div>
  )
}
