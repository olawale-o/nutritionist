import { Header } from "@/components/Header";
import { Support } from "./components/Support";
import { Contact } from "./components/Contact";
import { CTA } from "@/components/common/CTA";

export default function Page() {
  return (
    <main>
      <div className="max-w-[1758px] mx-auto">
        <div className="px-4 xl:px-20 2xl:px-[162px]">
          <div className="my-[50px] xl:my-[80px] 2xl:my-[100px]">
            <Header
              heading="Contact Us"
              subHeading="We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please don't hesitate to reach out to us using any of the following contact methods"
            />
            <Support />
            <Contact />
            <CTA
              description="Join us at Nutritionist and let us guide you on the path to a healthier and happier you."
              title="Are you ready to embark on a transformative journey towards better health and wellness?"
              buttonLabel="Join Us Now"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
