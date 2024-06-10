import Image from "next/image";
import Navbar from "./Components/Navbar/page";
import Dashboard from "./pages/Dashboard";

export default function Home() {
  
  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
}
