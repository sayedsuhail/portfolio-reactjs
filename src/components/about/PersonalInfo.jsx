import React from "react"

const personalInfoContent = [
  { meta: "first name", metaInfo: "Sayed" },
  { meta: "last name", metaInfo: "Suhail" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "phone", metaInfo: "+92-3038813846" },
  { meta: "Hours / Week", metaInfo: "30+" },
  { meta: "Email", metaInfo: "hi@sayed.pro" },
  { meta: "langages", metaInfo: "Urdu, English" },
]

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default PersonalInfo
