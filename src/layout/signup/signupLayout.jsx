import React, { useState } from 'react';
import "./signupLayout.css";

// importing components
import SignupForm from '../../components/forms/signupForm/signupForm';
import Heading from '../../components/reusable/heading/heading';
import Paragraph from '../../components/reusable/paragraph/paragraph';
import LoginForm from '../../components/forms/loginForm/loginForm';


const SignupLayout = () => {

    const [loginFormStatus, setLoginFormStatus] = useState(false);
    const [signupFormStatus, setSignupFormStatus] = useState(true);

    const setFormStatus = () => {
        setLoginFormStatus(!loginFormStatus);
        setSignupFormStatus(!signupFormStatus)
    }

  //Renders signup form and login form on conditional basis.
  return <div className='signupLayoutContainer'>
      <div className="signupLayoutChildContainer">
      <div className="signupColOne flex">
          <Paragraph
          value = "Signin or Signup to get your book now!" 
          weight = {600}
          fontFamily = "Poppins, sans-serif"
          fontSize = {30}
          color = "white"
          textAlign = "center"
          position = "absolute"
          width = "30%"
          />
      </div>

      <div className="signupColTwo flex">
          {
              signupFormStatus ?
              <div className="signupFormCont">
              <Heading 
              value = "Create Account" 
              weight = {900}
              fontFamily = "Poppins, sans-serif"
              fontSize = {30}
              color = "black"
              />
              <SignupForm/>
              <p className='alreadyHaveAnAccountParaSignup'>Already have an account? <span className='loginPara' onClick={setFormStatus}>Log in</span></p>
          </div> 
          : loginFormStatus ?
          <div className="loginFormCont">
              <Heading 
              value = "Login" 
              weight = {900}
              fontFamily = "Poppins, sans-serif"
              fontSize = {30}
              color = "black"
              />
              <LoginForm/>
              <p className='alreadyHaveAnAccountParaLogin'>Don't have an account? <span className='loginPara' onClick={setFormStatus}>Signup</span></p>
          </div>
          :
          ''
          }
      </div>
      </div>

  </div>;
};

export default SignupLayout;
