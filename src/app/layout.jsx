import "./globals.css";

export const metadata = {
  title: "Nereus AI Neptune App",
  description: "Nereus AI cloud app for data visualization",
};

import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
