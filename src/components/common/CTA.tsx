"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";

const CTA = ({
  title,
  description,
  buttonLabel,
}: {
  title: string;
  description: string;
  buttonLabel: string;
}) => {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });
  return (
    <section ref={container}>
      <div className="my-[50px] xl:my-[100px] 2xl:my-[150px]">
        <div className="relative p-10 rounded-[10px] border-solid border-[1px] border-green-85 bg-green-95 overflow-hidden xl:p-[60px] 2xl:p-20">
          <div className="absolute -left-[50px] -top-[30px]">
            <figure>
              <img src="/assets/images/team-zigzag.svg" />
            </figure>
          </div>
          <div className="absolute -right-[30px] -bottom-[10px] z-10">
            <figure>
              <img src="/assets/images/team-flower.svg" />
            </figure>
          </div>
          <div className="relative z-20 xl:flex xl:flex-row xl:gap-[150px]">
            <div
              className=""
              style={{
                transform: isInView ? "none" : "translateX(-10px)",
                opacity: isInView ? "1" : "0",
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <div>
                <h2 className="text-grey-15 text-[22px] xl:text-[26px] xl:leading-[39px] 2xl:text-[34px] 2xl:leading-[51px]  font-urbanist leading-[33px] font-semibold text-center xl:text-start">
                  {title}
                </h2>
                <div className="mt-[6px] xl:max-w-[780px] 2xl:max-w-[996px] mx-auto">
                  <div className="text-sm text-grey-20 leading-[21px] font-medium text-center xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px] xl:text-start">
                    {description}
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                transform: isInView ? "none" : "translateX(10px)",
                opacity: isInView ? "1" : "0",
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              className="mt-5"
            >
              <button className="rounded-[6px] bg-green-70 inline-flex py-[14px] px-6 text-grey-15 text-sm leading-normal font-semibold w-full justify-center 2xl:text-lg 2xl:leading-normal whitespace-nowrap">
                {buttonLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CTA };
