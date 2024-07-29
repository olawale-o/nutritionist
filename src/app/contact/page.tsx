import { Header } from "@/components/Header";
import { Support } from "./components/Support";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Page() {
  return (
    <main>
      <Header
        heading="Contact Us"
        subHeading="We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please don't hesitate to reach out to us using any of the following contact methods"
      />
      <Support />
      <Contact />
      <Footer />
    </main>
  );
}
