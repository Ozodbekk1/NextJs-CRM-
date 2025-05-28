import { Navbar, Sidebar } from "../components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen relative overflow-x-hidden">
        <Sidebar />
        <div className="lg:ml-64 transition-all duration-300">
          <Navbar />
          <main className="mt-[7vh] p-6 bg-white dark:bg-[#16151C]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
