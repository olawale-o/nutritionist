"use client";

import { Svg } from "../Svg";

type Feature = {
  id: number;
  title: string;
  summary: string;
  iconName: string;
};

const features: Feature[] = [
  {
    id: 1,
    title: "Personalized Nutrition Plans",
    summary:
      "Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.",
    iconName: "flower",
  },
  {
    id: 2,
    title: "Guidance from Certified Nutritionists",
    summary:
      "Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey. They will answer your questions, address your concerns, and keep you motivated as you work towards your goals.",
    iconName: "mortarboard",
  },
  {
    id: 3,
    title: "Food Tracking and Analysis",
    summary:
      "Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations.",
    iconName: "cutlery",
  },
  {
    id: 4,
    title: "Meal Planning and Recipes",
    summary:
      "Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals.",
    iconName: "planner",
  },
  {
    id: 5,
    title: "Lifestyle and Behavior Coaching",
    summary:
      "Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way.",
    iconName: "dumbell",
  },
  {
    id: 6,
    title: "Nutritional Education and Workshops",
    summary:
      "Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success.",
    iconName: "notepad",
  },
];

const Features = () => {
  return (
    <section>
      <div className="mt-[50px]">
        <div>
          <h2 className="text-grey-15 text-[28px] xl:text-[38px] xl:leading-[57px] 2xl:text-[48px] 2xl:leading-[72px]  font-urbanist leading-[42px] font-bold text-center">
            Features
          </h2>
          <div className="mt-[6px] xl:max-w-[780px] 2xl:max-w-[996px] mx-auto">
            <div className="text-sm text-grey-20 leading-[21px] font-medium text-center xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
              Welcome to the Feature Section of Nutritionist, your ultimate
              destination for all things nutrition and wellness.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature: Feature, i: number) => (
            <div className="col-span-1" key={i}>
              <div className="bg-green-95 border-solid border-[1px] border-green-85 rounded-[10px] w-full">
                <div className="p-[30px]">
                  <div className="flex gap-[10px] items-center">
                    <div className="rounded-[6px] p-3 bg-green-70 w-[60px] h-[60px] flex items-center justify-center">
                      <Svg iconName={feature.iconName} />
                    </div>
                    <div className="text-grey-15 text-lg font-semibold leading-[27px] xl:text-[20px] xl:leading-[30px] 2xl:text-2xl 2xl:leading-[36px]">
                      {feature.title}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-sm font-medium leading-[21px] text-grey-20 xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                      {feature.summary}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Features };
