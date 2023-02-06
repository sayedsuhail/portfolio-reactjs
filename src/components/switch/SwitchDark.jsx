import React, { useState } from "react"
import lightImage from "../../assets/img/sun.png"

const switchThemeColor = (isDark) => {
  // console.log("switchThemeColor, running...")
  if (isDark) {
    localStorage.setItem("theme-color", "dark")
    document.querySelector("body").classList.add("dark")
    document.querySelector("body").classList.remove("light")
    return
  }

  localStorage.setItem("theme-color", "light")
  document.querySelector("body").classList.add("light")
  document.querySelector("body").classList.remove("dark")
}

const SwitchDark = () => {
  const [isDark, setIsDark] = useState(true)

  switchThemeColor(isDark)

  // useEffect(() => {
  //   switchThemeColor()
  //   console.log("useEffect running, SwitchDark...")
  // }, [isDark])

  const handleLabelClick = () => {
    setIsDark((isDark) => !isDark)
    // switchThemeColor()
  }

  return (
    <label className={`theme-switcher-label d-flex  ${isDark ? "active" : ""}`}>
      <input
        type="checkbox"
        onClick={handleLabelClick}
        className="theme-switcher"
      />
      <div className="switch-handle">
        <span className="light-text">
          <img src={lightImage} alt="swicher" className="filter_1" />
        </span>
        <span className="dark-text">
          <i className="fa fa-moon-o" aria-hidden="true"></i>
        </span>
      </div>
    </label>
  )
}

export default SwitchDark
