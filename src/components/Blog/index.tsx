import { blogs } from "@/app/data";

const Blog = ({ blog }: { blog: any }) => (
  <div key={blog.id} className="col-span-1">
    <div className="bg-green-95 border-solid border-[1px] border-green-90 rounded-[10px]">
      <div className="p-6 xl:p-[30px]">
        <div>
          <figure className="aspect-[4/3] w-full h-full relative rounded-[10px]">
            <div className="absolute inset-0 w-full h-full rounded-[10px]">
              <img
                src={blog.cover}
                className="object-cover block absolute inset-0 w-full h-full rounded-[10px]"
              />
            </div>
          </figure>
        </div>
        <div className="mt-5">
          <div>
            <div className="text-grey-20 text-sm font-urbanist leading-[21px] font-medium xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
              {blog.title}
            </div>
            <div className="text-grey-15 text-[20px] leading-[30px] font-semibold font-urbanist xl:text-[22px] xl:leading-[33px] 2xl:text-[26px] 2xl:leading-[39px]">
              {blog.caption}
            </div>
          </div>
        </div>
        <div className="mt-[18px] xl:mt-5 2xl:mt-[30px]">
          <div className="leading-[21px] font-medium text-sm text-grey-30 xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
            {blog.text}
          </div>
        </div>
        <div className="mt-[18px] xl:mt-5 2xl:mt-[30px] p-4 bg-green-97 border-[1px] border-solid border-green-90 rounded-[10px]">
          <div className="flex flex-col xl:flex-row xl:items-stretch xl:gap-5">
            <div className="flex gap-[10px] xl:flex-grow xl:gap-1 items-center">
              <div className="w-10 h-10">
                <figure className="relative aspect-square overflow-hidden rounded-[6px]">
                  <div className="absolute inset-0 w-full h-full rounded-[6px]">
                    <img
                      src={blog.author.img}
                      className="inset-0 absolute w-full h-full object-cover block rounded-[6px]"
                    />
                  </div>
                </figure>
              </div>
              <div>
                <div className="text-grey-15 text-base font-semibold xl:text-lg xl:leading-[27px] 2xl:text-[20px] 2xl:leading-[30px]">
                  {blog.author.name}
                </div>
                <div className="text-grey-35 text-sm font-medium leading-[21px] xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                  <span>{blog.date}</span>
                  <span> - </span>
                  <span>{blog.read} min</span>
                </div>
              </div>
            </div>
            <div className="mt-5 flex gap-2 justify-end xl:mt-0 xl:self-stretch">
              <div className="w-10 h-10 rounded-[6px] bg-green-95 border-solid border-[1px] border-green-90 p-[14px] flex items-center justify-center">
                <button className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M18.3337 7.38518C18.3337 8.67395 17.8389 9.91177 16.9551 10.8274C14.921 12.9359 12.9482 15.1344 10.8381 17.1664C10.3544 17.6254 9.58712 17.6086 9.12432 17.1289L3.04512 10.8274C1.20762 8.92267 1.20762 5.84769 3.04512 3.94298C4.90069 2.01954 7.92361 2.01954 9.77918 3.94298L10.0001 4.17201L10.221 3.9431C11.1107 3.02042 12.3223 2.5 13.5881 2.5C14.8538 2.5 16.0654 3.02037 16.9551 3.94298C17.8389 4.8587 18.3337 6.09647 18.3337 7.38518Z"
                      stroke="#4C4C4C"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="w-10 h-10 rounded-[6px] bg-green-95 border-solid border-[1px] border-green-90 p-[14px] flex items-center justify-center">
                <button className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4.16699 17.5V4.5C4.16699 3.39543 5.06242 2.5 6.16699 2.5H13.8337C14.9382 2.5 15.8337 3.39543 15.8337 4.5V17.5L11.0818 14.4453C10.423 14.0217 9.57763 14.0217 8.91881 14.4453L4.16699 17.5Z"
                      stroke="#4C4C4C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const BlogList = ({ blogs }: { blogs: any[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 2xl:gap-[30px]">
      {blogs.map((blog: any) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};
const BlogPage = () => {
  return (
    <section>
      <div className="mt-[50px]">
        <div>
          <h2 className="text-grey-15 text-[28px] xl:text-[38px] xl:leading-[57px] 2xl:text-[48px] 2xl:leading-[72px]  font-urbanist leading-[42px] font-bold text-center">
            Our Blogs
          </h2>
          <div className="mt-[6px] xl:max-w-[780px] 2xl:max-w-[996px] mx-auto">
            <div className="text-sm text-grey-20 leading-[21px] font-medium text-center xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
              Our blog is a treasure trove of informative and engaging articles
              written by our team of nutritionists, dietitians, and wellness
              experts. Here{`'`}s what you can expect from our blog.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[50px] xl:mt-[60px]">
        <BlogList blogs={blogs} />
      </div>
    </section>
  );
};

export { BlogPage };
