import { ToastContainer, Zoom } from "react-toastify";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import "@/src/styles/globals.css";
import TanstackQueryProvider from "@/src/providers/TanstackQueryProvider";

export const metadata = {
  title: "تورهای گردشگری | تورینو",
  description: "لیست تورهای داخلی و خارجی با بهترین قیمت"
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <TanstackQueryProvider>
          <Header />
          {children}
          <Footer />
        </TanstackQueryProvider>
        <ToastContainer position="top-right" rtl={true} theme="light" transition={Zoom} autoClose={5000} />
      </body>
    </html>
  );
}
