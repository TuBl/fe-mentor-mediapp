import "../styles/globals.css";
import { Outfit } from "@next/font/google";
import type { AppProps } from "next/app";

const outfit = Outfit({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={outfit.className}>
      <Component {...pageProps} />
    </main>
  );
}
