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
              className="group relative rounded-lg px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-main/10 hover:bg-white/90 dark:hover:bg-brand-black/40 hover:border-l-0"
            >
              {/* dotted border overlay */}
              <span className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {logo && (
                <Link href={url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={logo}
                    width={70}
                    height={70}
                    alt={`${company} logo`}
                    className="absolute right-5 hover:scale-105 transition"
                  />
                </Link>
              )}

              <h2 className="mb-4 mr-20 group-hover:text-brand-main">{title}</h2>
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
