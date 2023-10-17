import React, { Component, createRef } from "react";
import { Fade, Slide } from "react-reveal";
import emailjs from "@emailjs/browser";
import {toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class Contact extends Component {
  state = {
    user_name: "",
    user_email: "",
    user_subject: "",
    user_message: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };
  render() {
    if (!this.props.data) return null;
    this.form = createRef();


    const sendEmail = (e) => {
      e.preventDefault();
      
      this.setState({
        user_name: "",
        user_email: "",
        user_subject: "",
        user_message: "",
      });
      emailjs
        .sendForm(
          "service_pym5vmj",
          "template_bwrveoi",
          this.form.current,
          "LjsVZV2lA2eKh6Srd"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message send.");
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;
    const notify = () => toast.success('✅ Submitted successfully.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });;

    return (
      <section id="contact" style={{overflowX:"hidden"}}>
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form
                ref={this.form}
                onSubmit={sendEmail}
                action=""
                method="post"
                id="contactForm"
                name="contactForm"
              >
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      required
                      name="user_name"
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      placeholder="your name"
                      value={this.state.user_name}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      required
                      name="user_email"
                      type="email"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      placeholder="example@gmail.com"
                      value={this.state.user_email}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">
                      Subject <span className="required">*</span>
                    </label>
                    <input
                      required
                      name="user_subject"
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      placeholder="subject"
                      value={this.state.user_subject}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      required
                      cols="50"
                      rows="15"
                      placeholder="your message ..."
                      id="contactMessage"
                      name="user_message"
                      value={this.state.user_message}
                      onChange={this.handleChange}
                    ></textarea>
                  </div>

                  <div>
                    <button onClick={this.state.user_email && this.state.user_name && this.state.user_subject && this.state.user_message!== '' ? notify:null} type="submit">
                      Submit
                    </button>

                  </div>
                </fieldset>
              </form>

              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {name}
                  <br />
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                  <span>{phone}</span>
                </p>
              </div>

              <div className="widget widget_tweets">
                <h4 className="widget-title">Contact Us</h4>
                <ul id="twitter">
                  <li>
                    <span>
                      Better yet, see us in person! Please give us a call and we
                      can arrange an appointment for you as soon as possible.
                      Located in the heart of North London, my clinic is a short
                      5 minute walk away from Golders Green bus & tube station.
                      We are situated on top of Novellino Restaurant. Bus
                      Routes: 13, 240, 210, 460, 139 Tube Routes: Northern Line
                      (Edgware Branch) - Golders Green Station
                    </span>
                    <b>
                      <a href="./">2 Days Ago</a>
                    </b>
                  </li>
                  <li>
                    <span>
                      My Denture Direct 103a Golders Green Road, Childs Hill,
                      London, NW11 8EL, United Kingdom Landline : 020 8731 8611
                      Mobile : 07775882818 .
                      <b>
                        {" "}
                        Hours : (Mon 09:00 – 17:00) , (Tue 09:00 – 17:00), (Wed
                        09:00 – 17:00) , (Thu 09:00 – 17:00) , (Fri 09:00
                        –17:00) , (Sat By Appointment) , (Sun Closed)
                      </b>
                    </span>
                    <b>
                      <a href="./">3 Days Ago</a>
                    </b>
                  </li>
                </ul>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
