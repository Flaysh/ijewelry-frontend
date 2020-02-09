import React from 'react';
import { useForm } from 'react-hook-form';
// import './AddJewelry.css';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

const Login = props => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data => {
    // await axios.post('http://localhost:5000/api/jewelries' , data)
    // .then((response)=> {
    //   console.log(response);
    //   props.history.push('/catalog');
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
 console.log(data)
  }

  
  return (
    <div className='form'>
    <h1>Login</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="User Name" name="User Name" ref={register({required: true, maxLength: 20})} />
      <input type="password" placeholder="Password" name="Password" ref={register({required: true, maxLength: 12, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i})} />
      <button type="submit">Login</button>
    </form>
    </div>
  );
}

export default withRouter(Login);