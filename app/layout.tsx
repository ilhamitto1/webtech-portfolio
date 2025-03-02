import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'] 
});

export const metadata: Metadata = {
  title: 'WebTech.az - IT Həlləri və Proqramlaşdırma Xidmətləri',
  description: 'İlham Dosdiyev tərəfindən peşəkar IT xidmətləri və xüsusi proqram təminatı. Biz yüksək keyfiyyətli veb tətbiqlər yaradır, IT dəstəyi təqdim edir və hərtərəfli texnoloji həllər təklif edirik.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}