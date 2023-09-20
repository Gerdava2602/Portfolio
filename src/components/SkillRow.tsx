import * as React from "react";

interface ISkillRowProps {
  skills: {
    image: string;
    title: string;
  }[];
}

const SkillRow: React.FunctionComponent<ISkillRowProps> = ({ skills }) => {
  return (
    <div className="skillRow">
      {skills.map((skill) => (
        <div className="card">
          <img src={skill.image} alt={skill.title} />
          <div className="title">
            <h3>{skill.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillRow;
