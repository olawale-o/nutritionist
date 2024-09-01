import { plans } from "../data/prices";
import { PricingItem } from "./PricingItem";

const PricingList = () => {
  return (
    <section>
      <div className="mt-[50px] xl:20 2xl:mt-[100px]">
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
                <PricingItem key={plan.id} plan={plan} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PricingList };
