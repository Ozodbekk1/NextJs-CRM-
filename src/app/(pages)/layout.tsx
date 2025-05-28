import { Navbar, Sidebar } from "../components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      // className="min-h-screen relative overflow-x-hidden"
      // style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}
      >
        <Sidebar />
        <div className="lg:ml-64 transition-all duration-300">
          <Navbar />
          <main className="mt-[7vh] p-6 bg-background">{children}</main>
        </div>
      </body>
    </html>
  );
}
