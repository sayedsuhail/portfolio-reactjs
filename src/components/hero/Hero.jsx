import React, { useState, useEffect } from "react"
import Modal from "react-modal"
import heroImg from "../../assets/img/hero/dark.jpg"
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg"
import cancelImg from "../../assets/img/cancel.svg"
import Index from "../../components/about/index"

const heroContent = {
  heroImage: heroImg,
  heroMobileImage: heroImgMobile,
  heroTitleName: "Sayed Suhail",
  heroDesignation: "MERN & Next Stack Developer",
  heroDescriptions: `As a full-stack developer with extensive experience in MERN (MongoDB, Express, React, Node.js) and Next.js development,
   I am confident in my ability to provide top-notch solutions to meet your needs.
   `,
  heroBtn: "more about me",
}

// for auto-writing name
const name = "MERN & Next Stack Developer"
const words = name.split("")
let index = -1

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)
  function toggleModalOne() {
    setIsOpen(!isOpen)
  }

  // auto-writing name while the words appearing one by one with a blinking cursor

  const [displayedWords, setDisplayedWords] = useState("")
  const [cursor, setCursor] = useState(true)

  useEffect(() => {
    // console.log("running...")
    index = -1
    // console.log("index: ", index)
    const interval = setInterval(() => {
      // console.log("name running...")
      setCursor((prevState) => !prevState)
      if (index === words.length - 1) {
        setCursor(false)
        // index = -1
        clearInterval(interval)
        return
      }

      setDisplayedWords((prevWords) => prevWords + words[index])
      index++
    }, 100)
    return () => clearInterval(interval)
  }, [])

  // console.log("index: ", index)
  // end auto-writing

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroImage
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font">
              I'm {heroContent.heroTitleName}.
              {/* <span>{heroContent.heroDesignation}</span> */}
              <span>
                {displayedWords}
                {cursor && `|`}
              </span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  )
}

export default Hero
