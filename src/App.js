import './App.css';
import { useState } from 'react';
import emailValidator from 'email-validator';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isPasswordValid = (password) => {
    return password.length >= 8;
  };

  const isEmailValid = (email) => {
    return emailValidator.validate(email);
  };

  const createAccount = async (email, password) => {
    if (isPasswordValid(password) && isEmailValid(email)) {
      // TODO we need to add a first name and last name field
      const user = {
        firstName: "Bob",
        lastName: "Ross",
        email,
        password
      };

      await fetch('http://localhost:3001/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
    }
  };

  return (
    <div className="container">
      <h2>Sign up</h2>
      <label htmlFor="email-input">
        <input id="email-input" type="text" placeholder="Email" onChange={(event) => setEmail(event.target.value)} value={email} />
        Must contain valid email.
      </label>
      <label htmlFor="password-input">
        <input id="password-input" type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} value={password} />
        Password must be absurdly complex.
      </label>
      <button onClick={() => createAccount(email, password) }>Create account</button>
    </div>
  );
};

export default App;
