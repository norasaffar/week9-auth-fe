import { useState } from 'react';
import { loginFetch ,testFetch } from "../../utils/fetch";
import "./Login.css";

const Login = ({setLoggedIn}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

   const changeHandler = (e, setter, state) => {
     setter(e.target.value);
   };

   const handleSubmit = async (e) => {
    e.preventDefault();
    
    

    const data = await loginFetch(username, password);
     console.log(data);
     await setLoggedIn(data.user);
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