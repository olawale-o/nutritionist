import Link from "next/link";

const BlogItem = ({
  category,
  article,
}: {
  category: string;
  article: any;
}) => {
  return (
    <div className="col-span-1 flex border-[1px] border-solid border-green-85">
      <div>
        <div>
          <div className="px-[30px pt-[30px] xl:px-10 xl:pt-10 2xl:px-[50px] 2xl:pt-[50px]">
            <div>
              <div className="w-fit text-grey-20 font-semibold text-[20px] leading-[30px] xl:text-[22px] xl:leading-[33px] 2xl:text-2xl 2xl:leading-9 relative after:absolute after:content-[''] after:left-0 after:-bottom-2 after:h-[3px] after:w-full after:bg-green-70 2xl:after:-bottom-[10px] ">
                {category}
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
            <div className="flex flex-col md:flex-row xl:items-center gap-6 2xl:gap-[30px]">
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

              <Link
                href="/blog"
                className="rounded-md bg-green-70 whitespace-nowrap py-[14px] px-[20px] font-semibold text-sm leading:[21px] 2xl:text-lg 2xl:leading-[27px]  2xl:py-[18px] 2xl:px-6"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BlogItem };
