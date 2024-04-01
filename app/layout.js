import { Inter } from 'next/font/google';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import './globals.css';
import './font.css';
import '@splidejs/splide/css';
import StoreProvider from '@/store/storeProvider';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gobeze Consult',
  description: 'Gobeze Consult Official Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body style={{ fontFamily: 'Dax' }} className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
