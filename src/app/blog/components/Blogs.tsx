import { blogs } from "../data/blogs";
import { BlogItem } from "./BlogItem";
import { BlogTab } from "./BlogTab";

const Blogs = () => {
  return (
    <section>
      <div id="tab-container">
        <BlogTab />
        <div className="mt-[30px] xl:mt-[50px]">
          <div className="rounded-xl bg-green-95 border-[1px] border-solid border-green-85">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {blogs.map((blog) =>
                blog.articles.map((article) => (
                  <BlogItem
                    key={article.id}
                    category={blog.category}
                    article={article}
                  />
                )),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Blogs };
