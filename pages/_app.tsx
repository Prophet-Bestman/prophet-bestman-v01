import type { AppProps } from "next/app";
import "react-modern-drawer/dist/index.css";
import { QueryClient, QueryClientProvider } from "react-query";

import NavProvider from "@/contexts/NavContext";
import { MainLayout } from "@/layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <NavProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </NavProvider>
    </QueryClientProvider>
  );
}
