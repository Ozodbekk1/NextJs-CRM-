/** @format */

import { Navbar, Sidebar } from "../components";
import { HydrationProvider } from "react-hydration-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <HydrationProvider>
          <Sidebar />
          <div className="lg:ml-64 transition-all duration-300">
            <Navbar />
            <main className="mt-[7vh] p-6 bg-background">{children}</main>
          </div>
        </HydrationProvider>
      </body>
    </html>
  );
}
