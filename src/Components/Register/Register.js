import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
// import './AddJewelry.css';
import axios from 'axios';
import { LoginContext } from '../../context/LoginContext';

const Register = props => {

  const auth = useContext(LoginContext);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data => {
    await axios.post('http://localhost:5000/api/users/signup' , data)
    .then((response)=> {
      console.log(response)
      if(response.status === 201){
        auth.login()
      }
    })
    .catch((error) => {
      console.log(error);
      return (<div>
        <h2 style={{color: 'red'}}>Error, please try again.</h2>
      </div>);
    });
  }

  
  return (
    <div className='form'>
    <h1>Register</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="User Name" name="username" ref={register({required: true, maxLength: 80})} /><br/>
      {errors.username && '80 letters max.'}
      <input type="text" placeholder="Email" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} /><br/>
      {errors.email && 'Please enter Valid Email'}
      <input type="password" placeholder="Password" name="password" ref={register({required: true, maxLength: 12, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i})} /><br/>
      {errors.password && '8 digits with uppercase and number'}
      <h3>Are you an admin?</h3>	
      <label><input name="isAdmin" type="radio" value={true} ref={register({ required: true })}/>Yeah</label><br/>
      <label><input name="isAdmin" type="radio" value={false} ref={register({ required: true })}/>Nope</label><br/>
      <button type="submit">Register</button>
    </form>
    </div>
  );
}

export default Register;

