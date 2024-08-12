import { Link } from 'react-router-dom';
import "../css/pagesCSS/Form.css";

function LogIn() {
  return (
    <>
      <form>
        <h1>Welcome Back</h1>
        <h2>Login to your account.</h2>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Log In</button>
        <span>
          Don't have an account? <Link to="/register">Sign in</Link>
        </span>
      </form>
    </>
  );
}

export default LogIn;
