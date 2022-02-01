import React from 'react';
import SignupForm from '../../components/forms/signupForm/signupForm';
import "./signupLayout.css";

const SignupLayout = () => {
  return <div className='signupLayoutContainer'>
      <div className="signupLayoutChildContainer">
      <div className="signupColOne"></div>
      <div className="signupColTwo">
          <div className="signupform">
              <SignupForm/>
          </div>
      </div>
      </div>

  </div>;
};

export default SignupLayout;
