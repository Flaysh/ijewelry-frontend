import React from 'react';
import { useForm } from 'react-hook-form';
import './AddJewelry.css';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

const AddJewelry = props => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data => {
    await axios.post('http://localhost:5000/api/jewelries' , data)
    .then((response)=> {
      console.log(response);
      props.history.push('/catalog');
    })
    .catch((error) => {
      console.log(error);
    });
// console.log(data)
  }

  
  return (
    <div className='form'>
    <div className='addJewelry'>
    <h1>Add Jewelry</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Title" name="title" ref={register({required: true, minLength: 3, maxLength: 30})} /><br/>
      {errors.title && 'This is just a title, not a letter!'}
      <input type="text" placeholder="Description" name="description" ref={register({required: true, minLength: 10, maxLength: 90})} /><br/>
      {errors.description && 'Cmon, say some words.'}
      <input type="text" placeholder="Image Link" name="image" ref={register({required: true, minLength: 10})} /><br/>
      {errors.image && 'Just copy and paste a URL'}
      <input type="number" placeholder="$ Price" name="price" ref={register({required: true})} /><br/>
      {errors.price && 'U worth something, nah?'}
      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
  );
}

export default withRouter(AddJewelry);