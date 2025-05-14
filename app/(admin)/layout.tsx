import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reddit-sanity Admin",
  description: "Reddit-sanity Admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
    <html lang="en">
      <body>
       {children}
      </body>
    </html>
  );
}
