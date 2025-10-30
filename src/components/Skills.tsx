import { skills } from "@/data/skills";
import Pill from "./Pill";

function Skills() {
  const { programming, design } = skills;
  return (
    <section className="flex flex-col gap-10 mr-10">
      <div>
        {/* <p>Programming</p> */}
        <div className="flex flex-row gap-2 flex-wrap">
          {programming.map((skill) => (
            <Pill key={skill}>{skill}</Pill>
          ))}
        </div>
      </div>
      {/* <div>
        <p>Design</p>
        <div className="flex flex-row gap-2 flex-wrap">
          {design.map((skill) => (
            <Pill key={skill}>{skill}</Pill>
          ))}
        </div>
      </div> */}
    </section>
  );
}

export default Skills;
