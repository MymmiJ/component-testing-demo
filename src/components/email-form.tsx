import EmailValidator from 'email-validator';
import { useState } from "react";

const handleSubmit = () => console.log('hi');

export const EmailForm = ({ placeholderName = '', placeholderEmail = '', placeholderMessage = ''}) => {
  const [name, setName] = useState(placeholderName);
  const [email, setEmail] = useState(placeholderEmail);
  const [message, setMessage] = useState(placeholderMessage);
  const isValidEmail = EmailValidator.validate(email);
  return <form id="contact-form" onSubmit={handleSubmit} method="POST">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" value={name} onChange={({ target: { value }}) => setName(value)}/>
    </div>
    <div className="form-group">
        <label htmlFor="email-input">Email</label>
        <input
          id="email-input"
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
        { isValidEmail ? null : <div role="alert">Email is invalid!</div>}
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" className="form-control" value={message} onChange={({ target: { value }}) => setMessage(value)}></textarea>
    </div>
    <button disabled={!isValidEmail} type="submit" className="btn btn-primary">Submit</button>
  </form>;
}