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
    role: "Chief Marketing Officer",
    img: "/assets/images/team_4.png",
  },
];

const teamButtons = [
  {
    id: 1,
    title: "Management Team",
  },
  {
    id: 2,
    title: "Nutritionists and Dietitians",
  },
  {
    id: 3,
    title: "Customer Support",
  },
  {
    id: 4,
    title: "Marketing and Communications",
  },
  {
    id: 5,
    title: "Technology and Development",
  },
];

const Teams = () => {
  return (
    <section>
      <div id="tab-container">
        <ul className="list-none flex justify-between overflow-x-scroll p-5 bg-green-20 rounded-bl-[10px] rounded-br-[10px] xl:px-20 xl:py-6 2xl:py-[30px] 2xl:px-[150px] 2xl:overscroll-none">
          {teamButtons.map((teamButton) => (
            <li key={teamButton.id}>
              <button
                type="button"
                className={`py-3 px-[18px] ${teamButton.id === 1 ? "bg-green-25 border-green-30" : ""} rounded-[6px] border-solid border-[1px] border-transparent text-white text-sm font-semibold leading-[21px] whitespace-nowrap xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-[27px]`}
              >
                {teamButton.title}
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-[30px] xl:mt-10 2xl:mt-[50px]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {teams.map((team) => (
              <div className="col-span-1" key={team.id}>
                <div className="relative">
                  <div className="pb-[60px]">
                    <figure className="relative w-full h-full aspect-square rounded-lg">
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
                        <div className="text-grey-15 text-[20px] font-semibold leading-7 whitespace-nowrap 2xl:text-2xl 2xl:leading-7">
                          {team.name}
                        </div>
                        <div className="mt-2">
                          <div className="text-grey-30 font-medium text-base whitespace-nowrap 2xl:tex-lg 2xl:leading-6">
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
    </section>
  );
};

export { Teams };
