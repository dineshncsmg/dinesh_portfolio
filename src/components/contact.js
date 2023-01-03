import React from 'react';

const Contact = () => (
  <div>
     <section id="contact_dinesh" className="contact_dinesh"> 
    <h2>Contact Me</h2>
    <div className="container">
      <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="contact-info">
                  <div className="card">
                        <h3>Mobile</h3>
                        <a href="tel:+918220541149"> +91 8220541149</a>
                  </div>
              </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="contact-info">
                  <div className="card">
                        <h3>Email</h3>
                        <a href="mailto:+918220541149">dineshncsmg@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="contact-info">
                    <div className="card">
                        <h3>Location</h3>
                        <p>Chennai, India</p>
                  </div>  
              </div>
          </div>
          {/* <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="form">
                <form action="" method="POST">
                    <div className="form-group">
                        <label for="FullName">Full Name</label>
                        <input type="text" className="form-control" id="FullName" aria-describedby="FullName" placeholder="Enter Full Name" />
                      </div>
                    <div className="form-group">
                      <label for="Email">Email Address</label>
                      <input type="email" className="form-control" id="Email" aria-describedby="Email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="Message">Message</label>
                        <textarea rows="6" type="text" className="form-control" id="Message" aria-describedby="Message" placeholder="Enter Message"></textarea>
                      </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>

              </div>
         </div> */}
      </div>
    </div>
  </section>
  </div>
);


export default Contact;
