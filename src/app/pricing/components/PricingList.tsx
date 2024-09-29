"use client";
import { useState } from "react";
import { plans as pricing } from "../data/prices";
import { PricingItem } from "./PricingItem";
import { PricingContainer } from "@/components/common/PricingContainer";
import { TabList } from "@/components/common/TabList";

import { tabs } from "@/data";

const PricingList = () => {
  const [selectedTab, setSelectTab] = useState("monthly");
  const plans = selectedTab === "monthly" ? pricing.monthly : pricing.yearly;
  return (
    <section>
      <div className="mt-[50px] xl:20 2xl:mt-[100px]">
        <div id="tab-container" className="">
          <TabList
            tabList={tabs}
            onTabSelect={setSelectTab}
            selectedTab={selectedTab}
            layoutId="pricingList"
          />
          <div className="mt-[10px] w-fit mx-auto">
            <div className="text-grey-30 text-base font-medium">
              Save 50% on Yearly
            </div>
          </div>
          <div className="mt-[30px]">
            <PricingContainer key={selectedTab}>
              {selectedTab === "monthly" &&
                plans.map((plan) => <PricingItem key={plan.id} plan={plan} />)}
              {selectedTab === "yearly" &&
                plans.map((plan) => <PricingItem key={plan.id} plan={plan} />)}
            </PricingContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PricingList };
