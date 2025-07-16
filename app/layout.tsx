import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SidebarToggle from "@/components/SidebarToggle";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduSponsor - School Admin Dashboard",
  description: "School sponsorship management system",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-50">
          <aside 
            className="fixed left-0 top-0 h-screen bg-white shadow-lg transition-all duration-300 ease-in-out z-40" 
            id="sidebar" 
            style={{ width: '240px', minWidth: '240px' }}
          >
            <Sidebar />
          </aside>
          <SidebarToggle />
          <div 
            className="flex-1 transition-all duration-300 ease-in-out" 
            id="main-content"
            style={{ marginLeft: '240px' }}
          >
            {/* Admin header shown everywhere except school details */}
            <div id="admin-header" data-supressed-on-school-details>
              <Header />
            </div>
            <main className="flex-1 overflow-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
