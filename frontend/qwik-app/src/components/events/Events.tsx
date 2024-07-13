import {
  component$,
  useClientEffect$,
  useMount$,
  useSignal,
  useStore,
} from "@builder.io/qwik";

interface Event {
  id: number;
  Title: string;
  Description: string;
  Date: string;
  TextDate: string;
}

export default component$(({ Events }) => {
  const events = useSignal({});
  if (Events.value.Events !== undefined) {
    events.value = Events.value.Events;
    console.log("Real time action: ", events.value);
  }
  function EventUrgencyHandler(time: string) {
    // To calculate the time difference of two dates
    const DateToday = new Date();
    const EventDate = new Date(time);
    const Difference_In_Time = EventDate.getTime() - DateToday.getTime();
    const Difference_In_Days = Math.round(
      Difference_In_Time / (1000 * 3600 * 24)
    );
    if (Difference_In_Days === 0) {
      return "#7C3AED";
    }
    if (Difference_In_Days < 0) {
      return "red";
    }
    if (Difference_In_Days < 20) {
      return "orange";
    }
    return "green";
  }
  return (
    <div className="Events flex border-b border-gray-800 flex-col items-center">
      <div
        id="Events"
        className="text-center w-full text-2xl font-bold px-12 border-b border-gray-800 py-6 text-white"
      >
        <h1 className="bg-violet-600 px-8 block mx-auto py-6 rounded w-fit shadow">
          Events
        </h1>
      </div>
      <div className="xl:w-5/6 w-full flex flex-col">
        {Object.keys(events.value).length !== 0 ? (
          events.value.map(({ Title, Description, Date, TextDate }, index) => (
            <div
              className={`w-full flex md-lg:flex-row flex-col border-gray-800${
                events.value.length !== index + 1 ? " border-b " : " "
              }justify-between md-lg:items-center gap-2 lg:gap-10 px-6 sm:px-12 py-10 lg:py-16 list-none`}
            >
              <div className="flex max-w-full md-lg:max-w-[75%] gap-4 lg:gap-8 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  className="w-16 sm:w-8"
                  fill={EventUrgencyHandler(Date)}
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                </svg>
                <div className="flex flex-col">
                  <h2 className="text-xl lg:text-3xl font-semibold">{Title}</h2>
                  <p className="text-gray-400 text-sm sm:text-md">
                    {Description}
                  </p>
                </div>
              </div>
              <span className="text-gray-600 text-center">{TextDate}</span>
            </div>
          ))
        ) : (
          <>
            <div
              className={`w-full flex md-lg:flex-row flex-col border-gray-800 justify-between border-b md-lg:items-center gap-2 lg:gap-10 px-6 sm:px-12 py-10 lg:py-16 list-none animate-pulse`}
            >
              <div className="flex max-w-full md-lg:max-w-[75%] gap-4 lg:gap-8 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  className="w-16 sm:w-8"
                  fill={"#004155"}
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                </svg>
                <div className="flex flex-col gap-3">
                  <h2 className="w-48 h-8 rounded-full bg-slate-700"></h2>
                  <p className="rounded-full w-24 h-4 bg-slate-700"></p>
                </div>
              </div>
              <span className="mx-auto rounded-full bg-slate-700 w-32 h-8"></span>
            </div>
            <div
              className={`w-full flex md-lg:flex-row flex-col border-gray-800 justify-between md-lg:items-center gap-2 lg:gap-10 px-6 sm:px-12 py-10 lg:py-16 list-none animate-pulse`}
            >
              <div className="flex max-w-full md-lg:max-w-[75%] gap-4 lg:gap-8 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  className="w-16 sm:w-8"
                  fill={"#004155"}
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                </svg>
                <div className="flex flex-col gap-3">
                  <h2 className="w-48 h-8 rounded-full bg-slate-700"></h2>
                  <p className="rounded-full w-24 h-4 bg-slate-700"></p>
                </div>
              </div>
              <span className="mx-auto rounded-full bg-slate-700 w-32 h-8"></span>
            </div>
          </>
        )}
      </div>
    </div>
  );
});
