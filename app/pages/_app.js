import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/list/main.css";
import "@fullcalendar/bootstrap/main.css";
import "@fortawesome/fontawesome-free/css/all.css"; // needs additional webpack config!

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
