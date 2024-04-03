import ThemeProvider from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { StoreProvider } from "@/store/store-provider";
import UserSessionProvider from "@/components/user-session-provider";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin",
});

export const metadata: Metadata = {
  title: "Stock E-learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <UserSessionProvider>
        <html lang="en" suppressHydrationWarning={true}>
          <body
            className={`${josefin.className} bg-white dark-bg bg-no-repeat bg-cover transition h-full`}
          >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
              <Toaster position="bottom-center" reverseOrder={false} />
            </ThemeProvider>
          </body>
        </html>
      </UserSessionProvider>
    </StoreProvider>
  );
}
