import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="max-w-[1758px] mx-auto">
        <div className="xl:pe-20 2xl:pe-[162px]">
          <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-10 2xl:gap-[50px]">
            <div className="col-span-1">
              <figure className="relative aspect-square rounded-br-[30px] rounded-bl-[30px] xl:rounded-bl-none">
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src="/assets/images/lady.png"
                    className="rounded-br-[30px] rounded-bl-[30px] xl:rounded-bl-none absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </figure>
            </div>
            <div className="relative col-span-1 -top-[25px] xl:top-0 xl:flex xl:flex-col xl:justify-center">
              <div className="xl:hidden">
                <div className="flex justify-center w-fit mx-auto rounded-[58px] -space-x-[17px] rtl:space-x-reverse py-[6px] px-2 border-[1px] border-solid border-green-70 bg-green-97">
                  <div className="w-10 h-10 rounded-full">
                    <figure className="relative aspect-square w-ful h-ful">
                      <div className="absolute inset-0 w-full h-full rounded-full">
                        <img
                          src="/assets/images/customer_1.png"
                          className="absolute w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </figure>
                  </div>
                  <div className="w-10 h-10 rounded-full">
                    <figure className="relative aspect-square w-ful h-ful">
                      <div className="absolute inset-0 w-full h-full rounded-full">
                        <img
                          src="/assets/images/customer_2.png"
                          className="absolute w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </figure>
                  </div>
                  <div className="w-10 h-10 rounded-full">
                    <figure className="relative aspect-square w-ful h-ful">
                      <div className="absolute inset-0 w-full h-full rounded-full">
                        <img
                          src="/assets/images/customer_3.png"
                          className="absolute w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </figure>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="font-urbanist text-base text-center">
                    <span className="font-semibold text-green-40">430+</span>{" "}
                    <span className="font-bold text-green-20">
                      Happy Customers
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-[30px]">
                  <div className="flex flex-col items-center xl:items-start">
                    <div className="text-green-15 text-lg font-urbanist font-semibold leading-normal text-center relative before:content-[''] before:absolute before:-bottom-[2px] before:left-0 before:w-full before:h-[3px] before:bg-green-70">
                      Transform Your ❤️ Health with
                    </div>

                    <div className="mt-[10px]">
                      <div className="font-urbanist text-green-15  font-bold leading-normal text-center text-[38px] xl:text-5xl xl:text-left">
                        Personalized Nutrition Coaching
                      </div>
                    </div>
                    <div className="mt-4 2xl:mt-5">
                      <div className="text-sm font-medium leading-[21px] text-[#333333] text-center xl:text-base xl:text-left xl:leading-6">
                        Welcome to Nutritionist, your partner in achieving
                        optimal health through personalized nutrition coaching.
                        Our certified nutritionists are here to guide you on
                        your weight loss journey, providing customized plans and
                        ongoing support. Start your transformation today and
                        experience the power of personalized nutrition coaching.
                      </div>
                    </div>
                    <div className="mt-[30px] 2xl:mt-[50px]">
                      <div className="flex gap-[14px] justify-center">
                        <Link
                          role="button"
                          href="/"
                          className="bg-green-70 px-4 py-3 inline-flex text-[#262626] text-sm font-urbanist font-semibold leading-[21px] rounded-[6px]"
                        >
                          Get Starter Today
                        </Link>
                        <Link
                          role="button"
                          href="/"
                          className="bg-green-95 px-4 py-3 inline-flex text-[#262626] text-sm font-urbanist font-semibold leading-[21px] rounded-[6px] border-solid border-[1px] border-green-85"
                        >
                          Book Demo
                        </Link>
                      </div>
                    </div>
                    <div className="hidden xl:block">
                      <div className="mt-[50px] 2xl:mt-[70px]">
                        <div className="flex items-center">
                          <div className="flex justify-center w-fit mx-auto rounded-[58px] -space-x-[17px] rtl:space-x-reverse py-[6px] px-2 border-[1px] border-solid border-green-70 bg-green-97">
                            <div className="w-10 h-10 rounded-full">
                              <figure className="relative aspect-square w-ful h-ful">
                                <div className="absolute inset-0 w-full h-full rounded-full">
                                  <img
                                    src="/assets/images/customer_1.png"
                                    className="absolute w-full h-full object-cover rounded-full"
                                  />
                                </div>
                              </figure>
                            </div>
                            <div className="w-10 h-10 rounded-full">
                              <figure className="relative aspect-square w-ful h-ful">
                                <div className="absolute inset-0 w-full h-full rounded-full">
                                  <img
                                    src="/assets/images/customer_2.png"
                                    className="absolute w-full h-full object-cover rounded-full"
                                  />
                                </div>
                              </figure>
                            </div>
                            <div className="w-10 h-10 rounded-full">
                              <figure className="relative aspect-square w-ful h-ful">
                                <div className="absolute inset-0 w-full h-full rounded-full">
                                  <img
                                    src="/assets/images/customer_3.png"
                                    className="absolute w-full h-full object-cover rounded-full"
                                  />
                                </div>
                              </figure>
                            </div>
                          </div>
                          <div className="ml-[6px]">
                            <div className="font-urbanist text-base text-center">
                              <span className="font-semibold text-green-40">
                                430+
                              </span>{" "}
                              <span className="font-bold text-green-20">
                                Happy Customers
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export { Hero };
