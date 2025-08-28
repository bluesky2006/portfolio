import { projects } from "@/data/projects";
import Pill from "./Pill";

function ProjectCards() {
  return (
    <div>
      <div className="flex flex-col gap-15">
        {projects.map((project, index) => {
          const { title, summary, description, stack, link, date } = project;
          return (
            <div
              key={index}
              className="border-brand-main border-l-4 px-5 py-1 text-white drop-shadow-sm transition delay-50 duration-300 hover:translate-x-2"
            >
              <div className="flex flex-row justify-between mb-4">
                <h2 className="text-brand-main">{title}</h2>
                <p className="text-brand-main italic mb-0">{date}</p>
              </div>
              <h3 className="whitespace-pre-line mb-4 italic text-sm">{summary}</h3>
              <p className="whitespace-pre-line">{description}</p>
              <ul className="flex flex-row flex-wrap gap-2 my-6">
                {stack.map((item, index) => (
                  <Pill key={index}>{item}</Pill>
                ))}
              </ul>
              <ul className="flex flex-row flex-wrap gap-5">
                {link.map((item, index) => (
                  <li key={index} className="transition hover:scale-110">
                    <span className="text-brand-main">&gt;</span>{" "}
                    <a href={item.url} target="_blank">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCards;
