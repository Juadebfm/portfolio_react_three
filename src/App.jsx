import Education from "./components/Education";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function App() {
  return (
    <div className="font-quick overflow-x-hidden text-[18px]">
      <Navbar />
      <Hero />
      <Services />
      <Education/>
    </div>
  );
}
