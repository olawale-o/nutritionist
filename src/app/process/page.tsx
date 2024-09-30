import { Header } from "@/components/Header";
import "./page.css";
import { CTA } from "@/components/common/CTA";

const Process = () => {
  return (
    <section>
      <div className="mt-[50px]">
        <div>
          <h2 className="text-grey-15 text-[28px] xl:text-[38px] xl:leading-[57px] 2xl:text-[48px] 2xl:leading-[72px]  font-urbanist leading-[42px] font-bold text-center">
            How It Works
          </h2>
          <div className="mt-[6px] xl:max-w-[780px] 2xl:max-w-[996px] mx-auto">
            <div className="text-sm text-grey-20 leading-[21px] font-medium text-center xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
              We provide a step-by-step guide on how to get started on your
              journey towards better health and nutrition. We are here to
              simplify the process and make it easy for you to navigate our
              platform and access the resources you need to achieve your goals.
              Here{`'`}s how it works
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[50px] xl:mt-[60px] 2xl:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] xl:gap-10 2xl:gap-[50px] a">
          <div className="flex col-span-1 relative z-50 before:content-['01'] before:absolute before:left-0 before:text-[80px] before:leading-[120px] before:text-green-40 before:z-10 xl:before:text-[100px] xl:before:leading-[150px] 2x:before:text-[150px] 2xl:before:leading-[225px]">
            <div className="relative z-50 mt-[72px] xl:mt-[92px] 2xl:mt-[135px] flex">
              <div className="rounded-[10px] bg-green-95 border-solid border-[1px] border-green-90 h-full">
                <div className="p-[30px] xl:p-10 2xl:p-[50px]">
                  <div>
                    <div className="flex items-center gap-[10px]">
                      <div className="w-[66px] h-[66px] rounded-[6px] bg-green-70 p-[14px] grid place-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="16"
                          viewBox="0 0 26 16"
                          fill="none"
                        >
                          <path
                            d="M17.1135 14.56L9.29559 1.25337C8.96805 0.694452 8.50945 0.529642 7.98532 0.579801C7.55585 0.629961 6.98811 0.852097 6.46397 1.15305C4.64419 2.19208 3.95266 3.79002 2.18381 4.79322C1.41222 5.23032 0.742528 5.39513 0.422243 5.57427C0.0437239 5.78924 -0.123698 6.14753 0.101958 6.54164L3.0282 11.5361C3.35576 12.0951 3.82163 12.2527 4.33846 12.2025C4.76793 12.1524 5.34299 11.9302 5.85981 11.6221C7.68691 10.5831 8.37112 8.99228 10.14 7.98195C10.7296 7.6523 11.2683 7.4732 11.6104 7.34418L16.1599 15.1046C16.3128 15.3697 16.6403 15.4557 16.9096 15.3053C17.1644 15.1548 17.259 14.818 17.1135 14.56ZM13.503 6.70648L14.1363 7.78132L14.391 7.34418C14.7332 7.4732 15.2646 7.6523 15.8614 7.98195C17.623 8.99228 18.3146 10.5831 20.1343 11.6221C20.6585 11.9302 21.2263 12.1524 21.6557 12.2025C22.1798 12.2527 22.6384 12.0951 22.9659 11.5361L25.8995 6.54164C26.1252 6.14753 25.9504 5.78924 25.5792 5.57427C25.2589 5.39513 24.582 5.23032 23.8104 4.79322C22.0415 3.79002 21.3573 2.19208 19.5375 1.15305C19.0134 0.852097 18.4383 0.629961 18.0161 0.579801C17.492 0.529642 17.0334 0.694452 16.7058 1.25337L13.503 6.70648ZM12.4985 10.5759L11.8579 9.49387L8.88799 14.56C8.73512 14.818 8.83699 15.1548 9.09179 15.3053C9.36112 15.4557 9.68866 15.3697 9.83426 15.1046L12.4985 10.5759Z"
                            fill="#262626"
                          />
                        </svg>
                      </div>
                      <div className="text-grey-15 text-lg font-semibold leading-[27px] xl:text-[20px] xl:leading-[30px] 2xl:text-2xl 2xl:leading-9">
                        Initial Consultation
                      </div>
                    </div>
                    <div className="mt-4 xl:mt-5">
                      <div className="text-grey-30 text-sm font-medium leading-[21px] xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                        We start by scheduling an initial consultation, either
                        in person or through a convenient online meeting. During
                        this session, we will discuss your health history,
                        lifestyle, goals, and any specific dietary requirements.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex col-span-1 relative z-50 before:content-['02'] before:absolute before:left-0 before:text-[80px] before:leading-[120px] before:text-green-40 before:z-10 xl:before:text-[100px] xl:before:leading-[150px] 2x:before:text-[150px] 2xl:before:leading-[225px]">
            <div className="relative z-50 mt-[72px] xl:mt-[92px] 2xl:mt-[135px] flex">
              <div className="rounded-[10px] bg-green-95 border-solid border-[1px] border-green-90">
                <div className="p-[30px] xl:p-10 2xl:p-[50px]">
                  <div>
                    <div className="flex items-center gap-[10px]">
                      <div className="w-[66px] h-[66px] rounded-[6px] bg-green-70 p-[14px] grid place-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                        >
                          <path
                            d="M0 10.6356C0 11.6694 0.631139 12.3006 1.6649 12.3006H23.8091C24.8429 12.3006 25.4849 11.6694 25.4849 10.6356V10.1024C25.4849 9.07955 24.8429 8.42666 23.8091 8.42666H1.6649C0.631139 8.42666 0 9.07955 0 10.1024V10.6356ZM6.92075 24.2487H18.5642C21.0778 24.2487 21.8614 22.7796 22.1769 21.2017L23.6894 13.7913H1.80636L3.30804 21.2017C3.6236 22.7796 4.40708 24.2487 6.92075 24.2487ZM7.62807 22.3769C7.21456 22.4423 6.90988 22.2247 6.84458 21.8546L5.90876 16.3812C5.84347 16.0112 6.08287 15.7174 6.49637 15.6412C6.90988 15.5868 7.22545 15.7936 7.29073 16.1635L8.21568 21.6371C8.27009 22.007 8.05246 22.3008 7.62807 22.3769ZM11.0776 22.3661C10.6641 22.3879 10.3593 22.1376 10.3376 21.7568L9.97852 16.3486C9.95679 15.9677 10.2288 15.6956 10.6314 15.663C11.0558 15.6303 11.3387 15.8915 11.3714 16.2723L11.7305 21.6805C11.7522 22.0614 11.4802 22.3444 11.0776 22.3661ZM14.4292 22.3661C14.0157 22.3444 13.7436 22.0614 13.7653 21.6805L14.1244 16.2723C14.1571 15.8915 14.44 15.6303 14.8644 15.663C15.267 15.6956 15.5391 15.9677 15.5173 16.3486L15.1582 21.7568C15.1365 22.1376 14.8318 22.3879 14.4292 22.3661ZM17.8569 22.3769C17.4324 22.3008 17.2149 22.007 17.2693 21.6371L18.1942 16.1635C18.2595 15.7936 18.575 15.5868 18.9885 15.6412C19.402 15.7174 19.6414 16.0329 19.5761 16.4029L18.6403 21.8546C18.575 22.2247 18.2595 22.4423 17.8569 22.3769ZM3.50391 8.89456H5.68025L9.51061 2.24585C9.80441 1.72353 9.56503 1.2665 9.16239 1.04886C8.77065 0.84211 8.24832 0.874755 7.95452 1.36443L3.50391 8.89456ZM19.8047 8.89456H21.981L17.5304 1.36443C17.2475 0.885636 16.7251 0.852991 16.3225 1.04886C15.9308 1.2665 15.6805 1.72353 15.9743 2.24585L19.8047 8.89456Z"
                            fill="#262626"
                          />
                        </svg>
                      </div>
                      <div className="text-grey-15 text-lg font-semibold leading-[27px] xl:text-[20px] xl:leading-[30px] 2xl:text-2xl 2xl:leading-9">
                        Assessing Your Needs
                      </div>
                    </div>
                    <div className="mt-4 xl:mt-5">
                      <div className="text-grey-30 text-sm font-medium leading-[21px] xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                        Our team of experienced nutritionists and dietitians
                        will conduct a thorough assessment of your nutritional
                        needs and create a personalized plan tailored to your
                        unique requirements.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex col-span-1 relative z-50 before:content-['03'] before:absolute before:left-0 before:text-[80px] before:leading-[120px] before:text-green-40 before:z-10 xl:before:text-[100px] xl:before:leading-[150px] 2x:before:text-[150px] 2xl:before:leading-[225px]">
            <div className="relative z-50 mt-[72px] xl:mt-[92px] 2xl:mt-[135px] flex">
              <div className="rounded-[10px] bg-green-95 border-solid border-[1px] border-green-90 ">
                <div className="p-[30px] xl:p-10 2xl:p-[50px]">
                  <div>
                    <div className="flex items-center gap-[10px]">
                      <div className="w-[66px] h-[66px] rounded-[6px] bg-green-70 p-[14px] grid place-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="35"
                          viewBox="0 0 22 35"
                          fill="none"
                        >
                          <path
                            d="M4.10064 32.661H17.901C20.591 32.661 21.9294 31.2683 21.9294 28.4561V8.14189C21.9294 5.32975 20.591 3.93708 18.031 3.93708H17.7322C17.7322 3.99065 17.7322 4.0576 17.7322 4.11117V5.69132C17.7322 7.37859 16.6276 8.5704 15.0163 8.5704H6.98548C5.37413 8.5704 4.26958 7.37859 4.26958 5.69132V4.11117C4.26958 4.0576 4.26958 3.99065 4.26958 3.93708H3.97069C1.41072 3.93708 0.0722656 5.32975 0.0722656 8.14189V28.4561C0.0722656 31.2683 1.41072 32.661 4.10064 32.661ZM6.98548 7.01703H15.0163C15.7699 7.01703 16.2247 6.52156 16.2247 5.69132V4.28525C16.2247 3.455 15.7699 2.95953 15.0163 2.95953H13.8207C13.7298 1.44633 12.5082 0.214355 11.0009 0.214355C9.49346 0.214355 8.27196 1.44633 8.18099 2.95953H6.98548C6.23178 2.95953 5.77696 3.455 5.77696 4.28525V5.69132C5.77696 6.52156 6.23178 7.01703 6.98548 7.01703ZM11.0009 4.23168C10.3771 4.23168 9.87032 3.69605 9.87032 3.06666C9.87032 2.4105 10.3771 1.88824 11.0009 1.88824C11.6246 1.88824 12.1314 2.4105 12.1314 3.06666C12.1314 3.69605 11.6246 4.23168 11.0009 4.23168Z"
                            fill="#262626"
                          />
                        </svg>
                      </div>
                      <div className="text-grey-15 text-lg font-semibold leading-[27px] xl:text-[20px] xl:leading-[30px] 2xl:text-2xl 2xl:leading-9">
                        Personalized Nutrition Plan
                      </div>
                    </div>
                    <div className="mt-4 xl:mt-5">
                      <div className="text-grey-30 text-sm font-medium leading-[21px] xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                        Based on the information gathered, we will develop a
                        personalized nutrition plan that takes into account your
                        dietary preferences, lifestyle, and health goals. This
                        plan will provide you with clear guidelines on what to
                        eat, portion sizes, and meal timing.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex col-span-1 relative z-50 before:content-['04'] before:absolute before:left-0 before:text-[80px] before:leading-[120px] before:text-green-40 before:z-10 xl:before:text-[100px] xl:before:leading-[150px] 2x:before:text-[150px] 2xl:before:leading-[225px]">
            <div className="relative z-50 mt-[72px] xl:mt-[92px] 2xl:mt-[135px] flex">
              <div className="rounded-[10px] bg-green-95 border-solid border-[1px] border-green-90 relative h-full">
                <div className="p-[30px] xl:p-10 2xl:p-[50px]">
                  <div>
                    <div className="flex items-center gap-[10px]">
                      <div className="w-[66px] h-[66px] rounded-[6px] bg-green-70 p-[14px] grid place-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="36"
                          viewBox="0 0 20 36"
                          fill="none"
                        >
                          <path
                            d="M5.16226 32.9992C6.35757 32.9992 7.09753 32.3304 7.0833 31.1636L6.79871 15.1833C6.79871 14.6853 7.01215 14.3153 7.45328 14.1161C9.33162 13.2907 10.1427 12.4228 10.0431 9.93248L9.64469 1.19531C9.61623 0.569196 9.24625 0.213448 8.66282 0.213448C8.10785 0.213448 7.76633 0.583427 7.76633 1.22377L7.86594 9.71903C7.86594 10.2171 7.55289 10.5301 7.0833 10.5301C6.59948 10.5301 6.25796 10.2313 6.25796 9.76172L6.11567 0.967634C6.10144 0.355748 5.74569 0 5.16226 0C4.57883 0 4.23732 0.355748 4.22308 0.967634L4.08078 9.76172C4.08078 10.2313 3.73926 10.5301 3.25546 10.5301C2.78587 10.5301 2.45858 10.2171 2.45858 9.71903L2.55819 1.22377C2.55819 0.583427 2.2309 0.213448 1.66171 0.213448C1.07828 0.213448 0.708298 0.569196 0.679839 1.19531L0.295632 9.93248C0.181792 12.4228 0.992897 13.2907 2.87124 14.1161C3.31237 14.3153 3.52582 14.6853 3.52582 15.1833L3.25546 31.1636C3.24123 32.3304 3.96694 32.9992 5.16226 32.9992ZM16.29 20.5906L15.9912 31.0924C15.9486 32.3304 16.7027 32.9992 17.8838 32.9992C19.0933 32.9992 19.8333 32.3873 19.8333 31.2489V1.06724C19.8333 0.341518 19.3352 0 18.8229 0C18.2822 0 17.9265 0.284598 17.4712 0.953404C15.1801 4.16936 13.6718 10.1886 13.6718 15.8806V16.5778C13.6718 17.5597 14.0275 18.2854 14.739 18.755L15.5786 19.3243C16.0908 19.6799 16.3185 20.0785 16.29 20.5906Z"
                            fill="#262626"
                          />
                        </svg>
                      </div>
                      <div className="text-grey-15 text-lg font-semibold leading-[27px] xl:text-[20px] xl:leading-[30px] 2xl:text-2xl 2xl:leading-9">
                        Meal Planning and Recipes
                      </div>
                    </div>
                    <div className="mt-4 xl:mt-5">
                      <div className="text-grey-30 text-sm font-medium leading-[21px] xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                        To make your journey easier, we will provide you with a
                        variety of delicious and nutritious meal options, along
                        with recipes that align with your personalized nutrition
                        plan.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex col-span-1 relative z-50 before:content-['05'] before:absolute before:left-0 before:text-[80px] before:leading-[120px] before:text-green-40 before:z-10 xl:before:text-[100px] xl:before:leading-[150px] 2x:before:text-[150px] 2xl:before:leading-[225px]">
            <div className="relative z-50 mt-[72px] xl:mt-[92px] 2xl:mt-[135px] flex">
              <div className="rounded-[10px] bg-green-95 border-solid border-[1px] border-green-90 relative h-full">
                <div className="p-[30px] xl:p-10 2xl:p-[50px]">
                  <div>
                    <div className="flex items-center gap-[10px]">
                      <div className="w-[66px] h-[66px] rounded-[6px] bg-green-70 p-[14px] grid place-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="26"
                          viewBox="0 0 24 26"
                          fill="none"
                        >
                          <path
                            d="M1.54992 14.89H2.54016V12.7028H1.54992V14.89ZM6.69696 25.1405C8.05718 25.1405 8.68831 23.8892 7.94836 22.5616L3.87861 15.3688C3.5304 14.7703 3.00807 14.4983 2.35517 14.4983C1.33229 14.4983 0.777323 15.26 0.864377 16.2719C1.08201 17.5669 1.95255 19.6344 3.00807 21.332C4.67297 24.1503 5.64144 25.1405 6.69696 25.1405ZM22.5625 14.89V12.7028H21.5723V14.89H22.5625ZM17.4154 25.1405C18.4709 25.1405 19.4394 24.1503 21.1044 21.332C22.149 19.6344 23.0304 17.5669 23.2481 16.2719C23.3351 15.26 22.7802 14.4983 21.7572 14.4983C21.1044 14.4983 20.582 14.7703 20.2338 15.3688L16.1641 22.5616C15.4132 23.8892 16.0553 25.1405 17.4154 25.1405ZM1.17995 12.5178C1.17995 13.0292 1.5064 13.3448 2.01784 13.3448C2.52927 13.3448 2.83397 13.0292 2.83397 12.5178C2.88837 6.65255 6.3814 2.93101 12.0508 2.93101C17.731 2.93101 21.2132 6.65255 21.2675 12.5178C21.2675 13.0292 21.5831 13.3448 22.0946 13.3448C22.606 13.3448 22.9216 13.0292 22.9216 12.5178C22.9216 5.84731 18.8191 1.26611 12.0508 1.26611C5.28235 1.26611 1.17995 5.84731 1.17995 12.5178Z"
                            fill="#262626"
                          />
                          <path
                            d="M9.95169 22.9859C10.6481 22.5833 10.8331 21.6801 10.387 20.9075L6.71983 14.4329C6.27368 13.6603 5.40314 13.3773 4.71759 13.78C4.29321 14.0085 4.19527 14.4111 4.41291 14.792L8.91793 22.7138C9.14644 23.1056 9.53819 23.2144 9.95169 22.9859ZM14.1629 22.9859C14.5764 23.2144 14.9682 23.1056 15.1858 22.7138L19.6908 14.792C19.9193 14.4111 19.8214 14.0085 19.397 13.78C18.7006 13.3773 17.8409 13.6603 17.3839 14.4329L13.7167 20.9075C13.2706 21.6801 13.4665 22.5833 14.1629 22.9859ZM5.69695 6.71778C7.48154 5.74931 9.57083 5.27051 12.0519 5.27051C14.5438 5.27051 16.6331 5.74931 18.4068 6.71778C16.9813 4.88964 14.9464 3.97559 12.0519 3.97559C9.16821 3.97559 7.13333 4.88964 5.69695 6.71778Z"
                            fill="#262626"
                          />
                        </svg>
                      </div>
                      <div className="text-grey-15 text-lg font-semibold leading-[27px] xl:text-[20px] xl:leading-[30px] 2xl:text-2xl 2xl:leading-9">
                        Ongoing Support
                      </div>
                    </div>
                    <div className="mt-4 xl:mt-5">
                      <div className="text-grey-30 text-sm font-medium leading-[21px] xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                        Throughout your journey, our team of nutrition experts
                        will be there to provide ongoing support, answer your
                        questions, and offer guidance. We believe in the power
                        of continuous encouragement to help you stay motivated
                        and achieve long-term success.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex col-span-1 relative z-50 before:content-['06'] before:absolute before:left-0 before:text-[80px] before:leading-[120px] before:text-green-40 before:z-10 xl:before:text-[100px] xl:before:leading-[150px] 2x:before:text-[150px] 2xl:before:leading-[225px]">
            <div className="relative z-50 mt-[72px] xl:mt-[92px] 2xl:mt-[135px] flex">
              <div className="rounded-[10px] bg-green-95 border-solid border-[1px] border-green-90 relative h-full">
                <div className="p-[30px] xl:p-10 2xl:p-[50px]">
                  <div>
                    <div className="flex items-center gap-[10px]">
                      <div className="w-[66px] h-[66px] rounded-[6px] bg-green-70 p-[14px] grid place-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="23"
                          viewBox="0 0 19 23"
                          fill="none"
                        >
                          <path
                            d="M9.61607 22.8272C9.79018 22.8272 10.0622 22.7618 10.3343 22.6204C16.5259 19.3776 18.5173 17.7563 18.5173 13.8498V5.64495C18.5173 4.52414 18.0385 4.16504 17.1245 3.78418C15.8513 3.26185 11.7816 1.78195 10.5193 1.34668C10.2255 1.24874 9.92076 1.19434 9.61607 1.19434C9.31138 1.19434 9.0067 1.25963 8.72377 1.34668C7.45062 1.76018 3.38086 3.27274 2.1077 3.78418C1.20452 4.15416 0.714844 4.52414 0.714844 5.64495V13.8498C0.714844 17.7563 2.81501 19.1927 8.89788 22.6204C9.18081 22.7728 9.44197 22.8272 9.61607 22.8272ZM4.70843 12.3698C4.70843 12.2392 4.77371 12.076 4.89342 11.9346L11.0416 4.21944C11.5095 3.63183 12.293 4.02358 12.0101 4.75265L9.98605 10.1935H13.7837C14.0775 10.1935 14.2952 10.4002 14.2952 10.6941C14.2952 10.8247 14.2299 10.9879 14.1102 11.1293L7.96206 18.8445C7.49414 19.4321 6.72154 19.0403 6.99358 18.3221L9.02846 12.8704H5.21986C4.93695 12.8704 4.70843 12.6636 4.70843 12.3698Z"
                            fill="#262626"
                          />
                        </svg>
                      </div>
                      <div className="text-grey-15 text-lg font-semibold leading-[27px] xl:text-[20px] xl:leading-[30px] 2xl:text-2xl 2xl:leading-9">
                        Progress Tracking
                      </div>
                    </div>
                    <div className="mt-4 xl:mt-5">
                      <div className="text-grey-30 text-sm font-medium leading-[21px] xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                        We encourage you to track your progress using our
                        user-friendly mobile app or website tools. You can log
                        your meals, monitor your weight, and track your physical
                        activity, allowing you to have a clear picture of your
                        progress and make any necessary adjustments.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex col-span-1 relative z-50 before:content-['07'] before:absolute before:left-0 before:text-[80px] before:leading-[120px] before:text-green-40 before:z-10 xl:before:text-[100px] xl:before:leading-[150px] 2x:before:text-[150px] 2xl:before:leading-[225px]">
            <div className="relative z-50 mt-[72px] xl:mt-[92px] 2xl:mt-[135px] flex">
              <div className="rounded-[10px] bg-green-95 border-solid border-[1px] border-green-90 relative h-full">
                <div className="p-[30px] xl:p-10 2xl:p-[50px]">
                  <div>
                    <div className="flex items-center gap-[10px]">
                      <div className="w-[66px] h-[66px] rounded-[6px] bg-green-70 p-[14px] grid place-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="27"
                          viewBox="0 0 18 27"
                          fill="none"
                        >
                          <path
                            d="M0.644531 16.3771C0.644531 17.302 1.26479 17.9114 2.24414 17.9114H8.13114V22.9931C8.13114 24.6581 8.82757 26.0401 9.09961 26.0401C9.36077 26.0401 10.0572 24.6581 10.0572 22.9931V17.9114H15.9442C16.9235 17.9114 17.5438 17.302 17.5438 16.3771C17.5438 14.0811 15.7048 11.6545 12.6471 10.5445L12.288 5.5498C13.8767 4.64663 15.1824 3.62374 15.7483 2.89467C16.0312 2.52469 16.1728 2.15471 16.1728 1.82826C16.1728 1.16448 15.6613 0.674805 14.8996 0.674805H3.29967C2.52706 0.674805 2.02651 1.16448 2.02651 1.82826C2.02651 2.15471 2.15709 2.52469 2.44001 2.89467C3.00586 3.62374 4.31166 4.64663 5.90039 5.5498L5.5413 10.5445C2.48354 11.6545 0.644531 14.0811 0.644531 16.3771Z"
                            fill="#1C1C1E"
                          />
                        </svg>
                      </div>
                      <div className="text-grey-15 text-lg font-semibold leading-[27px] xl:text-[20px] xl:leading-[30px] 2xl:text-2xl 2xl:leading-9">
                        Regular Check-ins
                      </div>
                    </div>
                    <div className="mt-4 xl:mt-5">
                      <div className="text-grey-30 text-sm font-medium leading-[21px] xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                        We will schedule regular check-ins to review your
                        progress, address any concerns, and make any necessary
                        adjustments to your nutrition plan. Our goal is to
                        ensure that you are consistently moving towards your
                        desired outcomes.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex col-span-1 relative z-50 before:content-['08'] before:absolute before:left-0 before:text-[80px] before:leading-[120px] before:text-green-40 before:z-10 xl:before:text-[100px] xl:before:leading-[150px] 2x:before:text-[150px] 2xl:before:leading-[225px]">
            <div className="relative z-50 mt-[72px] xl:mt-[92px] 2xl:mt-[135px] flex">
              <div className="rounded-[10px] bg-green-95 border-solid border-[1px] border-green-90 relative h-full">
                <div className="p-[30px] xl:p-10 2xl:p-[50px]">
                  <div>
                    <div className="flex items-center gap-[10px]">
                      <div className="w-[66px] h-[66px] rounded-[6px] bg-green-70 p-[14px] grid place-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                        >
                          <path
                            d="M24.2177 8.92078L15.4082 4.9001C14.4904 4.48726 13.7435 4.28981 12.9966 4.30776C12.2587 4.28981 11.5118 4.48726 10.585 4.9001L1.78454 8.92078C1.20864 9.1811 0.929688 9.63877 0.929688 10.0965C0.929688 10.5542 1.20864 11.003 1.78454 11.2723L5.49191 12.9595L11.1879 10.294C11.134 10.2312 11.1159 10.1593 11.1159 10.0965C11.1159 9.53109 12.0698 9.1003 13.0326 9.1003C14.0044 9.1003 14.9403 9.53109 14.9403 10.0965C14.9403 10.6799 14.0044 11.1196 13.0326 11.1196C12.7357 11.1196 12.4387 11.0747 12.1777 11.003L6.74269 13.5428L10.585 15.3019C11.5118 15.7237 12.2587 15.9032 12.9966 15.8942C13.7435 15.9032 14.4904 15.7237 15.4082 15.3019L24.2177 11.2723C24.7936 11.003 25.0725 10.5542 25.0725 10.0965C25.0725 9.63877 24.7936 9.1811 24.2177 8.92078ZM6.7067 14.8711V20.3278C8.21844 21.2432 10.3781 21.7996 12.9966 21.7996C18.3057 21.7996 21.7251 19.529 21.7251 16.8456V13.7582L15.9211 16.4058C14.8683 16.8905 13.9145 17.1328 12.9966 17.1238C12.0877 17.1328 11.1249 16.8905 10.0721 16.4058L6.7067 14.8711ZM4.27712 13.7582V16.8456C4.27712 17.6264 4.72703 18.5956 5.5369 19.4214V14.3416L4.27712 13.7582ZM5.5369 22.4099H6.7067V20.3278C6.25677 20.0585 5.86085 19.7534 5.5369 19.4214V22.4099ZM4.82602 22.4728V24.8332C4.82602 25.5422 5.28494 25.9999 5.99582 25.9999H6.23878C6.94965 25.9999 7.40858 25.5422 7.40858 24.8332V22.4728C7.40858 21.7638 6.94965 21.306 6.23878 21.306H5.99582C5.28494 21.306 4.82602 21.7638 4.82602 22.4728Z"
                            fill="#1C1C1E"
                          />
                        </svg>
                      </div>
                      <div className="text-grey-15 text-lg font-semibold leading-[27px] xl:text-[20px] xl:leading-[30px] 2xl:text-2xl 2xl:leading-9">
                        Education and Resources
                      </div>
                    </div>
                    <div className="mt-4 xl:mt-5">
                      <div className="text-grey-30 text-sm font-medium leading-[21px] xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                        Along the way, we will provide you with educational
                        resources, such as articles, guides, and videos, to
                        enhance your understanding of nutrition and empower you
                        to make informed choices for a healthier lifestyle.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex col-span-1 relative z-50 before:content-['09'] before:absolute before:left-0 before:text-[80px] before:leading-[120px] before:text-green-40 before:z-10 xl:before:text-[100px] xl:before:leading-[150px] 2x:before:text-[150px] 2xl:before:leading-[225px]">
            <div className="relative z-50 mt-[72px] xl:mt-[92px] 2xl:mt-[135px] flex">
              <div className="rounded-[10px] bg-green-95 border-solid border-[1px] border-green-90 relative h-full">
                <div className="p-[30px] xl:p-10 2xl:p-[50px]">
                  <div>
                    <div className="flex items-center gap-[10px]">
                      <div className="w-[66px] h-[66px] rounded-[6px] bg-green-70 p-[14px] grid place-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="27"
                          viewBox="0 0 18 27"
                          fill="none"
                        >
                          <path
                            d="M5.89776 25.8662H12.1056C15.6414 25.8662 17.389 24.051 17.3585 20.4207C17.3178 16.2747 17.2975 13.2631 17.1959 11.0045C16.9013 4.36261 15.0623 2.41336 9.00677 2.41336C2.95129 2.41336 1.10213 4.36261 0.807486 11.0045C0.705884 13.2631 0.685564 16.2747 0.644923 20.4207C0.614443 24.051 2.362 25.8662 5.89776 25.8662ZM5.6031 21.7718C4.72933 21.7718 4.17052 21.1942 4.17052 20.3279V15.0062C4.17052 14.1295 4.72933 13.5519 5.6031 13.5519H12.4105C13.2741 13.5519 13.8329 14.1295 13.8329 15.0062V20.3279C13.8329 21.1942 13.2741 21.7718 12.4105 21.7718H5.6031ZM4.17052 17.5227H13.8329V16.2953H4.17052V17.5227ZM9.00677 0C7.05601 0 5.68439 1.34076 5.68439 3.16625H7.11698C7.11698 2.16584 7.88915 1.4542 9.00677 1.4542C10.1142 1.4542 10.8966 2.16584 10.8966 3.16625H12.3292C12.3292 1.34076 10.9474 0 9.00677 0Z"
                            fill="#1C1C1E"
                          />
                        </svg>
                      </div>
                      <div className="text-grey-15 text-lg font-semibold leading-[27px] xl:text-[20px] xl:leading-[30px] 2xl:text-2xl 2xl:leading-9">
                        Fine-Tuning and Adjustments
                      </div>
                    </div>
                    <div className="mt-4 xl:mt-5">
                      <div className="text-grey-30 text-sm font-medium leading-[21px] xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                        As your journey progresses and your goals evolve, we
                        will fine-tune and make adjustments to your nutrition
                        plan to ensure that it continues to align with your
                        changing needs.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex col-span-1 relative z-50 before:content-['10'] before:absolute before:left-0 before:text-[80px] before:leading-[120px] before:text-green-40 before:z-10 xl:before:text-[100px] xl:before:leading-[150px] 2x:before:text-[150px] 2xl:before:leading-[225px]">
            <div className="relative z-50 mt-[72px] xl:mt-[92px] 2xl:mt-[135px] flex">
              <div className="rounded-[10px] bg-green-95 border-solid border-[1px] border-green-90 relative h-full">
                <div className="p-[30px] xl:p-10 2xl:p-[50px]">
                  <div>
                    <div className="flex items-center gap-[10px]">
                      <div className="w-[66px] h-[66px] rounded-[6px] bg-green-70 p-[14px] grid place-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="21"
                          viewBox="0 0 26 21"
                          fill="none"
                        >
                          <path
                            d="M12.5997 15.4122H13.5004C18.5043 15.4122 21.8768 12.0336 21.8768 6.79012V4.75491C21.8768 2.36879 18.3141 0.744629 13.05 0.744629C7.786 0.744629 4.22325 2.36879 4.22325 4.75491V6.79012C4.22325 11.8531 7.58584 15.4122 12.5997 15.4122ZM13.05 7.20117C8.86681 7.20117 5.78445 6.13845 5.78445 4.75491C5.78445 3.38139 8.86681 2.30864 13.05 2.30864C17.2433 2.30864 20.3257 3.38139 20.3257 4.75491C20.3257 6.13845 17.2433 7.20117 13.05 7.20117ZM20.796 10.9809H21.5866C23.8183 10.9809 25.1593 9.80785 25.1593 7.86287C25.1593 5.92791 23.8083 4.74488 21.5866 4.74488H20.9461V6.29886H21.5866C22.8576 6.29886 23.5982 6.88035 23.5982 7.86287C23.5982 8.83537 22.8576 9.42689 21.5866 9.42689H20.796V10.9809ZM13 20.2146C20.6059 20.2146 26 18.049 26 14.9009C26 13.6777 25.1694 12.605 23.7082 11.7428C23.1078 11.9935 22.4473 12.1339 21.6967 12.1539C20.1055 14.931 17.1932 16.5852 13.5004 16.5852H12.5997C8.48653 16.5852 5.27406 14.3996 3.84296 10.9809C1.41108 11.9233 0 13.2868 0 14.9009C0 18.049 5.40416 20.2146 13 20.2146Z"
                            fill="#1C1C1E"
                          />
                        </svg>
                      </div>
                      <div className="text-grey-15 text-lg font-semibold leading-[27px] xl:text-[20px] xl:leading-[30px] 2xl:text-2xl 2xl:leading-9">
                        Sustainable Lifestyle Habits
                      </div>
                    </div>
                    <div className="mt-4 xl:mt-5">
                      <div className="text-grey-30 text-sm font-medium leading-[21px] xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                        Our ultimate goal is to help you develop sustainable
                        lifestyle habits that will support your long-term health
                        and wellness. We will equip you with the knowledge and
                        skills to maintain your progress even after you{`'`}ve
                        completed the program.
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

export default function Page() {
  return (
    <main>
      <div className="max-w-[1758px] mx-auto">
        <div className="px-4 xl:px-20 2xl:px-[162px]">
          <div className="my-[50px] xl:my-[80px] 2xl:my-[100px]">
            <Header
              heading="Your Journey to Health and Wellness"
              subHeading="At Nutritionist, we believe in providing a personalized and comprehensive approach to help you achieve your health and wellness goals. Our How it Works process is designed to guide you through each step of your journey, ensuring that you receive the support, knowledge, and tools you need to succeed. Here's a detailed breakdown of our process:"
            />
            <Process />
            <CTA
              title="Are you ready to embark on a transformative journey towards
            better health and wellness?"
              description="Join us at Nutritionist and let us guide you on the path to a
            healthier and happier you."
              buttonLabel="Join Us Now"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
