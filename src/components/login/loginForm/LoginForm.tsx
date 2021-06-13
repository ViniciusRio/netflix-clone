import './LoginForm.css';
import { useState } from 'react';
import { firebaseAuth } from '../../../firebase/firebase';

function LoginForm() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    firebaseAuth.signInWithEmailAndPassword(emailOrPhone, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log({user});
        
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const emailOrPhoneChanged = (elementHTML: any) => {
    const emailOrPhoneUpdated = elementHTML.target.value;

    setEmailOrPhone(() => emailOrPhoneUpdated);
  }

  const passwordChanged = (elementHTML: any) => {
    const passwordUpdated = elementHTML.target.value;

    setPassword(() => passwordUpdated);
  }

  return (
    <div className="login-page">
      <div className="login-form">
        <h1 className="title">Sign In</h1>
        <div className="input-group">
          <input type="text" placeholder="Email or phone number" onChange={emailOrPhoneChanged}/>
          <input type="password" placeholder="Password" onChange={passwordChanged} />
        </div>
        <button className="btn-submit" onClick={login}>Sign In</button>
        <div className="login-body-options">
          <span>Remember me</span>
          <span className="login-body-need-help">Need help?</span>
        </div>
        <div className="login-body-footer">
          <div className="login-body-fb">
            <img src="https://findicons.com/files/icons/2155/social_media_bookmark/32/facebook.png" alt="fb" />
            <span>Login with Facebook</span>
          </div>
          <div className="login-body-new-to-nl">
            <span>New to Netflix? </span>
            <span className="login-body-sign-up">Sign up now.</span>
          </div>
          <div className="login-body-google-captcha">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <span className="login-body-learn-more"> Learn more.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;