import React from "react"

const personalInfoContent = [
  { meta: "first name", metaInfo: "Sayed" },
  { meta: "last name", metaInfo: "Suhail" },
  // { meta: "Age", metaInfo: "27 Years" },
  // { meta: "Nationality", metaInfo: "Pakistani" },
  { meta: "Freelance", metaInfo: "Available" },
  // { meta: "Address", metaInfo: "Islamabad, Pakistan" },
  { meta: "phone", metaInfo: "+92-3038813846" },
  { meta: "Email", metaInfo: "sayed@martzon.com" },
  // { meta: "Skype", metaInfo: " steve.milner" },
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
