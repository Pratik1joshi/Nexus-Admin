import './globals.css'

export const metadata = {
  title: 'POS Admin Central',
  description: 'Central Admin Panel for Restaurant POS Management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
