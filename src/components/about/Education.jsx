import React from "react"

const educationContent = [
  {
    year: "Sep 2015 - Mar 2020",
    degree: "BACHELOR DEGREE",
    institute: "COMSATS UNIVERSITY ISLAMABAD",
    details: `Completed my bachelor degree in Software Engineering, From CUI - Abbottabad Campus.`,
  },
  // {
  //   year: "2012",
  //   degree: "MASTER DEGREE",
  //   institute: "KIEV UNIVERSITY",
  //   details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
  //       elit, tempor incididunt`,
  // },
  // {
  //   year: "2009",
  //   degree: "BACHELOR DEGREE",
  //   institute: "TUNIS HIGH SCHOOL",
  //   details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
  //       elit, sed do eiusmod tempor duntt`,
  // },
]

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  )
}

export default Education
