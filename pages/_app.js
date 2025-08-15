import '../styles/globals.css';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script id="adsbygoogle-init" strategy="afterInteractive" async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5735021755991385`} crossOrigin="anonymous" />
      <Component {...pageProps} />
    </>
  );
}
