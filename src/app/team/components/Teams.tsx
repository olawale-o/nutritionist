const teams = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Founder and CEO",
    img: "/assets/images/team_1.png",
  },
  {
    id: 2,
    name: "Emily Thompson",
    role: "Chief Operating Officer",
    img: "/assets/images/team_2.png",
  },
  {
    id: 3,
    name: "John Davis",
    role: "Chief Financial Officer",
    img: "/assets/images/team_3.png",
  },
  {
    id: 4,
    name: "Rachel Adams",
    role: "Chief Financial Officer",
    img: "/assets/images/team_4.png",
  },
];

const Teams = () => {
  return (
    <section>
      <div className="max-w-[1758px] mx-auto">
        <div className="px-4 xl:px-20 2xl:px-[162px]">
          <div id="tab-container">
            <ul className="list-none flex flex-nowrap gap-5 overflow-x-scroll p-5 bg-green-20 rounded-bl-[10px] rounded-br-[10px]">
              <li>
                <button
                  type="button"
                  className="py-3 px-[18px] bg-green-25 rounded-[6px] border-solid border-[1px] border-green-30 text-white text-sm font-semibold leading-[21px] whitespace-nowrap"
                >
                  Management Team
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="whitespace-nowrap py-3 px-[18px] bg-green-25 rounded-[6px] border-solid border-[1px] border-green-30 text-white text-sm font-semibold leading-[21px]"
                >
                  Nutritionists and Dietitians
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="whitespace-nowrap py-3 px-[18px] bg-green-25 rounded-[6px] border-solid border-[1px] border-green-30 text-white text-sm font-semibold leading-[21px]"
                >
                  Customer Support
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="whitespace-nowrap py-3 px-[18px] bg-green-25 rounded-[6px] border-solid border-[1px] border-green-30 text-white text-sm font-semibold leading-[21px]"
                >
                  Marketing and Communications
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="whitespace-nowrap py-3 px-[18px] bg-green-25 rounded-[6px] border-solid border-[1px] border-green-30 text-white text-sm font-semibold leading-[21px]"
                >
                  Technology and Development
                </button>
              </li>
            </ul>
            <div className="mt-50px">
              <div className="grid grid-cols-1 gap-5">
                {teams.map((team) => (
                  <div className="col-span-1" key={team.id}>
                    <div className="relative">
                      <div className="pb-[60px]">
                        <figure className="relative w-full h-full aspect-square rounded-lg bg-red-900">
                          <div className="absolute w-full h-full inset-0 rounded-lg">
                            <img
                              src={team.img}
                              className="absolute inset-0 w-full h-full block object-cover rounded-lg"
                            />
                          </div>
                        </figure>
                      </div>

                      <div className="absolute z-10  bottom-0 w-full pr-[60px]">
                        <div className="bg-green-95 rounded-tr-[20px] p-[20px]">
                          <div>
                            <div className="text-grey-15 text-[20px] font-semibold leading-7">
                              {team.name}
                            </div>
                            <div className="mt-2">
                              <div className="text-grey-30 font-medium text-base">
                                {team.role}
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
        </div>
      </div>
    </section>
  );
};

export { Teams };
