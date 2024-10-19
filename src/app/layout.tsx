import type { Metadata } from "next";
import "./globals.css";

// Import Helvetica Neue as a system font with fallbacks to other fonts
const helveticaNeue = {
  className: "font-helvetica",
  style: {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
};


export const metadata: Metadata = {
  title: "Dominguez Properties",
  description: "Discover Premier Commercial Spaces with Dominguez Properties",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helveticaNeue.className}`} style={helveticaNeue.style}>
        {children}
      </body>
    </html>
  );
}


