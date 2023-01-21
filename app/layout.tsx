import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="overflow-x-hidden bg-gray-900 text-white">
        {children}
      </body>
    </html>
  );
}
