import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Weebflix",
  description: "Anime db for weebs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Box marginTop={16}>
          <main>
            {children}
          </main>
        </Box>
      </body>
    </html>
  );
}
