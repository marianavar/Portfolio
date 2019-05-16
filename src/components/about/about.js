import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src="images/MariaNavarrete.jpg" alt="me" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p>
                 {
                   resumeData.aboutme
                 }
               </p>
               <div className="row">
                  <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
       						   <span>
                        Maria Navarrete
                     </span>
                     <br/>
                     <span>
                     </span>
                     <br/>
                     <span>
                        {resumeData.website}
                     </span>
                     <br/>
       						   <span>
                        {resumeData.address}
                    </span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
