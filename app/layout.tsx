// import "./globals.css";
// import { Inter } from "next/font/google";
// import Providers from "./components/Providers";
// import Header from "./components/Header";
// import { NotificationProvider } from "./components/Notification";
// // import Header from "./components/Header";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "ImageKit Next.js Integration",
//   description: "Demo of ImageKit integration with Next.js",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//       <NotificationProvider>
//           <Providers>
//             <Header />
//             <main className="container mx-auto px-4 py-8">{children}</main>
//           </Providers>
//         </NotificationProvider>
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./components/Providers";
import Header from "./components/Header";
import { NotificationProvider } from "./components/Notification";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ImageKit Next.js Integration",
  description: "Demo of ImageKit integration with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white`}>
        <NotificationProvider>
          <Providers>
            <Header />
            <main className="container mx-auto px-4 py-12">
              {children}
            </main>
          </Providers>
        </NotificationProvider>
      </body>
    </html>
  );
}
