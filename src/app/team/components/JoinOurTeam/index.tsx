import "./style.css";

const JoinOurTeam = () => {
  return (
    <section>
      <div className="my-[50px] xl:my-[100px] 2xl:my-[150px]">
        <div className="max-w-[1758px] mx-auto">
          <div className="px-4 xl:px-20 2xl:px-[162px]">
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
              <div className="relative z-20 xl:flex xl:flex-row xl:justify-between">
                <div className="">
                  <div>
                    <h2 className="text-grey-15 text-[28px] xl:text-[38px] xl:leading-[57px] 2xl:text-[48px] 2xl:leading-[72px]  font-urbanist leading-[42px] font-bold text-center xl:text-start">
                      Join Our Team
                    </h2>
                    <div className="mt-[6px] xl:max-w-[780px] 2xl:max-w-[996px] mx-auto">
                      <div className="text-sm text-grey-20 leading-[21px] font-medium text-center xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px] xl:text-start">
                        We are always on the lookout for talented individuals
                        who are enthusiastic about making a difference. Explore
                        our career opportunities and join us in our mission to
                        help people achieve their health and wellness goals.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <button className="rounded-[6px] bg-green-70 inline-flex py-[14px] px-6 text-grey-15 text-sm leading-normal font-semibold w-full justify-center 2xl:text-lg 2xl:leading-normal whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { JoinOurTeam };
