import React, { useState } from "react";
import "./Workshops.css";
import "./Details.css";
import { Fade, Zoom } from "react-reveal";

export default function SimpleTabs(props) {
  const [activeDetail, setactiveDetail] = useState(0);

  const activeTab = "head-items active-item";
  const tab = "head-items";
  const det = "mi-content";
  const activeDet = "mi-content active";

  return (
    <div className="mi-container">
      <div className="mi-head">
        <Zoom cascade>
          <div
            className={activeDetail === 0 ? activeTab : tab}
            onClick={() => {
              setactiveDetail(0);
            }}
          >
            Prerequisites
          </div>
          <div
            className={activeDetail === 1 ? activeTab : tab}
            onClick={() => {
              setactiveDetail(1);
            }}
          >
            About
          </div>
          <div
            className={activeDetail === 2 ? activeTab : tab}
            onClick={() => {
              setactiveDetail(2);
            }}
          >
            Date & Venue
          </div>
        </Zoom>
      </div>
      <div className="mi-details">
        <Fade>
          <div className={activeDetail === 0 ? activeDet : det}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            accusamus odio at quia? Asperiores sed dolores ducimus alias nulla
            aliquid labore, molestias voluptatibus ratione placeat consectetur
            iure, autem soluta nesciunt.
          </div>
          <div className={activeDetail === 1 ? activeDet : det}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem est
            quas fugit nostrum incidunt excepturi ullam fugiat iusto, esse
            aperiam totam quasi temporibus earum quae aliquam expedita vel sint
            asperiores.
          </div>
          <div className={activeDetail === 2 ? activeDet : det}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            quibusdam itaque deserunt iste veniam odio nulla non voluptates,
            distinctio exercitationem, voluptas ad commodi tempora fuga eius
            omnis ipsa sequi culpa.
          </div>
        </Fade>
      </div>
    </div>
  );
}
