import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul style={{ listStyleType: "none", overflow: "hidden", display: "inline"}}> 
        <li>
          <Link href="/site_map">
            <a>Site Map</a>
            </Link>          
        </li>
        <li>
          <Link href="/analytics">
            <a>Analytical</a>
            </Link>          
        </li>
      </ul>

    </div>
  )
}
