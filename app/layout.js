import { Sofia } from "next/font/google";
import { Nunito } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";

export const metadata = {
  title: "Bruno Aseff",
  description: "Portifolio de Bruno Aseff",
  icons: {
    icon: "/varinha.svg",
  },
};

const sofia = Sofia({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sofia",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-nunito",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${sofia.variable}`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
