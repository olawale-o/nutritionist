const PricingItemFeatureList = ({ items }: { items: string[] }) => {
  return (
    <ul className="list-none rounded-lg border-solid border-[1px]  border-green-85 bg-green-90">
      {items.map((item: any, i: number) => (
        <li
          key={i}
          className="border-b-[1px] border-solid border-green-80 last:border-b-0"
        >
          <div className="py-[14px] px-[18px] xl:py-4 xl:px-5 2xl:py-5 2xl:px-6 ">
            <div className="text-grey-15 text-sm font-medium leading-[21px] xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
              {item}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const PricingItemHeader = ({ type }: { type: string }) => (
  <div>
    <div className="text-grey-15 text-[22px] font-semibold  leading-[33px] xl:text-2xl xl:leading-9 2xl:text-[30px] 2xl:leading-[45px]">
      {type}
    </div>
    <div className="text-grey-30 text-sm font-medium leading-[21px] xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
      Up to 50% off on Yearly Plan
    </div>
  </div>
);

const PricingItemPriceCard = ({ price }: { price: string }) => (
  <div className="mt-6 xl:mt-[30px] 2xl:mt-10">
    <div>
      <div className="">
        <span className="text-green-25 text-[40px] font-bold leading-[35px] xl:text-[40px] xl:leading-[35px] 2xl:text-[50px] 2xl:leading-[43.761px]">
          ${price}
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
);

const PricingItem = ({ plan }: { plan: any }) => {
  return (
    <div className="col-span-1">
      <div className="bg-green-95 border-solid border-[1px] border-green-90 rounded-[10px]">
        <div className="p-[30px] xl:p-10 2xl:p-[50px]">
          <div>
            <PricingItemHeader type={plan.name} />
            <div className="mt-6 xl:mt-[30px] 2xl:mt-10">
              <PricingItemFeatureList items={plan.items} />
              {plan?.extra && (
                <div className="mt-6 2xl:mt-5">
                  <div className="bg-green-20 rounded-lg">
                    <div className="py-4 px-5 2xl:py-5 2xl:px-6">
                      <div className="text-white font-medium text-sm leading-[21px] xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                        {plan.extra}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <PricingItemPriceCard price={plan.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { PricingItem };
