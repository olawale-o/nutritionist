import { Header } from "@/components/Header";
import { blogs } from "./data/blogs";

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

const Blogs = () => {
  return (
    <section>
      <div id="tab-container">
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
        <div className="mt-[30px] xl:mt-[50px]">
          <div className="rounded-xl bg-green-95 border-[1px] border-solid border-green-85">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {blogs.map((blog) =>
                blog.articles.map((article) => (
                  <div
                    key={article.id}
                    className="col-span-1 flex border-[1px] border-solid border-green-85"
                  >
                    <div>
                      <div>
                        <div className="px-[30px pt-[30px] xl:px-10 xl:pt-10 2xl:px-[50px] 2xl:pt-[50px]">
                          <div>
                            <div className="w-fit text-grey-20 font-semibold text-[20px] leading-[30px] xl:text-[22px] xl:leading-[33px] 2xl:text-2xl 2xl:leading-9 relative after:absolute after:content-[''] after:left-0 after:-bottom-2 after:h-[3px] after:w-full after:bg-green-70 2xl:after:-bottom-[10px] ">
                              {blog.category}
                            </div>
                            <div className="pl-9 xl:pl-[167px] mt-[30px] xl:mt-[50px]">
                              <figure className="relative aspect-[21/9] rounded-tr-xl rounded-tl-xl rounded-bl-xl">
                                <div className="absolute w-full h-full inset-0 rounded-tr-xl rounded-tl-xl rounded-bl-sm">
                                  <img
                                    className="absolute inset-0 w-full h-full object-cover block rounded-tr-xl rounded-tl-xl rounded-bl-sm"
                                    src={article.img}
                                  />
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                        <div className="p-[30px] xl:p-10 2xl:p-[50px]">
                          <div>
                            <div className="text-grey-15 text-lg font-semibold leading-[27px] xl:text-[20px] xl:leading-[30px] 2xl:text-2xl 2xl:leading-9">
                              {article.title}
                            </div>
                            <div className="mt-2 2l:mt-[10px]">
                              <div className="text-sm font-medium leading-[21px] text-grey-20 xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                                {" "}
                                {article.desc}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Page() {
  return (
    <main>
      <div className="max-w-[1758px] mx-auto">
        <div className="px-4 xl:px-20 2xl:px-[162px]">
          <div className="my-[50px] xl:my-[80px] 2xl:my-[100px]">
            <Header
              heading="Our Blogs"
              subHeading="Welcome to the Blog section of Nutritionist, your trusted source for insightful articles, tips, and expert advice on nutrition and wellness. Here, we strive to provide you with engaging and informative content that will inspire and empower you to make informed decisions about your health. Explore our blog to discover a wealth of resources that cover a wide range of topics related to nutrition, fitness, and overall well-being."
            />
            <Blogs />
          </div>
        </div>
      </div>
    </main>
  );
}
