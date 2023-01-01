import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div className="Footer py-6 md-lg:py-12 grid items-center grid-cols-1 gap-3 md-lg:grid-cols-3">
      <h1 className="font-bold text-2xl text-center">Jaylord Silverio<span className="text-violet-600">.</span></h1>
      <p className="md-lg:border-x border-gray-800 text-gray-400 text-center">
        Chill & Cool Web Developer
      </p>
      <span className="text-center text-gray-600">Made in 2022</span>
    </div>
  );
});
