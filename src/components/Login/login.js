import { useState } from 'react';
import { loginFetch ,testFetch } from "../../utils/fetch";
import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

   const changeHandler = (e, setter, state) => {
     setter(e.target.value);
   };

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hello login!');
    loginFetch(username, password);
  };



  return (
    <div className="login-wrapper">
       <div className="login-inner-container">
          <h4 className="login-title">Login</h4>
          <form onSubmit={(e) => handleSubmit(e)}>
          <input
             className="login-input"
             placeholder="Username"
             onChange={(event) => changeHandler(event, setUsername, username)}
          /> 
         <input
            className="login-input"
            type="password"
            placeholder="Password"
            onChange={(event) => changeHandler(event, setPassword, password)}
          />
        <button type="submit">Login</button>
          </form>
         </div>
    </div>
  );

};
export default Login;