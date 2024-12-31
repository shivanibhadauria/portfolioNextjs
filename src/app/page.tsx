import { HeroSection } from "@/sections/Hero";
import { Header } from "../sections/Header";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
export default function Home() {
  return (
    <div>
      <h1>
        <div>
          <Header />
          <HeroSection />
          <ProjectsSection />
          <TapeSection />
          <TestimonialsSection />
        </div>
      </h1>
    </div>
  );
}
