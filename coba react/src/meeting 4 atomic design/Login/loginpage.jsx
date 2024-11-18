import React from 'react';
import LoginForm from './loginform';

const styles = {
  container: { textAlign: 'center', padding: '20px' },
  formGroup: { margin: '10px 0' },
  label: { display: 'block', marginBottom: '5px' },
  input: { width: '100%', padding: '8px', boxSizing: 'border-box' },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  text: { marginBottom: '20px' },
  registerText: { marginTop: '20px' },
  registerLink: { color: '#007BFF', cursor: 'pointer' },
};

const LoginPage = () => {
  const handleLogin = () => {
    alert('Login Berhasil');
  };

  return <LoginForm onSubmit={handleLogin} styles={styles} />;
};

export default LoginPage;
