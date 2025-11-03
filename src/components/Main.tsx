import ProjectCards from "./ProjectCards";
import ExperienceCards from "./ExperienceCards";
import ScrollIndicator from "./ScrollIndicator";
import Bio from "./Bio";
import Nav from "./Nav";

function Main() {
  return (
    <main className="flex w-full md:w-3/4 lg:w-1/2 flex-col gap-26 lg:pb-12">
      <aside className="hidden md:block lg:hidden fixed right-20 top-12">
        <Nav />
      </aside>

      <section id="bio">
        <h2 className="pb-10 pt-26 text-brand-main font-bold tracking-wide">bio</h2>
        <Bio />
      </section>

      <section id="experience">
        <h2 className="py-10 text-brand-main font-bold tracking-wide">experience</h2>
        <ExperienceCards />
      </section>

      <section id="projects">
        <h2 className="py-10 text-brand-main font-bold tracking-wide">projects</h2>
        <ProjectCards />
      </section>

        <ScrollIndicator />
    </main>
  );
}

export default Main;
