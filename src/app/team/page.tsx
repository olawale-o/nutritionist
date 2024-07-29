import { Header } from "@/components/Header";
import { JoinOurTeam } from "./components/JoinOurTeam";
import { Teams } from "./components/Teams";
import "./page.css";

export default function Team() {
  return (
    <main>
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
      <JoinOurTeam />
    </main>
  );
}
