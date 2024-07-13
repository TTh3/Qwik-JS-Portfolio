import { component$, useStore } from "@builder.io/qwik";
import PersonalPhoto from "./personalphoto.png";

export default component$(() => {
  const description = useStore({
    buttonDisplay: "block",
    text: "I like to believe that I am open minded and a critical thinker. I like to be around with mates and work alongside them I am a 1st Year Software Engineering Student and a website developer that is currently looking out for a part time job to financially support my future expenses in University and eventually, help my parents with the costs of our future house...",
  });
  // function FullDescriptionToggle() {
  //   description.buttonDisplay = "hidden";
  //   description.text =
  //     "I like to believe that I am open minded and a critical thinker. I like to be around with mates and work alongside them. I am a Year 11 high school student and a website developer that is currently looking out for a part time job to financially support my future courses in University and eventually, help my parents with the costs of our future house. Partaking and adapting in new challenges has always been a part in my list of strengths. I believe that at any task, my mates can rely on me to complete them to the best of my abilities. I believe that failure is not the end, but rather a strong step on the road to success.";
  // }
  return (
    <div className="About w-full border-t border-b border-gray-800">
      <div
        id="About"
        className="text-center text-2xl font-bold px-12p py-6 text-white"
      >
        <h1 className="bg-violet-600 px-8 block mx-auto py-6 rounded w-fit shadow">
          ABOUT
        </h1>
      </div>
      <div className="flex flex-col md-lg:flex-row border-t border-gray-800">
        <div className="w-full md-lg:w-2/3 flex flex-col border-b md-lg:border-b-0 border-r border-gray-800">
          <div className="h-fit border-b border-gray-800 py-16 px-10">
            <h2 className="font-semibold text-2xl">
              Hi! My name is Jaylord Silverio
            </h2>
            <p className="text-gray-400 text-justify my-5">
              {description.text}
            </p>
            <button
              className={`px-4 py-2 bg-violet-500 text-sm rounded-full active:scale-95 hover:bg-violet-600 transition-all duration-250 ${description.buttonDisplay}`}
              onClick$={() => {
                description.buttonDisplay = "hidden";
                description.text =
                  "I like to believe that I am open minded and a critical thinker. I like to be around with mates and work alongside them I am a 1st Year Software Engineering Student and a website developer that is currently looking out for a part time job to financially support my future expenses in University and eventually, help my parents with the costs of our future house. Partaking and adapting in new challenges has always been a part in my list of strengths. I believe that at any task, my mates can rely on me to complete them to the best of my abilities. I believe that failure is not the end, but rather a strong step on the road to success.";
              }}
            >
              continue reading
            </button>
          </div>
          <div
            className={`h-full text-xl font-light p-5 bg-slate-900 flex justify-center items-center text-center `}
          >
            <p>
              Failure is a step to{" "}
              <span className="text-green-300">success.</span>
            </p>
          </div>
        </div>
        <div className="w-full md-lg:w-1/3 flex flex-col">
          <div className="h-fit w-full flex justify-center border-b border-gray-800 py-16 px-12">
            <img
              src={PersonalPhoto}
              className="w-full object-contain h-64 rounded overflow-hidden"
              alt="Personal Photo"
            />
          </div>
          <a
            href="#Projects"
            className="w-full h-fit p-5 flex justify-center gap-10 md-lg:justify-between items-center bg-violet-500 hover:tracking-wide hover:bg-violet-600 transition-all cursor-pointer tracking-normal duration-200"
          >
            <span className="text-md md-lg:text-sm border-gray-400">
              Check out my projects.
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#0b1120"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
});
