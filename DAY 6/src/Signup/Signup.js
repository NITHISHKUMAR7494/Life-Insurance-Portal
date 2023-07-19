import React from 'react';
import './Signup.css';
function Sig() {
  return (
    <div className="LoginPageContainer">
      <div className="LoginPageInnerContainer">
        <div className="ImageContianer">
          <img src="https://i.imgur.com/MYZd7of.png" className="GroupImage" alt="GroupImage" />
        </div>
        <div className="LoginFormContainer">
          <div className="LoginFormInnerContainer">
            <div className="LogoContainer">
              <img src="https://cdn.dribbble.com/users/118246/screenshots/2943355/media/53f28b287e734843125bbc4d55647e6e.gif" className="logo" alt="Logo" />
            </div>
            <header className="header">SignUp</header>
            <header className="subHeader">
              Welcome to <b>NovaGuard!</b> Please Enter your Details to get your Insurance
            </header>
            <div className="inputContainer">
            <label className="label" htmlFor="password">
              <img src="https://i.imgur.com/g5SvdfG.png" className="labelIcon" alt="LabelIcon" />
              <span>Name*</span>
            </label>
            <input
              type="Name"
              className="input"
              id="Name"
              placeholder="Enter Name"
            />
          </div>
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
                  placeholder="Enter Email Address"
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
                  placeholder="Enter Password"
                />
              </div>
              <div className="OptionsContainer">
              </div>
              <button type="submit" className="LoginButton">
                <a href='/Login'>Signup</a>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sig;
