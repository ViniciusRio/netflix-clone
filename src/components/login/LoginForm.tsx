import './LoginForm.css';
function LoginForm() {
    return (
        <div className="login-body">
        <div className="login-body-form">
          <h1 className="title">Sign In</h1>
          <div className="login-body-input">
            <input type="text" placeholder="Email or phone number" />
          </div>
          <div className="login-body-input">
            <input type="password" placeholder="Password" />
          </div>
          <button className="btn-submit">Sign In</button>
          <div className="login-body-options">
            <span>Remember me</span>
            <span className="login-body-need-help">Need help?</span>
          </div>
          <div className="login-body-footer">
            <div className="login-body-fb">
              <img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo-blue_57.png" alt="fb" />
              <span>Login with Facebook</span>
            </div>
            <div className="login-body-new-to-nl">
              <span>New to Netflix ?</span>
              <span className="login-body-sign-up">Sign up now.</span>
            </div>
            <div className="login-body-google_captcha">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.
              <span className="login-body-learn-more">Learn more.</span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LoginForm;