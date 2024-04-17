import React, { useState } from 'react';
import Modal from 'react-modal';
import './ContactUs.css';

Modal.setAppElement('#root'); // This line is needed for accessibility reasons

function ContactUs() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // setModalIsOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Validation
    if (!firstName.trim()) {
      alert('Please enter your first name.');
      return;
    }
    if (!lastName.trim()) {
      alert('Please enter your last name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!message.trim()) {
      alert('Please enter a message.');
      return;
    }
  
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName, lastName, email, message })
    });
    if (response.ok) {
      console.log('Form submitted successfully');
    } else {
      console.error('Failed to submit form');
    }
    setModalIsOpen(false);
  };

  return (
    <>
      <div onClick={() => setModalIsOpen(true)} className="navbar-item">Contact Us</div>

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="modal">
      <button onClick={() => setModalIsOpen(false)} className="close-button">X</button>
      <div className="modal-content">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
            <label>
                Full Name
                <div>
                <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} required/>
                <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} required />
                </div>
            </label>
            <label>
                Email
                <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required/>
            </label>
            <label>
                Tell us a few words
                <textarea placeholder='Provide us feedback or any further questions' value={message} onChange={e => setMessage(e.target.value)} required/>
            </label>
            <button type="submit">Submit</button>
            </form>
        </div>
      </Modal>
    </>
  );
}

export default ContactUs;