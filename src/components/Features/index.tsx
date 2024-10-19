"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { animation } from "./config/animation";
import { Svg } from "../Svg";
import { Feature } from "./type";
import { features } from "./data";

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={controls}
      variants={feature.id % 2 === 0 ? animation.even : animation.odd}
      className="col-span-1"
    >
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
    </motion.div>
  );
};

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
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {features.map((feature: Feature, i: number) => (
            <FeatureCard feature={feature} key={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { Features };
