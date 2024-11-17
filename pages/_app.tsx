import { FloatingDockDemo } from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Place FloatingDockDemo like a Navbar at the top of your page */}

      {/* <FloatingDockDemo /> */}

      {/* Main content of each page */}
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
