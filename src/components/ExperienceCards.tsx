import { experience } from "@/data/experience";
import Image from "next/image";

function ExperienceCards() {
  return (
    <div>
      <div className="flex flex-col gap-10">
        {experience.map((exp, index) => {
          const { title, company, description, date, logo } = exp;
          return (
            <div
              key={index}
              className="border-brand-main border-l-4 px-5 py-1 text-white drop-shadow-sm transition delay-50 duration-300 hover:translate-x-2"
            >
              <Image
                src={logo}
                width={70}
                height={70}
                alt="logo"
                className="absolute right-0"
              />
              <h2 className="text-brand-main mb-4 mr-20">{title}</h2>
              <h3 className="whitespace-pre-line mb-4 italic text-sm">
                {company}
              </h3>
              <p className="text-brand-main">{date}</p>
              <p className="whitespace-pre-line">{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExperienceCards;
