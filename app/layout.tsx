import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { Header } from '@/components/Header';
import { ThemeToggleCord } from '@/components/ThemeToggleCord';

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
                if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 antialiased relative">
        <ThemeToggleCord />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
