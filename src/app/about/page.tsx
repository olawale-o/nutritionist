import { Achievements } from "./components/Achievements";
import { OurStory } from "./components/OurStory";
import { Welcome } from "./components/Welcome";
import { Footer } from "./components/Footer";

export default function Page() {
  return (
    <main>
      <div className="max-w-[1758px] mx-auto">
        <div className="px-4 xl:px-20 2xl:px-[162px]">
          <Welcome />
          <OurStory />
          <Achievements />
          <Footer />
        </div>
      </div>
    </main>
  );
}
