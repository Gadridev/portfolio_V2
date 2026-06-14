import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Providers from "@/components/Providers";
import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--ff-poppins",
});

export const metadata: Metadata = {
  title: "Gadri Mohamed",
  description: "Personal portfolio of Gadri Mohamed - Full-Stack Developer",
  icons: {
    icon: "/developer.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
