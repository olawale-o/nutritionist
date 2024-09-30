import { Achievements } from "./components/Achievements";
import { OurStory } from "./components/OurStory";
import { Welcome } from "./components/Welcome";
import { CTA } from "@/components/common/CTA";

const Intro = () => {
  return (
    <div className="mt-[30px] xl:mt-20 2xl:mt-[100px]">
      <div className="grid grid-cols-6 gap-[10.19px]">
        <div className="col-span-1 bg-green-80 h-[194px] rounded-lg"></div>
        <div className="col-span-1 bg-green-80 h-[194px] rounded-lg"></div>
        <div className="col-span-2 row-span-2 bg-green-80 h-full rounded-lg"></div>
        <div className="col-span-1 bg-green-80 h-[194px] rounded-lg"></div>
        <div className="col-span-1 bg-green-80 h-[194px] rounded-lg"></div>
        <div className="col-span-1 bg-green-80 h-[194px] rounded-lg"></div>
        <div className="col-span-1 bg-green-80 h-[194px] rounded-lg"></div>
        <div className="col-span-1 bg-green-80 h-[194px] rounded-lg"></div>
        <div className="col-span-1 bg-green-80 h-[194px] rounded-lg"></div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <main>
      <div className="max-w-[1758px] mx-auto">
        <div className="px-4 xl:px-20 2xl:px-[162px]">
          <Welcome />
          <OurStory />
          <Achievements />
          <CTA
            title="We Are Proud of Our Achievements"
            description="But our ultimate satisfaction comes from seeing our clients achieve their goals and live healthier, happier lives. Join Nutritionist today and embark on your own transformative journey towards optimal health and well-being."
            buttonLabel="Book a Demo"
          />
        </div>
      </div>
    </main>
  );
}
