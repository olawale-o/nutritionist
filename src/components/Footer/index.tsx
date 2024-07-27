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
    link: "/",
  },
  {
    id: 3,
    title: "Team",
    link: "/",
  },
  {
    id: 4,
    title: "Home",
    link: "/",
  },
  {
    id: 5,
    title: "Process",
    link: "/",
  },
  {
    id: 6,
    title: "Pircing",
    link: "/",
  },
  {
    id: 7,
    title: "Blog",
    link: "/",
  },
  {
    id: 8,
    title: "Contact",
    link: "/",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="bg-green-15 border-solid border-[1px] border-grey-15">
        <div className="px-4 py-[30px] xl:px-20 2xl:px-[162px]">
          <div className="flex justify-between items-center">
            <Link href="/">
              <img src="/assets/images/Logo.svg" />
            </Link>
            <div className="hidden xl:flex gap-4 mx-auto">
              {links.map((link) => (
                <Link
                  href={link.link}
                  key={link.id}
                  className="text-white text-sm font-urbanist leading-[21px] font-semibold duration-150 hover:text-green-70"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="flex gap-[6px] items-center">
              <span className="font-urbanist text-base font-semibold text-white">
                Got To Top
              </span>
              <div className="p-3 w-[73px] h-[73px] rounded-full bg-green-20 flex items-center justify-center">
                <button className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0002 18C11.5031 18 11.1002 17.5971 11.1002 17.1L11.1002 9.1345L8.74895 11.7238C8.40443 12.0821 7.83469 12.0933 7.4764 11.7487C7.1181 11.4042 7.10693 10.8345 7.45145 10.4762L11.3514 6.2762C11.5211 6.09973 11.7554 6 12.0002 6C12.245 6 12.4793 6.09973 12.6489 6.2762L16.5489 10.4762C16.8935 10.8345 16.8823 11.4042 16.524 11.7487C16.1657 12.0933 15.596 12.0821 15.2514 11.7238L12.9002 9.1345V17.1C12.9002 17.5971 12.4973 18 12.0002 18Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-5 xl:hidden">
            <div className="flex gap-4 flex-wrap pr-[66px]">
              {links.map((link) => (
                <Link
                  href={link.link}
                  key={link.id}
                  className="text-white text-sm font-urbanist leading-[21px] font-semibold duration-150 hover:text-green-70"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-[30px] xl:mt-10">
            <div className="bg-green-20 rounded-lg border-solid border-[1px] border-green-25">
              <div className="p-5">
                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
                  <div className="flex flex-col xl:flex-row gap-4">
                    <div className="flex justify-center gap-1 p-3 rounded-[4px] border-solid border-[1px] border-green-25">
                      <div className="h-5 w-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M1.75 7.22425V14.375C1.75 15.7557 2.86929 16.875 4.25 16.875H16.75C18.1307 16.875 19.25 15.7557 19.25 14.375V7.22425L11.8102 11.8026C11.0067 12.297 9.99327 12.297 9.18976 11.8026L1.75 7.22425Z"
                            fill="#CBEA7B"
                          />
                          <path
                            d="M19.25 5.75652V5.625C19.25 4.24429 18.1307 3.125 16.75 3.125H4.25C2.86929 3.125 1.75 4.24429 1.75 5.625V5.75652L9.84488 10.738C10.2466 10.9852 10.7534 10.9852 11.1551 10.738L19.25 5.75652Z"
                            fill="#CBEA7B"
                          />
                        </svg>
                      </div>
                      <span className="text-base text-white font-medium font-urbanist">
                        hello@squareup.com
                      </span>
                    </div>
                    <div className="flex justify-center gap-1 p-3 rounded-[4px] border-solid border-[1px] border-green-25">
                      <div className="h-5 w-5">
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
                            d="M1.25 3.75C1.25 2.36929 2.36929 1.25 3.75 1.25H4.89302C5.61 1.25 6.23498 1.73796 6.40887 2.43354L7.33037 6.11952C7.48284 6.72942 7.25495 7.37129 6.75202 7.74849L5.674 8.557C5.56206 8.64096 5.53772 8.7639 5.56917 8.84974C6.51542 11.4329 8.5671 13.4846 11.1503 14.4308C11.2361 14.4623 11.359 14.4379 11.443 14.326L12.2515 13.248C12.6287 12.7451 13.2706 12.5172 13.8805 12.6696L17.5665 13.5911C18.262 13.765 18.75 14.39 18.75 15.107V16.25C18.75 17.6307 17.6307 18.75 16.25 18.75H14.375C7.12626 18.75 1.25 12.8737 1.25 5.625V3.75Z"
                            fill="#CBEA7B"
                          />
                        </svg>
                      </div>
                      <span className="text-base text-white font-medium font-urbanist">
                        +91 91813 23 2309
                      </span>
                    </div>
                    <div className="flex justify-center gap-1 p-3 rounded-[4px] border-solid border-[1px] border-green-25">
                      <div className="h-5 w-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.1165 18.6259C10.1416 18.6405 10.1614 18.6517 10.1754 18.6596L10.1987 18.6726C10.3844 18.7745 10.6148 18.7738 10.8007 18.6729L10.8246 18.6596C10.8386 18.6517 10.8584 18.6405 10.8835 18.6259C10.9339 18.5967 11.0058 18.5542 11.0963 18.4985C11.2771 18.3872 11.5323 18.223 11.8372 18.0076C12.4459 17.5776 13.2581 16.9395 14.0721 16.1061C15.6922 14.4474 17.375 11.9551 17.375 8.75C17.375 4.95304 14.297 1.875 10.5 1.875C6.70304 1.875 3.625 4.95304 3.625 8.75C3.625 11.9551 5.30777 14.4474 6.92788 16.1061C7.74188 16.9395 8.55409 17.5776 9.16282 18.0076C9.46771 18.223 9.72295 18.3872 9.90375 18.4985C9.99419 18.5542 10.0661 18.5967 10.1165 18.6259ZM10.5 11.25C11.8807 11.25 13 10.1307 13 8.75C13 7.36929 11.8807 6.25 10.5 6.25C9.11929 6.25 8 7.36929 8 8.75C8 10.1307 9.11929 11.25 10.5 11.25Z"
                            fill="#CBEA7B"
                          />
                        </svg>
                      </div>
                      <span className="text-base text-white font-medium font-urbanist">
                        Somewhere in the World
                      </span>
                    </div>
                  </div>
                  <div className="mt-5 xl:mt-0">
                    <div className="text-center text-white font-urbanist text-sm font-normal leading-[21px]">
                      © 2023 Nutritionist. All rights reserved.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
