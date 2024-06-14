
import 'bootstrap/dist/css/bootstrap.css';
import { Inter } from '@next/font/google';
import Head from "next/head";

import { Nunito } from '@next/font/google';

const nunito = Nunito({
  subsets: ['latin'], // Specify required character subsets
  weight: ['400', '700'], // Include desired font weights
});


interface Metadata {
  title: string;
  description: string;
}
  


// fonts
const inter = Inter({ subsets: ['latin'] });

// Metadata
export const metadata: Metadata = {
  title: "FakeIec App",
  description: "Fake national voting application",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    		<body className={nunito.className}>{children}</body>
       
    </html>
  );
}
