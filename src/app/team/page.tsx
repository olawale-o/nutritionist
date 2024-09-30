import { Header } from "@/components/Header";
import { Teams } from "./components/Teams";
import "./page.css";
import { CTA } from "@/components/common/CTA";

export default function Team() {
  return (
    <main>
      <div className="my-[50px] xl:my-[80px] 2xl:my-[100px]">
        <div className="max-w-[1758px] mx-auto">
          <div className="px-4 xl:px-20 2xl:px-[162px]">
            <Header
              heading="Meet Our Team of Experts"
              subHeading="Our team at Nutritionist is composed of highly skilled
                professionals who are passionate about helping you achieve
                your health and wellness goals. With a diverse range of
                expertise in nutrition, coaching, and support, our team is
                dedicated to providing you with the guidance and
                personalized care you need. Get to know the experts behind
                our success and discover how they can make a positive
                impact on your journey to better health."
            />
            <Teams />
            <CTA
              title="Join Our Team"
              description="We are always on the lookout for talented individuals who
            are enthusiastic about making a difference. Explore our
            career opportunities and join us in our mission to help
            people achieve their health and wellness goals."
              buttonLabel="Apply Now"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
