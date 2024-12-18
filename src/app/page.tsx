import { HeroSection } from "@/sections/Hero";
import { Header } from "../sections/Header";
export default function Home() {
  return (
    <div>
      <h1>
        <div>
          <Header />
          <HeroSection />
        </div>
      </h1>
    </div>
  );
}
