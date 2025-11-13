// app/layout.js - Next.js root layout with required <html> and <body> tags
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'Basant Agrawal Portfolio',
  description: 'Official portfolio website for Basant Agrawal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
