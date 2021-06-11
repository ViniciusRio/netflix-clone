import Nav from "../nav/Nav";
import LoginForm from "./LoginForm";
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