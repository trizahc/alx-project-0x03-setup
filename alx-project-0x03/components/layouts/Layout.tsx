import { LayoutProps } from "@/interface";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-gray-50">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;