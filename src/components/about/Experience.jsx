import React from "react"

const experienceContent = [
  {
    year: "2022 - Present",
    position: "Web Developer",
    compnayName: "Martzon",
    details: `Writing APIs for Martzon. Also re-developing martzon.com in NextJS advanced technology.`,
  },
  {
    year: "2020 - 2022",
    position: "Backend Engineer",
    compnayName: "Invictus",
    details: `Writing APIs for Invictus in NodeJS, ExpressJS & MongooseDB. Also writing test cases in JEST for APIs`,
  },
  {
    year: "2017 - 2020",
    position: "Android Developer",
    compnayName: "Remote",
    details: `Working remote on Android mobile development in Android Studio & Java.`,
  },
]

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  )
}

export default Experience
