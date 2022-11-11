import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// Check for email field
test('renders email field', () => {
  render(<App />);
  const emailInput = screen.getByPlaceholderText(/email/i);
  expect(emailInput).toBeInTheDocument();
});

// We only want to see the email verification message
// if an invalid email is in the input field.
// Test cases:
// ✔ if email is blank: NO message
// 𐄂 if email is invalid: YES message
// 𐄂 if email is valid: NO message
test('it verifies email', () => {
  render(<App />);
  expect(screen.queryByText(/Must contain valid email/i)).not.toBeInTheDocument()
});