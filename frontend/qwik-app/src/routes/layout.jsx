
import { component$, useSignal } from "@builder.io/qwik";
import Header from "../components/header/header";
import Languages from "~/components/languages/Languages";
import About from "~/components/about/About";
import Projects from "~/components/projects/Projects";
import Events from "~/components/events/Events";
import Footer from "~/components/footer/Footer";
import Chat from "~/components/chat/Chat";

export default component$(() => {
  const ChatVisibility = useSignal(false);

  return (
    <div
      className={`App${
        ChatVisibility.value ? " h-screen overflow-hidden" : ""
      }`}
    >
      <Chat ChatVisibility={ChatVisibility} />
      <Header ChatVisibility={ChatVisibility} />
      <main>
        <Languages />
        <About />
        <Projects />
        <Events />
        <Footer />
      </main>
      {/* <Slot /> */}
    </div>
  );
});
