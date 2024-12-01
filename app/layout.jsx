import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//COMPONENTS
import Header from "@/components/ui/Header";
import PageTransition from "@/components/ui/PageTransition";
import StairEffect from "@/components/ui/StairEffect";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Adrian's Portofolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairEffect />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
