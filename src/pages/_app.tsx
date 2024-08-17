import MainHeader from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import localFont from "next/font/local";

export const iranYekan = localFont({
  src: [
    {
      path: "../../public/fonts/IRANYekanRegular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={iranYekan.className}>
        <MainHeader />
        <div className="main">
          <Component {...pageProps} />
        </div>
      </main>
    </QueryClientProvider>
  );
}
