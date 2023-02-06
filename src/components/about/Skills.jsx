import React from "react"

const skillsContent = [
  { skillClass: "p99", skillPercent: "99", skillName: "HTML" },
  { skillClass: "p89", skillPercent: "89", skillName: "JAVASCRIPT" },
  { skillClass: "p80", skillPercent: "80", skillName: "CSS" },
  { skillClass: "p95", skillPercent: "95", skillName: "WORDPRESS" },
  { skillClass: "p95", skillPercent: "95", skillName: "JQUERY" },
  { skillClass: "p95", skillPercent: "95", skillName: "BOOTSTRAP" },
  { skillClass: "p90", skillPercent: "90", skillName: "REACT" },
  { skillClass: "p95", skillPercent: "95", skillName: "MONGODB" },
  { skillClass: "p90", skillPercent: "90", skillName: "EXPRESS" },
  { skillClass: "p95", skillPercent: "95", skillName: "NODEJS" },
  { skillClass: "p90", skillPercent: "90", skillName: "NEXTJS" },
]

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  )
}

export default Skills
