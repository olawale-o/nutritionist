import { faqs } from "../data/prices";

const Faqs = () => {
  return (
    <section>
      <div className="mt-[50px] xl:mt-[80px] 2xl:mt-[100px]">
        <div>
          <h2 className="text-grey-15 text-[28px] xl:text-[38px] xl:leading-[57px] 2xl:text-[48px] 2xl:leading-[72px]  font-urbanist leading-[42px] font-bold text-center">
            FAQ
          </h2>
          <div className="mt-[6px] xl:max-w-[780px] 2xl:max-w-[996px] mx-auto">
            <div className="text-sm text-grey-20 leading-[21px] font-medium text-center xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
              We address commonly asked questions and provide comprehensive
              answers to help you navigate your way through your nutrition and
              wellness journey.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[60px] xl:mt-[60px] 2xl:mt-20">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="col-span-1 lg:col-span-2">
            <div className="rounded-xl border-solid border-[1px] border-green-85 bg-green-95">
              <div className="p-[30px] xl:p-[50px] 2xl:p-[60px]">
                {faqs.map((faq, i) => (
                  <div key={i}>
                    <div className="flex items-start">
                      <div>
                        <div className="text-grey-15 font-medium text-base xl:text-lg xl:leading-normal 2xl:text-[20px]">
                          {faq}
                        </div>

                        <div className="xl:mt-[14px] 2xl:mt-5">
                          <div className="text-grey-20 font-medium text-sm leading-[21px] xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                            Personalized nutrition coaching involves creating a
                            customized nutrition plan based on your unique
                            goals, preferences, and dietary requirements. Our
                            team of experts will work closely with you to
                            develop a plan that fits your lifestyle and helps
                            you achieve optimal health and wellness.
                          </div>
                        </div>
                      </div>
                      <button className="rounded-[4px] p-3 bg-green-20 inline-flex justify-center items-center self-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M10.75 4.75C10.75 4.33579 10.4142 4 10 4C9.58579 4 9.25 4.33579 9.25 4.75V9.25H4.75C4.33579 9.25 4 9.58579 4 10C4 10.4142 4.33579 10.75 4.75 10.75L9.25 10.75V15.25C9.25 15.6642 9.58579 16 10 16C10.4142 16 10.75 15.6642 10.75 15.25V10.75L15.25 10.75C15.6642 10.75 16 10.4142 16 10C16 9.58579 15.6642 9.25 15.25 9.25H10.75V4.75Z"
                            fill="white"
                          />
                        </svg>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M7.5364 6.2636C7.18492 5.91213 6.61508 5.91213 6.2636 6.2636C5.91213 6.61508 5.91213 7.18492 6.2636 7.5364L10.7272 12L6.2636 16.4636C5.91213 16.8151 5.91213 17.3849 6.2636 17.7364C6.61508 18.0879 7.18492 18.0879 7.5364 17.7364L12 13.2728L16.4636 17.7364C16.8151 18.0879 17.3849 18.0879 17.7364 17.7364C18.0879 17.3849 18.0879 16.8151 17.7364 16.4636L13.2728 12L17.7364 7.5364C18.0879 7.18492 18.0879 6.61508 17.7364 6.2636C17.3849 5.91213 16.8151 5.91213 16.4636 6.2636L12 10.7272L7.5364 6.2636Z" fill="white"/>
                        </svg> */}
                      </button>
                    </div>
                    {i !== faqs.length - 1 && (
                      <div className="w-full bg-green-85 h-px my-[22px]  2xl:my-7" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="rounded-xl bg-green-95 border-solid border-[1px] border-green-85">
              <div className="py-[50px] px-6 xl:py-[60px]">
                <div className="flex flex-col items-center gap-[30px]">
                  <div className="w-20 h-20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                    >
                      <path
                        d="M30.041 24.4441C20.8815 15.5321 27.1909 0 39.9706 0C52.7502 0 59.0596 15.5322 49.9001 24.4441L39.9706 34.1053L30.041 24.4441Z"
                        fill="#CBEA7B"
                      />
                      <path
                        d="M30.0996 55.5559C20.9401 64.4679 27.2495 80 40.0292 80C52.8088 80 59.1182 64.4678 49.9587 55.5559L40.0292 45.8947L30.0996 55.5559Z"
                        fill="#CBEA7B"
                      />
                      <path
                        d="M24.4441 49.958C15.5321 59.1175 0 52.8081 0 40.0285C0 27.2488 15.5322 20.9394 24.4441 30.099L34.1053 40.0285L24.4441 49.958Z"
                        fill="#CBEA7B"
                      />
                      <path
                        d="M55.5559 49.9004C64.4679 59.0599 80 52.7505 80 39.9709C80 27.1912 64.4678 20.8818 55.5559 30.0413L45.8947 39.9709L55.5559 49.9004Z"
                        fill="#CBEA7B"
                      />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div>Ask your question</div>
                    <div className="mt-[6px]">
                      <div>Feel Free to Ask questions on anytime</div>
                    </div>
                  </div>
                  <div>
                    <button className="rounded-[6px] bg-green-70 inline-flex py-[14px] px-6 text-grey-15 text-sm leading-normal font-semibold w-full justify-center 2xl:text-lg 2xl:leading-normal">
                      Ask A Question
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Faqs };
