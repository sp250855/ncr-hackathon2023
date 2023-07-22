import './globals.css';
import { Inter } from 'next/font/google';
import Container from '@mui/material/Container';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Food Order',
    description: 'Canteen food order',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Container maxWidth="sm" className="full-height">
                    {children}
                </Container>
            </body>
        </html>
    );
}
