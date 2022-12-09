import { component$, useSignal, useStore } from "@builder.io/qwik";

export default component$(() => {
  const CarouselWidth = useSignal<Element>();
  const CarouselStyle = useSignal(0);
  const ActiveProjectIndex = useSignal(0);
  const SearchInputValue = useSignal("");
  const SearchInput = useSignal<HTMLInputElement>();
  const projects = useStore({
    projects: [
      {
        Id: "0",
        Url: "https://jaylordsilverioproweb.netlify.app/",
        Date: "2021-05-28",
        Tags: ["Main", "HTML", "JS", "CSS"],
        Image: "https://i.ibb.co/xDv4Q4s/project4.jpg",
        Theme: "primary",
        Title: "2021 'Professional' Website",
        UrlTitle: "jaylordsilverioproweb",
        Description:
          "This was my first website that was actually thought-out okay and this was also a start for me to learn and gather design knowledge and inspirations.",
      },
      {
        Id: "1",
        Url: "https://silveriofrontendnotesapp.netlify.app/",
        Date: "2022-02-10",
        Tags: ["Main", "React", "HTML", "JS", "CSS"],
        Image: "https://i.ibb.co/CwW8PSn/silveriofrontendnotesapp-Web-Snip.png",
        Theme: "dark",
        Title: "Notes App",
        UrlTitle: "silveriofrontendnotesapp",
        Description:
          "This is my first ever successful notes app built with Reactjs on the frontend and Django in the backend. The two code sources was separately hosted, one in netlify and the other one in Heroku.",
      },
      {
        Id: "2",
        Url: "https://noreessweetdoughandbatter.netlify.app/",
        Date: "2022-03-29",
        Tags: ["Main", "React", "HTML", "JS", "CSS"],
        Image: "https://i.ibb.co/MNKBZqH/nsbd-Web-Snip.webp",
        Theme: "noree",
        Title: "Noree's Sweet Dough \u0026 Batter",
        UrlTitle: "noreessweetdoughandbatter",
        Description:
          "We sell varieties of cake and breads considering our clients' preferences.",
      },
      {
        Id: "3",
        Url: "https://austateservicesau.netlify.app/",
        Date: "2021-10-19",
        Tags: ["HTML", "JS", "CSS"],
        Image: "https://i.ibb.co/r0zZcXs/Austate-Services-Web-Snip.webp",
        Theme: "dark",
        Title: "Austate Services",
        UrlTitle: "austateservicesau",
        Description:
          "At auSTATE Services we specialise in custom manufacture of Truck Bodies, Trailers, modifications for your prized items. We also specialise in the repair and restoration of heavy vehicles in addition to Trailer Hire, Sales and Servicing.",
      },
      {
        Id: "4",
        Url: "https://jsilverio.vercel.app/",
        Date: "2022-06-10",
        Tags: ["Main", "NextJS", "JSX", "CSS"],
        Image:
          "https://i.ibb.co/6nSXFnt/screencapture-jsilverio-vercel-app-2022-09-14-21-13-15.png",
        Theme: "-color-design-1",
        Title: "2022 NextJS Portfolio Website",
        UrlTitle: "nextjsportfoliosite",
        Description:
          "This is my first personal project using fully NextJS and a sprinkle of TailwindCSS for the styling.",
      },
    ],
  });
  const FilteredProjs =
    SearchInputValue.value.length === 0
      ? projects.projects
      : projects.projects.filter(
          (proj) =>
            proj.Title.includes(SearchInputValue.value) ||
            proj.Description.includes(SearchInputValue.value)
        );
  return (
    <div class="Projects w-full border-b border-gray-800">
      <div
        id="Projects"
        class="text-center text-2xl font-bold px-12 py-6 text-white"
      >
        <h1 class="bg-violet-600 px-8 block mx-auto py-6 rounded w-fit shadow">
          Project
        </h1>
      </div>
      <div class="flex flex-col">
        <div class="projects-filter flex flex-col gap-2 justify-center items-center px-5 py-10 border-y border-gray-800 transtion-all duration-200">
          <label for="project_search" class="flex items-center gap-2">
            <button
              class="py-3 px-4 rounded-lg bg-violet-500 active:scale-95 text-white transition-all duration-200 hover:bg-violet-600"
              onClick$={() => {
                const SearchInputval = SearchInput.value?.value
                  ? SearchInput.value?.value
                  : "";
                SearchInputValue.value = SearchInputval;
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
            <input
              type="text"
              ref={SearchInput}
              class="appearance-none bg-transparent border-b border-violet-500 mr-3 py-2 leading-tight focus:outline-none"
              placeholder="Search Projects"
              id="project_search"
              onKeyPress$={(e) => {
                if (e.key != "Enter") return false;
                const SearchInputval = SearchInput.value?.value
                  ? SearchInput.value?.value
                  : "";
                SearchInputValue.value = SearchInputval;
              }}
            />
          </label>
          <button
            className={`${
              FilteredProjs.length !== projects.projects.length
                ? "flex"
                : "hidden"
            } justify-center items-center gap-2 refresh px-6 py-2 w-fit bg-violet-500 text-sm rounded-full active:scale-95 hover:bg-violet-600 transition-all duration-250`}
            onClick$={() => {
              SearchInputValue.value = "";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-clockwise"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
              />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
            </svg>
            <span>Refresh</span>
          </button>
        </div>
        <div class="flex md-lg:flex-row flex-col">
          <div
            class="md-lg:w-2/3 h-96 border-r border-gray-800 relative overflow-hidden"
            ref={CarouselWidth}
          >
            <div
              className="left-0 transtion-all duration-500 w-full mx-auto whitespace-nowrap relative"
              style={`left: -${CarouselStyle.value}px;`}
            >
              {FilteredProjs.map(({ Image, Title }) => {
                return (
                  <div className={`slide w-full inline-block relative`}>
                    <img
                      src={Image}
                      className="w-full h-96 relative object-top object-cover"
                      alt={Title}
                    />
                  </div>
                );
              })}
            </div>
            <button
              class={`prev absolute bottom-5 left-5 bg-transparent border border-violet-500 text-violet-500 hover:text-white hover:bg-violet-500 px-5 py-3 m-1 rounded-xl ${
                FilteredProjs.length < 2 || ActiveProjectIndex.value === 0
                  ? "hidden"
                  : "flex"
              } items-center gap-3 transtion-all duration-200 scale-100 active:scale-95`}
              onClick$={() => {
                const CarouselWidthValue = CarouselWidth.value
                  ? CarouselWidth.value.clientWidth
                  : 0;
                if (CarouselWidthValue === 0) return;
                if (CarouselStyle.value / CarouselWidthValue === 0) {
                  return;
                }

                CarouselStyle.value -= CarouselWidthValue;
                ActiveProjectIndex.value =
                  CarouselStyle.value / CarouselWidthValue;
                console.log(ActiveProjectIndex);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg>
              <span>Prev</span>
            </button>
            <button
              class={`next absolute bottom-5 right-5 bg-transparent border border-violet-500 text-violet-500 hover:text-white hover:bg-violet-500 px-5 py-3 m-1 rounded-xl ${
                FilteredProjs.length < 2 ||
                ActiveProjectIndex.value === FilteredProjs.length - 1
                  ? "hidden"
                  : "flex"
              } items-center gap-3 transtion-all duration-200 scale-100 active:scale-95`}
              onClick$={() => {
                const CarouselWidthValue = CarouselWidth.value
                  ? CarouselWidth.value.clientWidth
                  : 0;
                if (CarouselWidthValue === 0) return;
                if (
                  CarouselStyle.value / CarouselWidthValue ===
                  FilteredProjs.length - 1
                ) {
                  return;
                }

                CarouselStyle.value += CarouselWidthValue;
                ActiveProjectIndex.value =
                  CarouselStyle.value / CarouselWidthValue;
                // CarouselWidth.value.scrollLeft = 20;
                console.log(ActiveProjectIndex);
              }}
            >
              <span>Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
          <div class="project-details md-lg:w-1/3 flex sm:flex-row flex-col md-lg:flex-col md-lg:items-start items-center justify-center text-center gap-3 p-10">
            <h1 class="font-semibold text-xl lg:text-3xl">
              <span>{FilteredProjs[ActiveProjectIndex.value].Title}</span>
            </h1>
            <p class="md-lg:border-none text-gray-400 md-lg:text-left text-center text-sm md-lg:text-md px-0 sm:px-3 md-lg:px-0 sm:border-x border-gray-600">{FilteredProjs[ActiveProjectIndex.value].Description}</p>
            <a
              href={FilteredProjs[ActiveProjectIndex.value].Url}
              class="px-6 py-2 w-fit bg-violet-500 text-sm rounded-full active:scale-95 hover:bg-violet-600 transition-all duration-250"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
