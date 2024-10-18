import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { BlogPage } from "@/components/Blog";
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <main>
      <div className="max-w-[1758px] mx-auto">
        <div className="px-4 xl:px-20 2xl:px-[162px]">
          <div className="mn-[50px] xl:mb-[80px] 2xl:mb-[100px]">
            <Hero />
            <Features />
            <BlogPage />
            <Pricing />
          </div>
        </div>
      </div>
    </main>
  );
}
