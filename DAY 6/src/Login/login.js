import React from 'react';
import './login.css';
function Log() {
  return (
    <div className="LoginPageContainer">
      <div className="LoginPageInnerContainer">
        <div className="ImageContianer">
          <img src="https://img.freepik.com/free-vector/guard-your-privacy-with-our-defense-safety-shield-logo-design_1017-44193.jpg?size=626&ext=jpg&ga=GA1.2.1548176464.1688970544&semt=sph" />
        </div>
        <div className="LoginFormContainer">
          <div className="LoginFormInnerContainer">
            <div className="LogoContainer">
              <img src="https://cdn.dribbble.com/users/118246/screenshots/2943355/media/53f28b287e734843125bbc4d55647e6e.gif" className="logo" alt="Logo" />
            </div>
            <header className="header">Log in</header>
            <header className="subHeader">
              Welcome to <b>NovaGuard!</b> Please Enter your Details to get your Insurance
            </header>

            <form>
              <div className="inputContainer">
                <label className="label" htmlFor="emailAddress">
                  <img src="https://i.imgur.com/Hn13wvm.png" className="labelIcon" alt="LabelIcon" />
                  <span>Email Address*</span>
                </label>
                <input
                  type="email"
                  className="input"
                  id="emailAddress"
                  placeholder="Enter your Email Address"
                />
              </div>
              <div className="inputContainer">
                <label className="label" htmlFor="password">
                  <img src="https://i.imgur.com/g5SvdfG.png" className="labelIcon" alt="LabelIcon" />
                  <span>Password*</span>
                </label>
                <input
                  type="password"
                  className="input"
                  id="password"
                  placeholder="Enter your Password"
                />
              </div>
              <div className="OptionsContainer">
                <div className="checkboxContainer">
                  <input type="checkbox" id="RememberMe" className="checkbox" />
                  <label htmlFor="RememberMe">Remember me</label>
                </div>
                <a href="#" className="ForgotPasswordLink">
                  Forgot Password?
                </a>
              </div>
              <button type="submit" className="LoginButton">
                <a href='/dash'>Login</a>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Log;
