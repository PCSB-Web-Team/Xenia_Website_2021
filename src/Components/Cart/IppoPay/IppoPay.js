import React, { useState, useEffect } from "react";
import { Ippopay } from "react-ippopay";
import { payAmount } from "../../Config/api/User";
const IppoPay = ({ details }) => {
  const [ippopayOpen, setippopayOpen] = useState(false);
  const [order_id, setorder_id] = useState("order_MpBA$7Z2K");
  const [public_key, setpublic_key] = useState("pk_test_xnM80OWvynpL");

  const ippopayHandler = (e) => {
    if (e.data.status === "success") {
      console.log(e.data);
    }
    if (e.data.status === "failure") {
      console.log(e.data);
    }
  };

  useEffect(() => {
    window.addEventListener("message", ippopayHandler);
  });

  const ippopayOpener = async () => {
    //send backend details
    const res = await payAmount(details);
    console.log(res.data);
    setippopayOpen(() => true);
  };

  const closeippopay = () => {
    setippopayOpen(() => false);
  };

  return (
    <div>
      <div onClick={ippopayOpener} className="priceSummary">
        {" "}
        Proceed to Pay{" "}
      </div>
      <Ippopay
        ippopayOpen={ippopayOpen}
        ippopayClose={true}
        order_id={order_id}
        public_key={public_key}
      />
    </div>
  );
};

export default IppoPay;
