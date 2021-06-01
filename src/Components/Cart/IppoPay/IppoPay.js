import React, { useState, useEffect } from "react";
import { Ippopay } from "react-ippopay";
import { payAmount, setRegisteredEvents, getLoggedInUser } from "../../Config/api/User";

import { loggedIn } from '../../../Store/Actions';

import { connect } from 'react-redux';

const IppoPay = ({ details, token, loggedIn }) => {
  const [ippopayOpen, setippopayOpen] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [publicKey, setPublicKey] = useState("");

  const ippopayHandler = async (e) => {

    try {
      if (e.data.status === "success") {

        // console.log(e.data);
        
        const detailsData = {
          orderId: e.data.order_id,
          transactionNo: e.data.transaction_no
        }

        const data  = await setRegisteredEvents(detailsData, token)
        
        const userData = await getLoggedInUser( token );

        loggedIn(userData.data.data);

        console.log(userData)
        console.log(data)

      }
      else {
        console.log(e.data);
      }
    }

    catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    window.addEventListener("message", ippopayHandler);
  });

  const ippopayOpener = async () => {
    //send backend details
    try {
      const res = await payAmount(details, token);
      // console.log(res.data);

      if (res.data.success) {

        setOrderId(res.data.data.order.order_id);
        setPublicKey(res.data.data.order.public_key);
        setippopayOpen(true);

      }

    }

    catch (e) {
      console.log(e)
    }
  };

  const closeippopay = () => {
    setippopayOpen(false);
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
        order_id={orderId}
        public_key={publicKey}
      />
    </div>
  );
};

const mapStatesToProps = state => {
  return {
    token: state.token
  }
}

const mapActionsToProps = dispatch => {
  return {
    loggedIn: data => { dispatch(loggedIn(data)) }
  }
}

export default connect(mapStatesToProps, mapActionsToProps)(IppoPay);
