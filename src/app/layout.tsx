import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Header} from "@/components/custome/Header";
import {Footer} from "@/components/custome/Footer";
import { Toaster } from "@/components/ui/sonner"
import {ReactNode} from "react";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});


const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "WebProDev - Hire Laravel Developers | Dedicated Team",
    description: "Transform your web initiatives with our top 3% vetted Laravel experts. Save up to 60% while getting enterprise-grade quality. Start your 7-day trial today.",
    keywords: "Laravel developers, hire Laravel developers, Laravel development company, web development, custom Laravel apps, API development, e-commerce solutions",
    authors: [{ name: "WebProDev" }],
    creator: "WebProDev",
    publisher: "WebProDev",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://web-pro-dev.vercel.app"),
    // metadataBase: new URL("http://localhost:3000"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "WebProDev - Hire Laravel Developers | Dedicated Team",
        description: "Transform your web initiatives with our top 3% vetted Laravel experts. Save up to 60% while getting enterprise-grade quality.",
        url: "https://web-pro-dev.vercel.app",
        // url: "http://localhost:3000",
        siteName: "WebProDev",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/logo.svg",
                width: 1200,
                height: 630,
                alt: "WebProDev Laravel Development",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "WebProDev - Hire Laravel Developers | Dedicated Team",
        description: "Transform your web initiatives with our top 3% vetted Laravel experts. Save up to 60% while getting enterprise-grade quality.",
        creator: "@webprodev",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

                <Header/>
                <div className={'mt-20'}>
                    {children}
                </div>
                <Footer/>
                <Toaster />

            </body>
        </html>
    );
}
