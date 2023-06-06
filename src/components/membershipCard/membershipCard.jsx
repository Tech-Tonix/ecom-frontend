import React from 'react'
import './membershipCard.css';
import { useState } from 'react';


function MembershipCard() {

    const [is_student, setIsStudent] = useState(false);
    const handleCheckboxChange = (event) => {
        setIsStudent(event.target.checked);
      };

      
  return (
    <div className="registrationPage-card_section">
        <div className="registrationPage-upgrade-card">
          <div className="registrationPage-upgrade_header">
          <h2 className="-registrationPageupgrade_header__title">
          Uppgrade your shooping experience
          with our MAGAZINE CLUB
          </h2>
          <p className="registrationPage-upgrade_header__p">
          for exlusive discounts and free
          shipping SIGN UP FOR THE MAGAZINE CLUB !
          </p>
          </div>
          <div className="registrationPage-upgrade_signUp">
          <div className="registrationPage-upgrade_signUp__p">
            <span>Sign up</span> for the magazine club by accepting the
            <a href="/magazin-club-privacy-policy">privacy policy</a>
          </div>
          </div>
          <div className="registrationPage-upgrade_signUp__checkbox">
            <input type="checkbox" value={is_student}  onChange={handleCheckboxChange}/>
            <p className="registrationPage-upgrade_signUp__checkbox__p">
            I’ve read and 
            accepted all the conditions.
            </p>
          </div>
        </div>
        </div>
  )
}

export default MembershipCard
