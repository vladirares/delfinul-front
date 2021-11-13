import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Table from '../components/Table'
import ReactSlider from 'react-slider'
import { useState } from 'react'

export default function Home() {

  const [size,setSize]=useState(50)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Table size={size} />
        <ReactSlider
        className="vertical-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[0, 50, 100]}
        ariaLabel={['Lowest thumb', 'Middle thumb', 'Top thumb']}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        orientation="vertical"
        invert
        pearling
        minDistance={10}
        onAfterChange={(value)=>
          setSize(value[1])
          }
        />
      </main>

      <footer className={styles.footer}>
    
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}



