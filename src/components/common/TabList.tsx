import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

const TabList = ({
  tabList,
  selectedTab,
  onTabSelect,
  layoutId,
}: {
  tabList: any[];
  selectedTab: string;
  onTabSelect: Dispatch<SetStateAction<string>>;
  layoutId: string;
}) => {
  return (
    <ul className="list-none flex items-center w-fit mx-auto p-[10px] rounded-lg border-solid border-[1px] border-green-80">
      {tabList.map((tab) => {
        return (
          <li key={tab.id}>
            <motion.button
              onClick={() => onTabSelect(tab.value)}
              className={`inline-flex rounded-[6px] ${selectedTab === tab.value ? "bg-green-20 text-white" : "bg-transparent text-grey-30"} py-[10px] px-6 text-sm font-semibold leading-[21px]`}
              layoutId={layoutId}
            >
              {tab.label}
            </motion.button>
          </li>
        );
      })}
      <li></li>
    </ul>
  );
};

export { TabList };
