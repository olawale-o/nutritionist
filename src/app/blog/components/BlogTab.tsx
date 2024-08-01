const blogButtons = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Weight Loss Tips",
  },
  {
    id: 3,
    title: "Healthy Eating",
  },
  {
    id: 4,
    title: "Fitness and Exercise",
  },
  {
    id: 5,
    title: "Mindset and Motivation",
  },
  {
    id: 6,
    title: "Recipes and Meal Planning",
  },
];

const BlogTab = () => {
  return (
    <ul className="list-none flex justify-between overflow-x-scroll p-5 bg-green-20 rounded-bl-[10px] rounded-br-[10px] xl:px-20 xl:py-6 2xl:py-[30px] 2xl:px-[150px] 2xl:overscroll-none">
      {blogButtons.map((blogButton) => (
        <li key={blogButton.id}>
          <button
            type="button"
            className={`py-3 px-[18px] ${blogButton.id === 1 ? "bg-green-25 border-green-30" : ""} rounded-[6px] border-solid border-[1px] border-transparent text-white text-sm font-semibold leading-[21px] whitespace-nowrap xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]`}
          >
            {blogButton.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export { BlogTab };
