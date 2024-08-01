const stories = [
  {
    id: 1,
    title: "Inspiring Transformations Story",
    text: "Nutritionist continues to empower individuals to transform their lives through personalized nutrition coaching. With an expanding client base and a growing team of experts, we remain committed to our goal of helping people lose weight, improve their health, and lead happier, more fulfilling lives. Our journey of inspiring transformations continues, one client at a time.",
    date: "July 1, 2025",
  },
  {
    id: 2,
    title: "Recognition and Accolades Story",
    text: "Nutritionist received industry recognition for its excellence in personalized nutrition coaching. Our innovative approach and dedication to client success earned us accolades and solidified our position as a leading provider in the field",
    date: "March 10, 2023",
  },
  {
    id: 3,
    title: "Continued Growth Story",
    text: "Nutritionist celebrated serving over 5,000 clients, a testament to our commitment to helping individuals achieve their health and weight loss goals. This milestone highlighted the positive impact we have made on the lives of thousands of people.",
    date: "November 2, 2021",
  },
  {
    id: 4,
    title: "Collaborating for Success Story",
    text: "Nutritionist established partnerships with renowned health professionals, including nutritionists, dietitians, and wellness experts. These collaborations allowed us to incorporate diverse perspectives and expertise, ensuring the highest level of guidance for our clients.",
    date: "July 15, 2019",
  },
  {
    id: 5,
    title: "Enhanced Support Story",
    text: "In response to the growing demand for personalized nutrition coaching, Nutritionist expanded its team of qualified nutritionists and dietitians. This milestone enabled us to provide even more individualized care and support to our clients.",
    date: "April 1, 2018",
  },
  {
    id: 6,
    title: "Innovating for Clients Story",
    text: "Nutritionist introduced a mobile app, revolutionizing the way clients engage with their personalized nutrition plans. The app allowed for easy tracking of progress, access to resources, and seamless communication with their dedicated nutrition coaches.",
    date: "January 20, 2017",
  },
  {
    id: 7,
    title: "Celebrating Success Stories",
    text: "Nutritionist celebrated its 500th client success story. These stories showcased the positive impact of personalized nutrition coaching on individuals' lives, further motivating our team to continue providing exceptional services.",
    date: "September 5, 2015",
  },
  {
    id: 8,
    title: "Expanding Reach Story",
    text: "Nutritionist expanded its services by launching an online platform, allowing individuals from all over the world to access personalized nutrition plans and expert guidance. This milestone brought convenience and accessibility to our growing client base.",
    date: "June 10, 2014",
  },
  {
    id: 9,
    title: "Research and Expertise Story",
    text: "After extensive research and collaborating with nutrition experts, Sarah Mitchell and her team developed a comprehensive program rooted in scientific knowledge and evidence-based strategies. This milestone marked the establishment of Nutritionist as a trusted source of personalized nutrition coaching.",
    date: "March 15, 2012",
  },
  {
    id: 10,
    title: "The Inception Story",
    text: "On this day, Nutritionist was born with the vision of helping individuals achieve their weight loss and health goals through personalized nutrition coaching. The founder, Sarah Mitchell, recognized the need for a sustainable and effective approach to healthy living, and thus began the journey of Nutritionist.",
    date: "January 1, 2010",
  },
];

const OurStory = () => (
  <section>
    <div>
      <div className="mt-[50px] xl:mt-[100px] 2xl:mt-[150px]">
        <div>
          <h2 className="text-grey-15 text-[28px] xl:text-[38px] xl:leading-[57px] 2xl:text-[48px] 2xl:leading-[72px]  font-urbanist leading-[42px] font-bold text-center">
            Our Story
          </h2>
          <div className="mt-[6px] xl:max-w-[780px] 2xl:max-w-[996px] mx-auto">
            <div className="text-sm text-grey-20 leading-[21px] font-medium text-center xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
              Welcome to Nutritionist, your partner in achieving optimal health
              through personalized nutrition coaching. Our certified
              nutritionists are here to guide you on your weight loss journey.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[50px] xl:mt-[60px] 2xl:mt-20">
        <div className="grid grid-cols-1">
          {stories.map((story, i: number) => (
            <div className="col-span-1" key={story.id}>
              <div className="grid grid-cols-1 xl:grid-cols-2">
                <div className="col-span-1">
                  <div className="bg-yellow-50">
                    <figure className="relative bg-red-900 aspect-[4/3] rounded-tr-xl rounded-tl-xl">
                      <div className="absolute inset-0 w-full h-full">
                        <img
                          src={`/assets/images/story_${story.id}.png`}
                          className="absolute inset-0 h-full object-cover block rounded-tr-xl rounded-tl-xl"
                        />
                      </div>
                    </figure>
                  </div>
                </div>
                <div className="col-span-1 flex">
                  <div className="bg-green-95 flex">
                    <div className="p-[30px] xl:p-[60px] 2xl:p-20">
                      <div>
                        <h3 className="w-max text-grey-15 font-semibold leading:normal text-[20px] xl:text-2xl 2xl:text-[28px] relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[3px] after:bg-green-70">
                          {story.title}
                        </h3>
                        <div className="mt-5 xl:mt-[30px] 2xl:mt-10">
                          <div className="font-medium text-grey-20 text-sm leading-[21px] xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                            {story.text}
                          </div>
                        </div>
                        <div className="mt-5 xl:mt-[30px] 2xl:mt-10">
                          <div className="font-semibold text-grey-20 text-sm leading-[21px] xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]">
                            {story.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export { OurStory };
