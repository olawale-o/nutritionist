import Link from "next/link";

const links = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Team",
    link: "/team",
  },

  {
    id: 4,
    title: "Process",
    link: "/process",
  },
  {
    id: 5,
    title: "Pircing",
    link: "/pricing",
  },
  {
    id: 6,
    title: "Blog",
    link: "/bog",
  },
];

const Navbar = () => {
  return (
    <header>
      <div>
        <div className="max-w-[1758px] mx-auto">
          <div className="mx-auto bg-green-15 pt-10 px-4 pb-[14px] border-solid border-[1px] border-green-20 relative z-10 overflow-hidden xl:px-20 xl:py-[14px] 2xl:px-[162px]">
            <div className="absolute left-0 z-20">
              <figure>
                <img src="/assets/images/left-zigzag.svg" />
              </figure>
            </div>
            <div className="absolute right-0 z-20">
              <figure>
                <img src="/assets/images/right-zigzag.svg" />
              </figure>
            </div>
            <div className="bg-green-20 px-5 py-[10px] relative z-50 rounded-[6px] border-solid border-green-25 border-[1px]">
              <div className="flex items-center md:justify-center">
                <div className="flex mr-[14px]">
                  <div>
                    <img src="/assets/images/cricketball.svg" />
                  </div>
                  <div className="ms-[6px]">
                    <div className="text-white font-urbanist font-medium text-xs sm:text-sm leading-normal">
                      Join Our Personalized Nutrition Demo For Free
                    </div>
                  </div>
                </div>
                <div className="w-5 h-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 10C3 9.58579 3.33579 9.25 3.75 9.25L14.3879 9.25L10.2302 5.29062C9.93159 5.00353 9.92228 4.52875 10.2094 4.23017C10.4965 3.93159 10.9713 3.92228 11.2698 4.20937L16.7698 9.45937C16.9169 9.60078 17 9.79599 17 10C17 10.204 16.9169 10.3992 16.7698 10.5406L11.2698 15.7906C10.9713 16.0777 10.4965 16.0684 10.2094 15.7698C9.92228 15.4713 9.93159 14.9965 10.2302 14.7094L14.3879 10.75L3.75 10.75C3.33579 10.75 3 10.4142 3 10Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto bg-green-15 py-5 px-4 xl:px-20 2xl:px-[162px]">
            <div className="flex justify-between">
              <Link href="/">
                <img src="/assets/images/Logo.svg" />
              </Link>
              <div className="w-[34px] h-[34px] lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.25 9.5625C4.25 8.9757 4.7257 8.5 5.3125 8.5H28.6875C29.2743 8.5 29.75 8.9757 29.75 9.5625C29.75 10.1493 29.2743 10.625 28.6875 10.625H5.3125C4.7257 10.625 4.25 10.1493 4.25 9.5625ZM4.25 17C4.25 16.4132 4.7257 15.9375 5.3125 15.9375H28.6875C29.2743 15.9375 29.75 16.4132 29.75 17C29.75 17.5868 29.2743 18.0625 28.6875 18.0625H5.3125C4.7257 18.0625 4.25 17.5868 4.25 17ZM15.9375 24.4375C15.9375 23.8507 16.4132 23.375 17 23.375H28.6875C29.2743 23.375 29.75 23.8507 29.75 24.4375C29.75 25.0243 29.2743 25.5 28.6875 25.5H17C16.4132 25.5 15.9375 25.0243 15.9375 24.4375Z"
                    fill="#CBEA7B"
                  />
                </svg>
              </div>
              <div className="hidden lg:block lg:ms-auto">
                <div className="flex items-center">
                  <div className="flex gap-5 mr-[30px]">
                    {links.map((link) => (
                      <Link
                        key={link.id}
                        href={link.link}
                        className="font-urbanist text-green-97 test-sm font-semibold leading-[21px] duration-150 hover:text-green-70"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                  <Link
                    role="button"
                    href="/contact"
                    className="bg-green-70 px-4 py-3 inline-flex text-[#262626] text-sm font-urbanist font-semibold leading-[21px] rounded-[6px]"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Navbar };
