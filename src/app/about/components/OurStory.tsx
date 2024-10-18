"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import { stories } from "../data";

const container = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
  odd: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
    description: {
      hidden: { x: 20, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: 1,
        },
      },
    },
  },
  even: {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
    description: {
      hidden: { x: -20, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: 1,
        },
      },
    },
  },
};

const Story = ({ story }: { story: any }) => {
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
      variants={container}
      className="overflow-hidden w-full flex  border-l-[1px] border-t-[1px] border-r-[1px] border-solid border-green-90 last:border-b-[1px] first:rounded-tr-xl first:rounded-tl-xl last:rounded-br-xl last:rounded-bl-xl"
    >
      {story.id % 2 == 0 ? (
        <motion.div
          variants={container.even}
          className="flex flex-col lg:flex-row-reverse lg:items-stretch"
        >
          <div className="basis-1/2 overflow-hidden">
            <figure className="relative aspect-[3/2] h-full overflow-hidden">
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={`/assets/images/story_${story.id}.png`}
                  className="absolute inset-0 h-full object-contain block"
                />
              </div>
            </figure>
          </div>

          <div className="w-full pt-[11px] bg-green-70 lg:basis-[12px] lg:pt-0  self-stretch" />

          <motion.div
            variants={container.even.description}
            className="lg:flex basis-1/2"
          >
            <div className="bg-green-95 flex flex-grow">
              <div className="p-[30px] xl:p-[60px] 2xl:p-20">
                <div className="flex flex-col lg:items-end">
                  <h3 className="w-max text-grey-15 font-semibold leading:normal text-[20px] xl:text-2xl 2xl:text-[28px] relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[3px] after:bg-green-70">
                    {story.title}
                  </h3>
                  <div className="mt-5 xl:mt-[30px] 2xl:mt-10">
                    <div className="font-medium text-grey-20 text-sm leading-[21px] xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px] lg:text-end">
                      {story.text}
                    </div>
                  </div>
                  <div className="mt-5 xl:mt-[30px] 2xl:mt-10">
                    <div className="font-semibold text-grey-20 text-sm leading-[21px] xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                      {story.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          variants={container.odd}
          className="flex flex-col lg:flex-row lg:items-stretch"
        >
          <div className="basis-1/2 overflow-hidden">
            <figure className="relative aspect-[3/2] h-full overflow-hidden">
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={`/assets/images/story_${story.id}.png`}
                  className="absolute inset-0 h-full object-contain block"
                />
              </div>
            </figure>
          </div>

          <div className="w-full pt-[11px] bg-green-70 lg:basis-[12px] lg:pt-0  self-stretch" />

          <motion.div
            variants={container.odd.description}
            className="lg:flex basis-1/2"
          >
            <div className="bg-green-95">
              <div className="p-[30px] xl:p-[60px] 2xl:p-20">
                <div className="flex flex-col">
                  <h3 className="w-max text-grey-15 font-semibold leading:normal text-[20px] xl:text-2xl 2xl:text-[28px] relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[3px] after:bg-green-70">
                    {story.title}
                  </h3>
                  <div className="mt-5 xl:mt-[30px] 2xl:mt-10">
                    <div className="font-medium text-grey-20 text-sm leading-[21px] xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                      {story.text}
                    </div>
                  </div>
                  <div className="mt-5 xl:mt-[30px] 2xl:mt-10">
                    <div className="font-semibold text-grey-20 text-sm leading-[21px] xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                      {story.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

const OurStory = () => {
  return (
    <section>
      <div>
        <div className="mt-[50px] xl:mt-[100px] 2xl:mt-[150px]">
          <div>
            <h2 className="text-grey-15 text-[28px] xl:text-[38px] xl:leading-[57px] 2xl:text-[48px] 2xl:leading-[72px]  font-urbanist leading-[42px] font-bold text-center">
              Our Story
            </h2>
            <div className="mt-[6px] xl:max-w-[780px] 2xl:max-w-[996px] mx-auto">
              <div className="text-sm text-grey-20 leading-[21px] font-medium text-center xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                Welcome to Nutritionist, your partner in achieving optimal
                health through personalized nutrition coaching. Our certified
                nutritionists are here to guide you on your weight loss journey.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[50px] xl:mt-[60px] 2xl:mt-20">
          {stories.map((story, i: number) => (
            <Story key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { OurStory };
