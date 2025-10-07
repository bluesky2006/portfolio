import { experience } from "@/data/experience";
import Image from "next/image";
import Link from "next/link";

function ExperienceCards() {
  return (
    <div>
      <div className="flex flex-col gap-15">
        {experience.map((exp, index) => {
          const { title, company, description, date, logo, url } = exp;
          return (
            <div
              key={index}
              className="border-brand-main border-l-4 px-5 py-1 drop-shadow-sm transition delay-50 duration-300 hover:translate-x-2"
            >
              <Link href={url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={logo}
                  width={70}
                  height={70}
                  alt={`${company} logo`}
                  className="absolute right-0"
                />
              </Link>
              <h2 className="text-brand-main mb-4 mr-20">{title}</h2>
              <h3 className="whitespace-pre-line mb-4 italic text-sm">{company}</h3>
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
