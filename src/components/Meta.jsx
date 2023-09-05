import React, { useEffect } from 'react'
import Head from 'next/head'

export default function Meta(props) {
  let {title} = props
  let heading = title ? title : 'Trans Himalayas Travels'
  return (
    <Head>
      <title>{heading}</title>
      <meta name="description" content="Your Personal Travel Advisor - No Sales Pressure, Just Genuine Guidance!"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  )
}
