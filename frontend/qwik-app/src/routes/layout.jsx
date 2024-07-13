import {
  component$,
  useClientEffect$,
  useSignal,
} from "@builder.io/qwik";
import Header from "../components/header/header";
import Languages from "~/components/languages/Languages";
import About from "~/components/about/About";
import Projects from "~/components/projects/Projects";
import Events from "~/components/events/Events";
import Footer from "~/components/footer/Footer";
import Chat from "~/components/chat/Chat";

export default component$(() => {
  const ChatVisibility = useSignal("hidden");
  const API = useSignal({ "": "" });
  useClientEffect$(async () => {
    const res = await fetch("https://api.npoint.io/a99075e0976c84249643");
    const json = await res.json();
    API.value = json;
    console.log(API.value.Events);
  });
  return (
    <div
      className={`App${
        ChatVisibility.value !== "hidden" ? " h-screen overflow-hidden" : ""
      }`}
    >
      <Chat ChatVisibility={ChatVisibility} />
      <Header ChatVisibility={ChatVisibility} />
      <main>
        <Languages />
        <About />
        <Projects />
        <Events Events={API} />
        <Footer />
      </main>
      {/* <Slot /> */}
    </div>
  );
});
