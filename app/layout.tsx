import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Finic - Premium FinTech',
  description: 'Manage your finances with elegance.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-zinc-950 transition-colors duration-300 antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
