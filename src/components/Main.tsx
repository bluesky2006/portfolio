import ProjectCards from "./ProjectCards";
import ExperienceCards from "./ExperienceCards";
import ScrollIndicator from "./ScrollIndicator";
import Bio from "./Bio";
import Nav from "./Nav";

function Main() {
  return (
    <main className="flex w-[100%] md:w-[70%] lg:w-[50%] flex-col gap-20 pt-17 lg:pb-12">
      <aside className="hidden md:block lg:hidden fixed right-20 top-12">
        <Nav />
      </aside>
      <Bio />
      <section id="experience">
        <h2 id="experience" className="sticky top-0 bg-brand-bg z-10 py-10 mb-4 -mr-10">
          experience
        </h2>
        <ExperienceCards />
      </section>
      <section id="projects">
        <h2 id="projects" className="sticky top-0 bg-brand-bg z-10 py-10 mb-4 -mr-10">
          projects
        </h2>
        <ProjectCards />
      </section>
      <ScrollIndicator />
    </main>
  );
}

export default Main;
