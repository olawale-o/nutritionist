import { Header } from "@/components/Header";
import { Blogs } from "./components/Blogs";

export default function Page() {
  return (
    <main>
      <div className="max-w-[1758px] mx-auto">
        <div className="px-4 xl:px-20 2xl:px-[162px]">
          <div className="my-[50px] xl:my-[80px] 2xl:my-[100px]">
            <Header
              heading="Our Blogs"
              subHeading="Welcome to the Blog section of Nutritionist, your trusted source for insightful articles, tips, and expert advice on nutrition and wellness. Here, we strive to provide you with engaging and informative content that will inspire and empower you to make informed decisions about your health. Explore our blog to discover a wealth of resources that cover a wide range of topics related to nutrition, fitness, and overall well-being."
            />
            <Blogs />
          </div>
        </div>
      </div>
    </main>
  );
}
