import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Blog } from "@/components/Blog";
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Blog />
      <Pricing />
    </main>
  );
}
