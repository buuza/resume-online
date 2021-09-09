import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var link = this.props.activities.link;
      var activity = this.props.activities.activity;
      var price = this.props.activities.price;
      var participants = this.props.activities.participants;
      var error = this.props.error;
      var type = this.props.activities.type;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}:
                  <br />
                  <a href={"mailto:" + email}>{email}</a>
                  <br />
                  <a href={"tel:" + phone}>{phone}</a>
                  </p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">
            <div className="widget widget_contact">
               <h4>No plans for the weekend? See the activity suggestion:</h4>
               <p className="small">
                  <a href={link}>{activity}</a><br />
                  Type: {type} <br />
                  Price: ${price} <br />
                  Number of participants: {participants} <br />
               </p>
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default Contact;
