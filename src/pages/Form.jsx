import { Link } from 'react-router-dom';
import "../css/pagesCSS/Form.css";

function UserForm() {
  return (
    <>
        <form>
            <h1>Register</h1>
            <h2>Create an Account.</h2>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Role' />
            <input type="password" placeholder='Password' />
            <input type="password" placeholder='Confirm Password' />
            <button>Sign Up</button>
            <span>Already have an account? <Link>Sign in</Link></span>
        </form>
    </>
  );
}

export default UserForm;
