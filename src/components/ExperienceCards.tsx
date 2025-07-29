import { experience } from "@/data/experience";

function ExperienceCards() {
  return (
    <div className="flex flex-col gap-15">
      {experience.map((exp, index) => {
        const { title, company, description, date } = exp;
        return (
          <div
            key={index}
            className="border-brand-main border-l-4 px-5 py-1 text-white drop-shadow-sm transition delay-50 duration-300 hover:translate-x-2"
          >
            <div className="flex flew-row justify-between items-end mb-4">
              <h2 className="text-brand-main">{title}</h2>
              <p className="text-brand-main tracking-widest mb-0">{date}</p>
            </div>
            <h3 className="whitespace-pre-line mb-4 italic text-sm">
              {company}
            </h3>
            <p className="whitespace-pre-line">{description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ExperienceCards;
