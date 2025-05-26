import { Navbar, Sidebar } from "../components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <main className="ml-64 mt-[7vh] p-6 w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
