import { Header } from "@/components/Header";
import { PricingList } from "./components/PricingList";
import { Faqs } from "./components/Faqs";
import { Features } from "./components/Features";

export default function Page() {
  return (
    <main>
      <div className="max-w-[1758px] mx-auto">
        <div className="px-4 xl:px-20 2xl:px-[162px]">
          <div className="my-[50px] xl:my-[80px] 2xl:my-[100px]">
            <Header
              heading="Our Pricing"
              subHeading="At Nutritionist, we offer flexible pricing options to accommodate your unique requirements and budget. Our goal is to provide you with exceptional personalized nutrition coaching that is accessible and tailored to your needs. Choose from our three plans below and take the first step towards a healthier lifestyle"
            />
            <PricingList />
            <Features />
            <Faqs />
          </div>
        </div>
      </div>
    </main>
  );
}
