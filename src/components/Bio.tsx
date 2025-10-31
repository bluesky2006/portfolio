import Skills from "./Skills";

function Bio() {
  return (
    <div>
      <p>
        For over a decade, I worked in publishing, crafting layouts, wrangling type and obsessing
        over margins and grids. I loved the tactility of print design and solving problems with
        structure – but as the industry shifted, I found myself drawn to code.
      </p>
      <p>
        What began as a few tentative tweaks to{" "}
        <a href="https://glitterball.info/" target="_blank">
          <span className="hover:text-brand-main h-6 w-6 transition-colors duration-300 font-semibold">
            a website
          </span>
        </a>{" "}
        soon snowballed into full immersion in full-stack JavaScript development. I completed an
        intensive bootcamp with{" "}
        <a
          href="https://www.northcoders.com/our-courses/software-development-bootcamp-in-javascript/"
          target="_blank"
        >
          <span className="hover:text-brand-main h-6 w-6 transition-colors duration-300 font-semibold">
            Northcoders
          </span>
        </a>{" "}
        and discovered along the way that many of the instincts I’d honed in design – clarity,
        usability, structure and communication – translate beautifully to&nbsp;code.
      </p>
      <p>
        Now I’m looking to combine the best of both worlds. Whether I’m finessing the spacing in a
        new interface, debugging a server or just trying to get that last media query to behave, I
        bring curiosity, craft and a drive to make things that feel good to&nbsp;use.
      </p>
      <p className="mb-12">
        Outside of work, you’ll find me digging for music, hosting the occasional club night, or
        trying to coax a toddler into her shoes.
      </p>
      <Skills />
    </div>
  );
}

export default Bio;
