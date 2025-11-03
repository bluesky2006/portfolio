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
              className="relative border-brand-main border-l-1 border-dotted rounded-lg px-5 py-5"
            >
              {logo && (
                <Link href={url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={logo}
                    width={70}
                    height={70}
                    alt={`${company} logo`}
                    className="absolute right-0 hover:scale-105 transition"
                  />
                </Link>
              )}

              <h2 className="mb-4 mr-20">{title}</h2>
              <h3 className="whitespace-pre-line mb-4 italic text-sm">{company}</h3>
              <p>{date}</p>
              <p className="whitespace-pre-line mb-0">{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExperienceCards;
