const Footer = () => (
  <section>
    <div className="my-[50px] xl:my-[100px] 2xl:my-[150px]">
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
        <div className="relative z-20 xl:flex xl:flex-row xl:gap-[150px]">
          <div className="">
            <div>
              <h2 className="text-grey-15 text-[22px] xl:text-[26px] xl:leading-[39px] 2xl:text-[34px] 2xl:leading-[51px]  font-urbanist leading-[33px] font-semibold text-center xl:text-start">
                We Are Proud of Our Achievements
              </h2>
              <div className="mt-[6px] xl:max-w-[780px] 2xl:max-w-[996px] mx-auto">
                <div className="text-sm text-grey-20 leading-[21px] font-medium text-center xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px] xl:text-start">
                  But our ultimate satisfaction comes from seeing our clients
                  achieve their goals and live healthier, happier lives. Join
                  Nutritionist today and embark on your own transformative
                  journey towards optimal health and well-being.
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <button className="rounded-[6px] bg-green-70 inline-flex py-[14px] px-6 text-grey-15 text-sm leading-normal font-semibold w-full justify-center 2xl:text-lg 2xl:leading-normal whitespace-nowrap">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export { Footer };
