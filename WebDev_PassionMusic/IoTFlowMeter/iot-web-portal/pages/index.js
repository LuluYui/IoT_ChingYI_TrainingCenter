import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { loadModules } from 'esri-loader';

class Home extends React.Component {
 
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();  
  }

  componentDidMount(){
    const map = new ArcGISMap({
      basemap: 'topo-vector'
    })

    this.view = new MapView({
      container: this.mapRef.current,
      map: map, 
      center: [-118, 34],
      zoom: 8
    })
  }

  render() {
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
            <div className="webmap" ref={this.mapRef}>

            </div>
        </main>
            

      </div>
   );
  }
}
