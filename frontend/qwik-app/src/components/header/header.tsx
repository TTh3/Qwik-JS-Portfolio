import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import BgDesign from "./bg_design.jpg";

export default component$(({ ChatVisibility }) => {
  return (
    <header
      className="relative flex flex-col w-full min-h-screen overflow-hidden border-b border-gray-800"
      style={"background-image:url('" + BgDesign + "')"}
    >
      <nav className="w-full flex items-center border-b border-gray-800">
        <div className="md:w-2/3 w-1/2 grow flex md:justify-left justify-center items-center">
          <h1 className="text-xl font-bold px-10">
            Js<span className="text-violet-500">.</span>
          </h1>
          <ul className="hidden md:flex w-full justify-center md-lg:gap-5 gap-1 border-x border-gray-800 py-10 h-full">
            <a
              href="#About"
              className="font-semibold text-sm text-gray-400 px-10 hover:text-violet-500 transition ease duration-250"
            >
              ABOUT
            </a>
            <a
              href="#Projects"
              className="font-semibold text-sm text-gray-400 px-10 border-x border-gray-800 hover:text-violet-500 transition ease duration-250"
            >
              PROJECTS
            </a>
            <a
              href="#Events"
              className="font-semibold text-sm text-gray-400 px-10 hover:text-violet-500 transition ease duration-250"
            >
              EVENTS
            </a>
          </ul>
        </div>
        <div className="md:w-1/3 w-1/2 md:border-none border-l border-gray-800 flex items-center h-full grow">
          <button
            className="text-center w-full py-10 text-sm font-semibold text-gray-400 hover:bg-violet-500 hover:text-white ease-out transition duration-400"
            onClick$={() => {
              ChatVisibility.value = true;
            }}
          >
            <span>CHAT WITH ME</span>
          </button>
        </div>
      </nav>
      <div className="h-full w-full flex flex-col grow lg:flex-row">
        <div className="flex-col grow flex justify-between w-full lg:w-2/3 border-b lg:border-b-0 lg:border-r border-gray-800">
          <div className="h-full flex justify-center items-center py-32 px-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl sm:text-5xl font-bold">
                Jsilverio<span className="text-violet-500">.</span>
              </h1>
              <p className="text-md sm:text-xl font-medium text-gray-400">
                An Open Minded Student, Soon-to-be Fullstack Dev
              </p>
              <a
                href="#About"
                className="px-5 py-2 sm:text-md text-sm bg-violet-600 font-semibold w-fit hover:bg-violet-800 active:scale-95 transition-all ease duration-250 rounded-full"
              >
                SHOW MORE
              </a>
            </div>
          </div>
          <div className="w-full flex justify-around h-fit p-5 border-t border-gray-800 text-gray-400">
            <a
              href="."
              className="w-full flex justify-center hover:text-violet-400 transition ease duration-250"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            <a
              href="."
              className="border-x border-gray-800 w-full flex justify-center hover:text-violet-400 transition ease duration-250"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z"
                />
              </svg>
            </a>
            <a
              href="."
              className="w-full flex justify-center hover:text-violet-400 transition ease duration-250"
            >
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="32px"
                height="32px"
              >
                <path d="M 18.5 2 C 10.75 2 6 11.25 6 16 C 6 16 9.25 4 19 4 C 22.625 4 25 6 25 6 C 25 6 24 2 18.5 2 z M 17.5 7 A 3.5 3.5 0 1 0 17.5 14 A 3.5 3.5 0 1 0 17.5 7 z M 20 16 C 20 16 19 17 15 17 L 15 27.5 C 15 28.881 16.119 30 17.5 30 C 18.881 30 20 28.881 20 27.5 L 20 16 z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col sm:flex-row lg:flex-col justify-between lg:items-center">
          <div className="w-full py-10 lg:p-5 border-b sm:border-r lg:border-b border-gray-800">
            <h1 className="font-semibold text-sm text-gray-400 text-center mb-3">
              I AM
            </h1>
            <div className="flex items-center justify-center my-auto">
              <h2 className="font-bold text-gray-800 text-8xl pr-10">A</h2>
              <ul className="list-[circle] ml-2">
                <li>Year 11 Student</li>
                <li>Frontend Developer</li>
                <li>UI Developer</li>
                <li>Critical Thinker</li>
              </ul>
            </div>
          </div>
          <div className="w-full h-full py-10 lg:p-5 flex justify-center items-center">
            <div className="w-fit">
              <h1 className="font-semibold text-sm text-gray-400 mb-2 text-center">
                TODO
              </h1>
              <div className="mb-2">
                <span className="font-semibold text-xs text-main-colour px-2 py-0.5 rounded-full bg-gray-400">
                  Life
                </span>
                <ul className="text-sm mt-1 list-decimal">
                  <li>Smash the school exams</li>
                  <li>Get a part-time job</li>
                  <li>Learn backend programming stuff</li>
                  <li>Create a cool game using Python</li>
                </ul>
              </div>
              <div>
                <span className="font-semibold text-xs text-main-colour px-2 py-0.5 rounded-full bg-gray-400">
                  Website
                </span>
                <ul className="text-sm mt-1 list-decimal">
                  <li>Add Animations</li>
                  <li>Get Better Website Photo Shots</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});
