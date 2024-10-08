"use client";
import "./style.css";
import { motion } from "framer-motion";
const Header = ({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) => {
  return (
    <section>
      <div className="bg bg-green-95 rounded-tl-[10px] rounded-tr-[10px] border-solid border-[1px] border-green-85">
        <div className="p-[30px] xl:p-20 2xl:p-[100px]">
          <div className="flex flex-col items-center">
            <motion.div
              variants={{
                visible: {
                  opacity: 1,
                  translateY: 0,
                  transition: { duration: 0.5 },
                },
                hidden: { opacity: 0, translateY: -10 },
              }}
              initial="hidden"
              animate="visible"
              className="gradient w-[62px] h-[62px] rounded-[10px] p-[14px] border-solid border-[3px] border-white  flex items-center justify-center"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                variants={{
                  visible: {
                    opacity: 1,
                    rotate: 360,
                    transition: { duration: 0.5 },
                  },
                  hidden: { translateX: 0 },
                }}
                initial="hidden"
                animate="visible"
              >
                <path
                  d="M12.7674 10.3888C8.87465 6.60116 11.5561 0 16.9875 0C22.4188 0 25.1003 6.60116 21.2075 10.3888L16.9875 14.4947L12.7674 10.3888Z"
                  fill="#1A3129"
                />
                <path
                  d="M12.7928 23.6112C8.90004 27.3988 11.5815 34 17.0129 34C22.4442 34 25.1257 27.3988 21.2329 23.6112L17.0129 19.5053L12.7928 23.6112Z"
                  fill="#1A3129"
                />
                <path
                  d="M10.3888 21.2321C6.60116 25.1249 0 22.4434 0 17.012C0 11.5807 6.60116 8.89919 10.3888 12.792L14.4947 17.012L10.3888 21.2321Z"
                  fill="#1A3129"
                />
                <path
                  d="M23.6112 21.2081C27.3988 25.1009 34 22.4195 34 16.9881C34 11.5567 27.3988 8.87526 23.6112 12.7681L19.5053 16.9881L23.6112 21.2081Z"
                  fill="#1A3129"
                />
              </motion.svg>
            </motion.div>
            <motion.div
              variants={{
                visible: {
                  opacity: 1,
                  translateY: 0,
                  transition: { duration: 0.5 },
                },
                hidden: { opacity: 0, translateY: -10 },
              }}
              initial="hidden"
              animate="visible"
              className="mt-[30px] xl:mt-[60px] 2xl:mt-20"
            >
              <h1 className="text-[28px] leading-[42px] font-semibold text-grey-15 text-center xl:text-[38px] xl:leading-[47px] 2xl:text-5xl 2xl:leading-[72px]">
                {heading}
              </h1>
            </motion.div>
            <div className="mt-[6px] xl:mt-[10px] 2xl:mt-5">
              <motion.div
                variants={{
                  visible: {
                    opacity: 1,
                    translateY: 0,
                    transition: { duration: 0.5 },
                  },
                  hidden: { opacity: 0, translateY: 10 },
                }}
                initial="hidden"
                animate="visible"
                className="text-grey-20 text-sm font-medium leading-[21px] text-center xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]"
              >
                {subHeading}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Header };
