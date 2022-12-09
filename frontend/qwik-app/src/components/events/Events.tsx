import { component$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const events = useStore({
    events: [
      {
        id: 0,
        Title: "Family Christmas",
        Description:
          "A time with my family, celebrating our Messiah's birthday.",
        Date: "12/25/2022",
        TextDate: "December 25, 2022",
      },
      {
        id: 1,
        Title: "New Year, 2023",
        Description:
          "A time with my family, celebrating the year that is yet to be the hardest for me.",
        Date: "01/01/2023",
        TextDate: "January 1, 2022",
      },
    ],
  });
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
    <div class="Events flex border-b border-gray-800 flex-col items-center">
      <div
        id="Events"
        class="text-center w-full text-2xl font-bold px-12 border-b border-gray-800 py-6 text-white"
      >
        <h1 class="bg-violet-600 px-8 block mx-auto py-6 rounded w-fit shadow">
          Events
        </h1>
      </div>
      <div className="w-5/6">
        {events.events.map(({ Title, Description, Date, TextDate }, index) => (
          <li
            class={`w-full flex border-gray-800${
              events.events.length !== index + 1 ? " border-b " : " "
            }justify-between items-center gap-10 px-12 py-16 list-none`}
          >
            <div class="flex gap-8 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill={EventUrgencyHandler(Date)}
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
              </svg>
              <div className="flex flex-col">
                <h2 class="text-3xl font-semibold">{Title}</h2>
                <p class="text-gray-400">{Description}</p>
              </div>
            </div>
            <span class="text-gray-600">{TextDate}</span>
          </li>
        ))}
      </div>
    </div>
  );
});
