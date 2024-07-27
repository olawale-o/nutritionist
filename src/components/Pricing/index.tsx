const plans = [
  {
    id: 1,
    title: "Basic Plan",
    desc: "Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.",
    price: "49",
  },
  {
    id: 2,
    title: "Premium Plan",
    desc: "Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations.",
    price: "79",
  },
  {
    id: 3,
    title: "Ultimate Plan",
    desc: "Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.",
    price: "99",
  },
];
const Pricing = () => {
  return (
    <section>
      <div className="max-w-[1758px] mx-auto">
        <div className="px-4 xl:px-20 2xl:px-[162px]">
          <div className="mt-[50px]">
            <div>
              <h2 className="text-grey-15 text-[28px] xl:text-[38px] xl:leading-[57px] 2xl:text-[48px] 2xl:leading-[72px]  font-urbanist leading-[42px] font-bold text-center">
                Our Pricing
              </h2>
              <div className="mt-[6px] xl:max-w-[780px] 2xl:max-w-[996px] mx-auto">
                <div className="text-sm text-grey-20 leading-[21px] font-medium text-center xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                  We outline our flexible and affordable options to support you
                  on your journey to optimal health and nutrition. We believe
                  that everyone deserves access to personalized nutrition
                  guidance and resources
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[50px]">
            <div id="tab-container" className="">
              <ul className="list-none flex items-center w-fit mx-auto p-[10px] rounded-lg border-solid border-[1px] border-green-80">
                <li>
                  <button className="inline-flex rounded-[6px] bg-green-20 py-[10px] px-6 text-white text-sm font-semibold leading-[21px]">
                    Monthly
                  </button>
                </li>
                <li>
                  <button className="inline-flex rounded-[6px] bg-transparent py-[10px] px-6 text-grey-30 text-sm font-semibold leading-[21px]">
                    Yearly
                  </button>
                </li>
                <li></li>
              </ul>
              <div className="mt-[10px] w-fit mx-auto">
                <div className="text-grey-30 text-base font-medium">
                  Save 50% on Yearly
                </div>
              </div>
              <div className="mt-[30px]">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 2xl:gap-[30px]">
                  {plans.map((plan) => (
                    <div key={plan.id} className="col-span-1">
                      <div className="bg-green-95 border-solid border-[1px] border-green-90 rounded-[10px]">
                        <div className="p-[30px] xl:p-10 2xl:p-[50px]">
                          <div>
                            <div>
                              <div className="text-grey-15 text-[22px] font-semibold  leading-[33px] xl:text-2xl xl:leading-9 2xl:text-[30px] 2xl:leading-[45px]">
                                {plan.title}
                              </div>
                              <div className="text-grey-30 text-sm font-medium leading-[21px] xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                                Up to 50% off on Yearly Plan
                              </div>
                            </div>
                            <div className="mt-6 xl:mt-[30px] 2xl:mt-10">
                              <div className="text-grey-15 text-sm font-medium leading-[21px] xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                                {plan.desc}
                              </div>
                            </div>
                            <div className="mt-6 xl:mt-[30px] 2xl:mt-10">
                              <div>
                                <div className="">
                                  <span className="text-green-25 text-[40px] font-bold leading-[35px] xl:text-[40px] xl:leading-[35px] 2xl:text-[50px] 2xl:leading-[43.761px]">
                                    ${plan.price}
                                  </span>{" "}
                                  <span className="text-base font-medium text-grey-30 xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                                    /month
                                  </span>
                                </div>
                                <div className="mt-6">
                                  <button className="rounded-[6px] bg-green-70 inline-flex py-[14px] px-6 text-grey-15 text-sm leading-normal font-semibold w-full justify-center 2xl:text-lg 2xl:leading-normal">
                                    Choose Plan
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing };
