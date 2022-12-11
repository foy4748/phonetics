import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/homeComponents/Footer'
import Header from '../components/homeComponents/Header'
import LanguageCard from '../components/homeComponents/LanguageCard'
import LearningFeature from '../components/homeComponents/LearningFeature'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='mx-auto md:max-w-[1240px]'>
      <Header></Header>
      <LanguageCard></LanguageCard>
      <LearningFeature></LearningFeature>
      <Footer></Footer>
    </div>
  )
}
