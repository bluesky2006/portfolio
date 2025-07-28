import ProjectCard from "./ProjectCard";
import ScrollIndicator from "./ScrollIndicator";

function Main() {
  return (
    <main className="flex lg:w-[50%] md:w-[80%] flex-col gap-10 lg:py-24 ml-8">
      <div className="mt-2">
        <p>
          For over a decade, I worked in publishing, crafting layouts, wrangling
          type and obsessing over margins and grids. I loved the tactility of
          design, the problem-solving in structure, the satisfaction of clarity.
          But as the industry shifted and tools evolved, I found myself drawn
          more and more to the how behind the screen – the logic, the
          interactivity and the code.
        </p>
        <p>
          What began as a few tentative tweaks to a website soon snowballed into
          a full immersion in full-stack JavaScript development. I completed an
          intensive bootcamp with{" "}
          <a href="https://www.northcoders.com/" target="_blank">
            <strong className="hover:text-brand-main h-6 w-6 text-white transition-colors duration-300">
              Northcoders
            </strong>
          </a>
          , where I built projects using{" "}
          <strong className="hover:text-brand-main h-6 w-6 text-white transition-colors duration-300">
            React
          </strong>
          ,{" "}
          <strong className="hover:text-brand-main h-6 w-6 text-white transition-colors duration-300">
            Node.js
          </strong>
          ,{" "}
          <strong className="hover:text-brand-main h-6 w-6 text-white transition-colors duration-300">
            PostgreSQL
          </strong>{" "}
          and{" "}
          <strong className="hover:text-brand-main h-6 w-6 text-white transition-colors duration-300">
            MongoDB
          </strong>{" "}
          – with a dash of AI and mobile thrown in for good measure. Along the
          way, I discovered that many of the instincts I’d honed in design –
          clarity, usability, structure and communication – translate
          beautifully to code.
        </p>
        <p>
          Now I’m looking to combine the best of both worlds: visual thinking
          and logical flow, aesthetic polish and functional design. Whether I’m
          building an interface, debugging a server or just trying to get that
          last media query to behave, I bring curiosity, craft and a drive to
          make things that feel good to use.
        </p>
        <p>
          Outside of work, you’ll find me digging for music, hosting the
          occasional club night, or trying to coax a toddler into her shoes.
        </p>
      </div>
      <h2 className="sticky top-0 bg-brand-bg z-10 py-4">
        <span className="text-sm absolute transform -translate-x-4 translate-y-1 text-brand-main bg-brand-bg">
          &gt;{" "}
        </span>
        projects
      </h2>
      <ProjectCard />
      <ScrollIndicator />
    </main>
  );
}

export default Main;
