import React from 'react';
import "./Contact.css";

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
        <div className='container d-block d-lg-block' id="contact-container">
            <div className="row">
            <div className="contact-info col-lg-4 d-none d-lg-block">
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
            <div className='col-lg-8'>
                <form>
                    <div>
                   <div className="form-group">
                       <label>First Name</label>
                       <input className='form-control' type="text" />
                   </div>
                   <div className="form-group">
                       <label>Last Name</label>
                       <input className='form-control' type="text" />
                   </div>
                   </div>
                   <div className="col">
                   <div className="form-group">
                       <label>E-Mail</label>
                       <input className='form-control' type="email" />
                   </div>
                   <div className="form-group">
                       <label>Phone Number</label>
                       <input className='form-control' type="tel" />
                   </div>
                   </div>

                   <div className="col">
                   <div className="form-group solo">
                       <label>Message</label>
                       <textarea  className='form-control'></textarea>
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
        </div>
        </div>
    );
  }
  
  export default Contact;