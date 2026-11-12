import './globals.css';
import './sections.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import config from '../portfolio.config.json';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const NAME = config.profile.name;
const DESC = config.hero.summary;

export const metadata = {
  metadataBase: new URL(SITE),
  title: { default: `${NAME} | ${config.profile.title}`, template: `%s | ${NAME}` },
  description: DESC,
  openGraph: {
    title: `${NAME} | ${config.profile.title}`,
    description: DESC,
    type: 'website',
    images: [config.profile.photo],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#050c22',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
