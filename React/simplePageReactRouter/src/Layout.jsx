import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-4 py-8 bg-gray-50">
        <Outlet />
      </main>
      <Footer />
    </>
    
  );
}
