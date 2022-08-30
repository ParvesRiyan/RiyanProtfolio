import React, { useState, useEffect } from 'react'
import "./Contact.css"
import contactImg from "../../images/paarves.png"
import { contact } from '../../actions/action.js'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';



const Contact = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [description, setDescription] = useState("")
  const [number, setNumber] = useState("")
  
  
  const {loading, message, error } = useSelector((state) => state.contact);


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(contact(name, email, number, description))
    alert("message sent successfully , i will knock you very soon .");
    navigate("/")
  }

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (message) {
      alert(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [error, message, dispatch]);

  return (
    <>
      <div className="contact">
        <div className="contactHeader">
          <h1>Get In Touch</h1>
          <h3>--Feel Free To Knock Me--</h3>
        </div>
        <div className="contactBox">
          <div className="left">
            <form className='inputForm' onSubmit={submitHandler}>
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
              <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
              <input type="number" required value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Enter your Whatsapp Number' />
              <textarea value={description} required onChange={(e) => setDescription(e.target.value)} cols="30" rows="6" placeholder='Can you please discribe some work ditails' />
              <button type='submit' disabled={loading}>Submit</button>
            </form>
          </div>
          <div className="right">
            <img src={contactImg} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
