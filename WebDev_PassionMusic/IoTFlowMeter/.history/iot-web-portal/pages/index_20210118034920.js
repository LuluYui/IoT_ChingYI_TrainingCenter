import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { loadModules } from 'esri-loader';

export default function Home() {


// this will lazy load the ArcGIS API
// and then use Dojo's loader to require the classes
loadModules(['esri/views/MapView', 'esri/WebMap'])
.then(([MapView, WebMap]) => {
  // then we load a web map from an id
  var webmap = new WebMap({
    portalItem: { // autocasts as new PortalItem()
      id: 'f2e9b762544945f390ca4ac3671cfa72'
    }
  });
  // and we show that map in a container w/ id #viewDiv
  var view = new MapView({
    map: webmap,
    container: 'viewDiv'
  });
})
.catch(err => {
  // handle any errors
  console.error(err);
});

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
   
      </main>
    </div>
  );
}
