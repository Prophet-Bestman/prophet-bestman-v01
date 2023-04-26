import NavProvider from "@/contexts/NavContext";
import { MainLayout } from "@/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "react-modern-drawer/dist/index.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </NavProvider>
  );
}
