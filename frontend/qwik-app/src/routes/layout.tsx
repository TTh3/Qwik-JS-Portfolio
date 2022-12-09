import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";
import Languages from "~/components/languages/Languages";
import About from "~/components/about/About";
import Projects from "~/components/projects/Projects";
import Events from "~/components/events/Events";
import Footer from "~/components/footer/Footer";
export default component$(() => {
  return (
    <div class="App">
      <Header />
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
