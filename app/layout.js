import './globals.css'
import ThemeProvider from '@/components/theme-provider'

export const metadata = {
  title: 'Aadhar POS - Admin Central',
  description: 'Aadhar POS - Central Admin Panel for Business Management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-950 text-gray-900 dark:text-white transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
