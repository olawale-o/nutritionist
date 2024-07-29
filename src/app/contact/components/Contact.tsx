const ContactForm = () => {
  return (
    <div className="col-span-1">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 xl:flex-row">
          <div className="relative">
            <div className="text-grey-30 text-base font-semibold mb-2 2xl:text-lg 2xl:leading-6">
              Full Name
            </div>
            <input
              className="w-full bg-green-90 rounded-[6px] border-solid border-[1px] border-green-80 p-5 text-base leading-[20px] text-grey-40 font-medium focus:outline-none 2xl:text-lg"
              placeholder="Enter your Name"
            />
          </div>
          <div className="relative">
            <div className="text-grey-30 text-base font-semibold mb-2 2xl:text-lg 2xl:leading-6">
              Email
            </div>
            <input
              className="w-full bg-green-90 rounded-[6px] border-solid border-[1px] border-green-80 p-5 text-base leading-[20px] text-grey-40 font-medium focus:outline-none 2xl:text-lg"
              placeholder="Enter your Email"
            />
          </div>
        </div>
        <div className="relative bg">
          <div className="w-full text-grey-30 text-base font-semibold mb-2 2xl:text-lg 2xl:leading-6">
            Phone Number
          </div>
          <input
            className="w-full bg-green-90 rounded-[6px] border-solid border-[1px] border-green-80 p-5 text-base leading-[20px] text-grey-40 font-medium focus:outline-none 2xl:text-lg"
            placeholder="Enter your Number"
          />
        </div>
        <div className="relative bg">
          <div className="w-full text-grey-30 text-base font-semibold mb-2 2xl:text-lg 2xl:leading-6">
            Message
          </div>
          <textarea
            placeholder="Enter your Message"
            className="resize-none w-full bg-green-90 rounded-[6px] border-solid border-[1px] border-green-80 p-5 text-base leading-[20px] text-grey-40 font-medium focus:outline-none 2xl:text-lg"
          ></textarea>
          <div className="mt-2">
            <div className="text-grey-35 text-sm leading-[18px] font-medium text-right 2xl:text-base 2xl:leading-[18px]">
              Max 250 Chars
            </div>
          </div>
        </div>
        <button
          type="button"
          className="bg-green-70 rounded-lg py-[14px] px-6 text-grey-15 font-semibold text-sm leading-[21px] 2xl:text-lg 2xl:leading-[27px] 2xl:py-[18px]"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};
const ContactMap = () => {
  return (
    <div className="col-span-1">
      <div>
        <div className="bg-green-15 rounded-lg h-[208px] xl:h-[360px]"></div>
        <div className="mt-5">
          <div className="flex gap-[14px] justify-center xl:justify-end">
            <div className="w-[72px] h-[72px] rounded-[6px] p-4 bg-green-70 grid place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_155_2401)">
                  <path
                    d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                    fill="#262626"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_155_2401">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="w-[72px] h-[72px] rounded-[6px] p-4 bg-green-70 grid place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_155_2404)">
                  <path
                    d="M6.2918 18.1251C13.8371 18.1251 17.9652 11.8724 17.9652 6.45167C17.9652 6.27589 17.9613 6.0962 17.9535 5.92042C18.7566 5.33967 19.4496 4.62033 20 3.7962C19.2521 4.12896 18.458 4.34627 17.6449 4.44074C18.5011 3.92755 19.1421 3.12135 19.4492 2.17159C18.6438 2.64892 17.763 2.98563 16.8445 3.1673C16.2257 2.50976 15.4075 2.07439 14.5164 1.9285C13.6253 1.78261 12.711 1.93433 11.9148 2.3602C11.1186 2.78607 10.4848 3.46238 10.1115 4.28455C9.73825 5.10672 9.64619 6.02897 9.84961 6.9087C8.21874 6.82686 6.62328 6.40321 5.16665 5.6652C3.71002 4.9272 2.42474 3.89132 1.39414 2.62472C0.870333 3.52782 0.710047 4.59649 0.945859 5.61353C1.18167 6.63057 1.79589 7.51966 2.66367 8.10011C2.01219 8.07943 1.37498 7.90402 0.804688 7.58839V7.63917C0.804104 8.58691 1.13175 9.50561 1.73192 10.2391C2.3321 10.9726 3.16777 11.4756 4.09687 11.6626C3.49338 11.8277 2.85999 11.8518 2.2457 11.7329C2.50788 12.548 3.01798 13.2609 3.70481 13.7721C4.39164 14.2833 5.22093 14.5673 6.07695 14.5845C4.62369 15.726 2.82848 16.3452 0.980469 16.3423C0.652739 16.3418 0.325333 16.3217 0 16.2821C1.87738 17.4866 4.06128 18.1263 6.2918 18.1251Z"
                    fill="#262626"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_155_2404">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="w-[72px] h-[72px] rounded-[6px] p-4 bg-green-70 grid place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_155_2407)">
                  <path
                    d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                    fill="#262626"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_155_2407">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Contact = () => {
  return (
    <section>
      <div className="max-w-[1758px] mx-auto">
        <div className="px-4 xl:px-20 2xl:px-[162px]">
          <div className="mt-[30px] xl:mt-20 2xl:mt-[100px]">
            <div className="bg-green-95 rounded-xl border-[1px] border-solid border-green-85">
              <div className="p-[30px] xl:p-[60px] 2xl:p-20">
                <div className="grid grid-cols-1 gap-10 xl:grid-cols-2 2xl:gap-[50px]">
                  <ContactForm />
                  <ContactMap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact };
