import Nav from "../nav/Nav";
import LoginForm from "./loginForm/LoginForm";
import './Login.css';

function Login() {
    return(
        <div className="main">
            <Nav />
            <LoginForm />
        </div>
    );
}

export default Login;