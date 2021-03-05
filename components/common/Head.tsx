import { SiteURL } from '@lib/constants'
import NextHead from 'next/head'

type Props = {
  title: string
  description: string
  image: string
}

const Head = ({ title, description, image }: Props) => {
  return (
    <NextHead>
      <title>{title}</title>

      <link
        rel="preload"
        href="/fonts/fira-sans-latin-regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/fira-sans-latin-700.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/fira-sans-latin-italic.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/dm-mono-latin-regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <meta name="og:title" content={title} />

      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      <meta name="twitter:image" content={image} />
      <meta name="og:image" content={image} />

      <meta name="og:url" content={SiteURL} />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@edgarlr_" />
      <meta name="author" content="Edgar López" />

      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/favicons/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/favicons/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/favicons/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicons/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/favicons/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicons/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicons/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicons/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicons/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicons/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/manifest.json" />
      <meta name="msapplication-TileColor" content="#000" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#000" />
    </NextHead>
  )
}

export default Head
