import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div className="Footer py-6 md-lg:py-12 grid items-center grid-cols-1 gap-3 md-lg:grid-cols-3">
      <h1 class="font-bold text-2xl text-center">Jaylord Silverio<span class="text-violet-600">.</span></h1>
      <p class="md-lg:border-x border-gray-800 text-gray-400 text-center">
        Chill & Cool Web Developer
      </p>
      <span class="text-center text-gray-600">Made in 2022</span>
    </div>
  );
});
