import { features, basic } from "../data/prices";

const Features = () => {
  return (
    <section>
      <div className="overflow-x-scroll mt-[50px] xl:mt-[80px] 2xl:mt-[100px]">
        <div className=" min-w-max lg:min-w-fit bg-green-95 rounded-xl border-solid border-[1px] border-green-85">
          <div className="p-[30px] xl:p-[50px]">
            <div className="grid grid-cols-5">
              <div className="col-span-2 border-r-[1px] border-green-80 border-solid ">
                <div className="pt-[30px] pe-[30px]">
                  <div className="rounded-lg bg-green-20 py-5 px-4">
                    <span className="text-white font-medium text-[20px] leading-[30px] 2xl:text-[22px] 2xl:leading-[33px]">
                      Features
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-1 border-r-[1px] border-green-80 border-solid ">
                <div className="pt-[30px] px-4">
                  <div className="rounded-lg bg-green-20 py-4 px-6 2xl:py-5 2xl:px-[30px]">
                    <span className="text-white font-medium text-[20px] leading-[30px] 2xl:text-[22px] 2xl:leading-[33px]">
                      Basic Plan
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-1 border-r-[1px] border-green-80 border-solid ">
                <div className="pt-[30px] px-4">
                  <div className="rounded-lg bg-green-20 py-4 px-6 2xl:py-5 2xl:px-[30px]">
                    <span className="text-white font-medium text-[20px] leading-[30px] 2xl:text-[22px] 2xl:leading-[33px]">
                      Premium Plan
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="pt-[30px] px-4">
                  <div className="rounded-lg bg-green-20 py-4 px-6 2xl:py-5 2xl:px-[30px]">
                    <span className="text-white font-medium text-[20px] leading-[30px] 2xl:text-[22px] 2xl:leading-[33px]">
                      Ultimate Plan
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {features.map((feature, i) => {
                return (
                  <div
                    key={i}
                    className={`border-b-[1px] border-solid border-green-80 last:border-none`}
                  >
                    <div className="grid grid-cols-5">
                      <div className="col-span-2 border-r-[1px] border-green-80 border-solid pb-[50px] pt-[50px]">
                        {feature.title}
                      </div>
                      <div className="col-span-1 flex justify-center items-center border-green-80 border-solid border-r-[1px] pb-[50px] pt-[50px]">
                        {feature.plans.Basic ? (
                          <div className="w-10 h-10 bg-green-70 rounded-lg grid place-items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.715 4.98396C21.1103 5.2852 21.1867 5.84992 20.8854 6.24529L11.2854 18.8453C11.128 19.0519 10.8891 19.1804 10.6299 19.1978C10.3708 19.2153 10.1168 19.1199 9.93314 18.9362L4.53314 13.5362C4.18166 13.1848 4.18166 12.6149 4.53314 12.2635C4.88461 11.912 5.45446 11.912 5.80593 12.2635L10.4777 16.9353L19.4536 5.15441C19.7549 4.75904 20.3196 4.68273 20.715 4.98396Z"
                                fill="#262626"
                              />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-10 h-10 bg-green-90 rounded-lg grid place-items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                            >
                              <path
                                d="M8.20437 6.2636C7.85289 5.91213 7.28304 5.91213 6.93157 6.2636C6.5801 6.61508 6.5801 7.18492 6.93157 7.5364L11.3952 12L6.93157 16.4636C6.5801 16.8151 6.5801 17.3849 6.93157 17.7364C7.28304 18.0879 7.85289 18.0879 8.20437 17.7364L12.668 13.2728L17.1316 17.7364C17.483 18.0879 18.0529 18.0879 18.4044 17.7364C18.7558 17.3849 18.7558 16.8151 18.4044 16.4636L13.9408 12L18.4044 7.5364C18.7558 7.18492 18.7558 6.61508 18.4044 6.2636C18.0529 5.91213 17.483 5.91213 17.1316 6.2636L12.668 10.7272L8.20437 6.2636Z"
                                fill="#262626"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="col-span-1 flex justify-center items-center border-green-80 border-solid border-r-[1px] pb-[50px] pt-[50px]">
                        {feature.plans.Premium ? (
                          <div className="w-10 h-10 bg-green-70 rounded-lg grid place-items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.715 4.98396C21.1103 5.2852 21.1867 5.84992 20.8854 6.24529L11.2854 18.8453C11.128 19.0519 10.8891 19.1804 10.6299 19.1978C10.3708 19.2153 10.1168 19.1199 9.93314 18.9362L4.53314 13.5362C4.18166 13.1848 4.18166 12.6149 4.53314 12.2635C4.88461 11.912 5.45446 11.912 5.80593 12.2635L10.4777 16.9353L19.4536 5.15441C19.7549 4.75904 20.3196 4.68273 20.715 4.98396Z"
                                fill="#262626"
                              />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-10 h-10 bg-green-90 rounded-lg grid place-items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                            >
                              <path
                                d="M8.20437 6.2636C7.85289 5.91213 7.28304 5.91213 6.93157 6.2636C6.5801 6.61508 6.5801 7.18492 6.93157 7.5364L11.3952 12L6.93157 16.4636C6.5801 16.8151 6.5801 17.3849 6.93157 17.7364C7.28304 18.0879 7.85289 18.0879 8.20437 17.7364L12.668 13.2728L17.1316 17.7364C17.483 18.0879 18.0529 18.0879 18.4044 17.7364C18.7558 17.3849 18.7558 16.8151 18.4044 16.4636L13.9408 12L18.4044 7.5364C18.7558 7.18492 18.7558 6.61508 18.4044 6.2636C18.0529 5.91213 17.483 5.91213 17.1316 6.2636L12.668 10.7272L8.20437 6.2636Z"
                                fill="#262626"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="col-span-1 flex justify-center items-center pb-[50px] pt-[50px]">
                        {feature.plans.Ultimate ? (
                          <div className="w-10 h-10 bg-green-70 rounded-lg grid place-items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.715 4.98396C21.1103 5.2852 21.1867 5.84992 20.8854 6.24529L11.2854 18.8453C11.128 19.0519 10.8891 19.1804 10.6299 19.1978C10.3708 19.2153 10.1168 19.1199 9.93314 18.9362L4.53314 13.5362C4.18166 13.1848 4.18166 12.6149 4.53314 12.2635C4.88461 11.912 5.45446 11.912 5.80593 12.2635L10.4777 16.9353L19.4536 5.15441C19.7549 4.75904 20.3196 4.68273 20.715 4.98396Z"
                                fill="#262626"
                              />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-10 h-10 bg-green-90 rounded-lg grid place-items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                            >
                              <path
                                d="M8.20437 6.2636C7.85289 5.91213 7.28304 5.91213 6.93157 6.2636C6.5801 6.61508 6.5801 7.18492 6.93157 7.5364L11.3952 12L6.93157 16.4636C6.5801 16.8151 6.5801 17.3849 6.93157 17.7364C7.28304 18.0879 7.85289 18.0879 8.20437 17.7364L12.668 13.2728L17.1316 17.7364C17.483 18.0879 18.0529 18.0879 18.4044 17.7364C18.7558 17.3849 18.7558 16.8151 18.4044 16.4636L13.9408 12L18.4044 7.5364C18.7558 7.18492 18.7558 6.61508 18.4044 6.2636C18.0529 5.91213 17.483 5.91213 17.1316 6.2636L12.668 10.7272L8.20437 6.2636Z"
                                fill="#262626"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Features };
