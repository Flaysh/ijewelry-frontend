import React , { useContext } from 'react';
import { useForm } from 'react-hook-form';
// import './AddJewelry.css';
import axios from 'axios';
import { LoginContext } from '../../context/LoginContext';

const Login = props => {

    const auth = useContext(LoginContext);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data => {
    await axios.post('http://localhost:5000/api/users/login' , data)
    .then((response)=> {
      console.log(response);
      if(response.status === 200){
        auth.login();
        // if(response.data.existingUser.isAdmin === true){
        // auth.isAdmin===true;
        // }
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  
  return (
    <div className='form'>
    <h1>Login</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="User Name" name="username" ref={register({required: true, maxLength: 20})} /><br/>
      {errors.username && '80 letters max.'}
      <input type="password" placeholder="Password" name="password" ref={register({required: true, maxLength: 12, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i})} /><br/>
      {errors.password && '8 digits with uppercase and number'}
      <button type="submit">Login</button>

    </form>
    </div>
  );
}

export default Login;