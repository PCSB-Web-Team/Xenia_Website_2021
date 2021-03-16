import React, { useEffect } from "react";
import "./SideEvents.css";
import logo from "./logo.svg";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import AOS from "aos";
import "aos/dist/aos.css";

const AsideEvents = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  const fadeLeft = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeTop = {
    hidden: { opacity: 0, y: -150 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="side-events">
      <h1 className="heading">Side Events</h1>

      <Fade>
        <div className="se">
          <img className="logo" src={logo}></img>
          <hr></hr>
          <motion.h2
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1.5 }}
            style={{ textAlign: "center", color: "#ffff" }}
          >
            Event Name
          </motion.h2>
          <hr></hr>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1.5 }}
            style={{ textAlign: "center", color: "#ffff" }}
          >
            WIURWIUREHWERKJNKDFASDF
            SADFJNFDMLASDFKNAISFKNDSLJFAJSKDNSADFJNKSDFAS SDFASN;FDLIAWUERHW
            PEIRNSDAFKN CKJFLJNASDFASDFLJSD SDKJLFASKDNKLNFADS MJKSADNLHuiafh
          </motion.p>
        </div>

        <div className="se">
          <img className="logo" src={logo}></img>
          <hr></hr>
          <motion.h2
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1.5 }}
            style={{ textAlign: "center", color: "#ffff" }}
          >
            Event Name
          </motion.h2>
          <hr></hr>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1.5 }}
            style={{ textAlign: "center", color: "#ffff" }}
          >
            WIURWIUREHWERKJNKDFASDF
            SADFJNFDMLASDFKNAISFKNDSLJFAJSKDNSADFJNKSDFAS SDFASN;FDLIAWUERHW
            PEIRNSDAFKN CKJFLJNASDFASDFLJSD SDKJLFASKDNKLNFADS MJKSADNLHuiafh
          </motion.p>
        </div>

        <div className="se">
          <img className="logo" src={logo}></img>
          <hr></hr>
          <motion.h2
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1.5 }}
            style={{ textAlign: "center", color: "#ffff" }}
          >
            Event Name
          </motion.h2>
          <hr></hr>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1.5 }}
            style={{ textAlign: "center", color: "#ffff" }}
          >
            WIURWIUREHWERKJNKDFASDF
            SADFJNFDMLASDFKNAISFKNDSLJFAJSKDNSADFJNKSDFAS SDFASN;FDLIAWUERHW
            PEIRNSDAFKN CKJFLJNASDFASDFLJSD SDKJLFASKDNKLNFADS MJKSADNLHuiafh
          </motion.p>
        </div>
      </Fade>
    </div>
  );
};

export default AsideEvents;
