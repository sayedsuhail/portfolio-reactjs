import React from "react"

const experienceContent = [
  {
    year: "Mar 2021 - Present",
    position: "Web Developer",
    compnayName: "Xbytes Information Technology Consultants LLC",
    details: `A dynamic technology solutions provider specializing in web and mobile application
development. At Xbytes, I contribute as a Backend Developer, focusing on creating
and managing efficient APIs, optimizing databases, and delivering scalable solutions
tailored to client needs. The company emphasizes innovation, quality, and client
satisfaction in all projects, driving digital transformation for businesses.`,
  },
  {
    year: "Sep 2020 - Feb 2021",
    position: "Backend Developer",
    compnayName: "Martzon",
    details: `Built a scalable e-commerce platform with seamless product browsing, secure
payments, and efficient order management. Designed robust APIs, optimized
database structures, and integrated user authentication to enhance functionality and
customer engagement. Ensured responsive design and high performance across
devices using the MERN stack.`,
  },
  // {
  //   year: "2017 - 2020",
  //   position: "Android Developer",
  //   compnayName: "Remote",
  //   details: `Working remote on Android mobile development in Android Studio & Java.`,
  // },
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
