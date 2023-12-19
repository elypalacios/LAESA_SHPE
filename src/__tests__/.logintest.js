import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Login from '../pages/login'; 

describe('Login screen', () => {
  test('renders login screen', () => {
    render(
        <Login />
    );

    const loginButton = screen.getByRole('button', { name: /login/i });
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);

    expect(loginButton).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('login function is called on form submission', () => {
    const { getByRole, getByPlaceholderText } = render(
      <Router>
        <Login />
      </Router>
    );

    const loginButton = getByRole('button', { name: /login/i });
    const emailInput = getByPlaceholderText(/Email/i);
    const passwordInput = getByPlaceholderText(/Password/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    fireEvent.click(loginButton);
});
});
