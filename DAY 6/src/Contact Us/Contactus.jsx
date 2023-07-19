import React from 'react';
import './Contactus.css';
const Contact = () => {
  return (
    <section className="contact">
      <div className="layout">
        <div className="text-center">
          <h1 className="section-title"> Contact Us </h1>
          <p>
            If You Are Facing Some Issue Then We Are Here To Help You.
          </p>
        </div>
        <div className="grid-8 form">
          <form
            action="php/email.php"
            method="post"
            id="contact_form"
            name="contactForm"
          >
            <div className="form-inline clearfix">
              <div className="form-group grid-6">
                <input
                  type="text"
                  placeholder="name"
                  id="exampleInputName"
                  name="name"
                  className="form-control"
                />
              </div>
              <div className="form-group grid-6">
                <input
                  type="email"
                  placeholder="email address"
                  id="exampleInputEmail"
                  name="email"
                  className="form-control"
                />
              </div>
              <div className="form-group grid-6">
                <input
                  type="text"
                  placeholder="subject"
                  id="exampleInputSubject"
                  name="subject"
                  className="form-control"
                />
              </div>
              <div className="form-group grid-6">
                <input
                  type="text"
                  placeholder="Policy"
                  id="exampleInputCompany"
                  name="company"
                  className="form-control"
                />
              </div>
              <div className="form-group grid-12">
                <textarea
                  placeholder="message"
                  id="exampleInputMessage"
                  rows="3"
                  name="message"
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="form-group">
              <div style={{ display: 'none' }} className="success" id="mail_success">
                Your message has been sent successfully.
              </div>
              {/* success message */}
              <div style={{ display: 'none' }} className="error" id="mail_fail">
                {' '}
                Sorry, error occurred this time sending your message.
              </div>
              {/* error message */}
            </div>
            <div id="submit" className="form-group grid-12">
              <input
                type="submit"
                value="send"
                className="btn btn-lg costom-btn"
                id="send_message"
              />
            </div>
          </form>
        </div>
        {/* /.col-xs-12 .col-sm-offset-2 .col-sm-8 */}
        <div className="grid-12">
          <div className="icon-text">
            <span>find us on</span>
          </div>
          {/* /.icon-text */}
          <div className="icon-holder">
            <ul>
              <li>
                <a target="_blank" href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  <i className="fa fa-behance"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          {/* /.icon-holder */}
        </div>
        {/* /.col-xs-12 */}
      </div>
    </section>
  );
};

export default Contact;
