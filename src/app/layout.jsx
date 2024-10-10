import "./globals.css";

export const metadata = {
  title: "Nereus AI Neptune App",
  description: "Nereus AI cloud app for data visualization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
