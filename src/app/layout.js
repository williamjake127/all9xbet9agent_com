import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SettingsProvider } from '@/context/SettingsContext';
import { getServerSettings } from '@/lib/getSettings';

import { DEFAULT_BRAND_NAME, normalizeSiteName } from '@/lib/seedData';

export const dynamic = 'force-dynamic';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export async function generateMetadata() {
  const settings = await getServerSettings();
  const siteName = normalizeSiteName(settings.site_name || DEFAULT_BRAND_NAME);
  const siteIcon = settings.site_icon || '/wp-content/uploads/2026/07/cropped-hero-bg-2-32x32.webp';

  return {
    title: `${siteName} Agent List 2026 | Official Master & Super Agent BD`,
    description: `Find the updated ${siteName} Agent List 2026 in Bangladesh. Search verified Master and Super Agents, check Agent IDs, and contact trusted agents safely.`,
    icons: {
      icon: siteIcon,
      apple: siteIcon,
    }
  };
}

export default async function RootLayout({ children }) {
  const initialSettings = await getServerSettings();

  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <meta name="theme-color" content="#101A2A" />
      </head>
      <body>
        <SettingsProvider initialSettings={initialSettings}>
          <Header />
          <main id="content" style={{ flexGrow: 1, width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
            {children}
          </main>
          <Footer />
        </SettingsProvider>
      </body>
    </html>
  );
}
