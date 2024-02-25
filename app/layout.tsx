import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Initializing the Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Metadata for the web page
export const metadata: Metadata = {
  title: "Correct your text",
  description: "WIP frenchezleo.com",
};

/*   Root layout component for the web page
A Root layout component, as the name suggests, is a component in a web application or framework 
(such as React) that defines the layout for the root or top-level structure of a web page. 
This component typically encapsulates elements that are common across multiple pages of a website,
such as headers, footers, navigation menus, and other layout-related components.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // HTML structure for the root layout with language set to English
    <html lang="en">
      {/* Body of the web page with Inter font applied */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
