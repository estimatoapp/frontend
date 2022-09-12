import './App.css';
import { getAuth, createUserWithEmailAndPassword as createUser } from 'firebase/auth';
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
      const auth = getAuth();

      try {
        const user = await createUser(auth, email, password);
        console.log(user);
      } catch(error) {
        console.error(error);
      }
    }
  };

  return (
    <div class="container">
      <h2>Sign up</h2>
      <label for="email-input">
        <input id="email-input" type="text" placeholder="Email" onChange={(event) => setEmail(event.target.value)} value={email} />
        Must contain valid email.
      </label>
      <label for="password-input">
        <input id="password-input" type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} value={password} />
        Password must be absurdly complex.
      </label>
      <button onClick={() => createAccount(email, password) }>Create account</button>
    </div>
  );
};

export default App;
