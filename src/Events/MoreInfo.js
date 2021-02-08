import React from 'react';
import './MoreInfo.css';
import back from './arrow-left.svg';

class MoreInfo extends React.Component{
    render(){
        return(
            <div class="more-info jumbotron text-center py-2 px-5" id={this.props.details.id}>
              <img class='logo' src={this.props.details.logo}></img>
              <h1 class="display-4">{this.props.details.name}</h1>
              <span class> {this.props.details.date} </span>
              <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
             
              <ul class="nav nav-tabs justify-content-center border-dark" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#mi-details" role="tab" aria-controls="home" aria-selected="true">Details</a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#mi-prices" role="tab" aria-controls="profile" aria-selected="false">Prices</a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#mi-contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active" id="mi-details" role="tabpanel" aria-labelledby="home-tab">Complete Details TO be Displayed{this.props.details.info}</div>
                  <div class="tab-pane fade" id="mi-prices" role="tabpanel" aria-labelledby="profile-tab">Team Details and Fees{this.props.details.fees}</div>
                  <div class="tab-pane fade" id="mi-contact" role="tabpanel" aria-labelledby="contact-tab">Contact Details{this.props.details.contact}</div>
                </div>

                <hr class="my-4"/>

                <a onClick={this.props.handleRegister} class="btn btn-lg bg-success" href="#" role="button">Register</a>

                <div class='back-container btn' onClick={this.props.close}><img src={back}/></div>
              
            </div>
        )
    }
}

export default MoreInfo;