import "./About.css";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="section about-us">
    
      <header className="page-headers">
        <h1 className="header-name"> Contact Us </h1>
      </header>

      <div className="row text-center hero">
        <div className="col-lg-12 content1 px-sm-5">
          <Fade bottom duration={1000}>
            <h1 style={{ fontSize: "75px" }}>
              <span className="firstChild">XENIA</span>
            </h1>
          </Fade>
          <Fade duration={1000} bottom>
            <p style={{ textAlign: "left", color: "#ffff" }}>
              Xenia is the annual technical festival organised by the PICT CSI
              Student Branch. This is a technical event with the view to find
              out the best of each and everyone and grow their skills. Xenia not
              only aims to develop the coding skills but also develop your
              aptitude skills.
              <br />
              <br />
              Xenia gives you the chance to discover your talents through its
              various events. The events like campus to corporate gives the
              experience for interviews for placement activities. You will
              discover your coding skills with events like Code strike, Ninja
              Coding Contest and Data Cup. This is the unique opportunity for
              the students to think beyond their regular academics and find out
              their best . The pneuma of learning new things has inspired the
              PICT CSI Branch to present Xenia in order to nurture and cultivate
              the talent.
            </p>
          </Fade>
        </div>
      </div>

      {/* <div className="row text-center hero">
        <div className="col-lg-12 content2 px-sm-5">
          <Fade duration={1000} bottom>
            <h1 style={{ fontSize: "75px" }}>
              <span className="firstChild">PCSB</span>
            </h1>
          </Fade>
          <Fade duration={1000} bottom>
            <p style={{ textAlign: "left", color: "#ffff" }}>
              Xenia is the annual technical festival organised by the PICT CSI
              Student Branch. This is a technical event with the view to find
              out the best of each and everyone and grow their skills. Xenia not
              only aims to develop the coding skills but also develop your
              aptitude skills.
              <br />
              <br />
              Xenia gives you the chance to discover your talents through its
              various events. The events like campus to corporate gives the
              experience for interviews for placement activities. You will
              discover your coding skills with events like Code strike, Ninja
              Coding Contest and Data Cup. This is the unique opportunity for
              the students to think beyond their regular academics and find out
              their best . The pneuma of learning new things has inspired the
              PICT CSI Branch to present Xenia in order to nurture and cultivate
              the talent.
            </p>
          </Fade>
        </div>
      </div> */}
    </div>
  );
};

export default About;
