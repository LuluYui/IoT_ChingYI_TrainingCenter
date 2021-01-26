import Head from "next/head";
import styles from "../styles/Home.module.css";

import Map from "@esri/react-arcgis";
import Link from "next/link";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <ul
          style={{
            listStyleType: "none",
            overflow: "inherit",
            display: "inline",
          }}
        >
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
      </Head>

      
      
      <main className={styles.main}>
      <link rel="stylesheet" href="https://js.arcgis.com/next/esri/themes/light/main.css"></link>
    <script src="https://js.arcgis.com/next/"></script>
      </main>
    </div>
 
  );

}
