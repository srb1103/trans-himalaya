import '@/styles/globals.css'
import Script from 'next/script'


export default function App({ Component, pageProps }) {
  return(
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTM_ID}`}
      />
      <Script strategy="lazyOnload" id="gtm_script">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GTM_ID}', {
            page_path: window.location.pathname,
            });
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
