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
          <main className="ml-64 mt-[7vh] p-6 bg-white dark:bg-[#16151C]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
