import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Observatory',
    default:
      'Observatory - a nimble, personable and diligent development-focused creative agency.',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-brand-sand text-base antialiased">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/zga8bhb.css" />
      </head>
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
