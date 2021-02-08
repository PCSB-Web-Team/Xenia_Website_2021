import React from 'react';
import "./Contact.scss";
function Contact() {
    return (
        // <div className="container">
        //     <div className="container-left">
        //         <h1>Contact Information</h1>
        //     </div>
        //     <div className="container-right">

        //     </div>
        // </div>
        <div className="body">
       <div >
        <div id="contact-container">
            <div className="contact-info">
                <h4>
                    Contact Information
                </h4>
                <p>Fill Up The Form and Click Send</p>
                <div className="icon-text">
                <i class="fa fa-phone" aria-hidden="true"></i>
                    <span>719-239-4783</span>
                </div>
                <div className="icon-text">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    <span>admin@gmail.com</span>
                </div>
                <div className="icon-text">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>456 Grand oval. Ridgewood</span>
                </div>
                <div className="social-media">
                    <a href="#" className="icon-circle">
                        <i className="fa fa-instagram" arial-hidden="true"></i>
                    </a>
                    <a href="#" className="icon-circle">
                        <i className="fa fa-linkedin" arial-hidden="true"></i>
                    </a>
                    <a href="#" className="icon-circle">
                        <i className="fa fa-youtube" arial-hidden="true"></i>
                    </a>
                </div>
                
            </div>
            <form>
                <div className="col">
               <div className="form-group">
                   <label>First Name</label>
                   <input type="text" />
               </div>
               <div className="form-group">
                   <label>Last Name</label>
                   <input type="text" />
               </div>
               </div>
               <div className="col">
               <div className="form-group">
                   <label>E-Mail</label>
                   <input type="email" />
               </div>
               <div className="form-group">
                   <label>Phone Number</label>
                   <input type="tel" />
               </div>
               </div>

               <div className="col">
               <div className="form-group solo">
                   <label>Message</label>
                   <textarea></textarea>
               </div>
               </div>
               <div className="col">
               <div className="form-group solo right">
                   <button className="primary"> Send Message</button>
               </div>
               </div>
          
            </form>
        </div>
        </div>
        </div>
    );
  }
  
  export default Contact;