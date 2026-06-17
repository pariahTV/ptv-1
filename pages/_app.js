import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="gp-app">
      <Component {...pageProps} />
    </div>
  );
}
