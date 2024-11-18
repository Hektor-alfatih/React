import React from 'react';
import RegisterForm from './registerform';

const styles = {
  container: { textAlign: 'center', padding: '20px' },
  title: { fontSize: '32px', color: '#333', marginBottom: '10px' },
  subtitle: { fontSize: '16px', color: '#555', marginBottom: '20px' },
  formGroup: { margin: '15px 0' },
  label: { display: 'block', fontSize: '14px', color: '#007BFF', marginBottom: '5px' },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxSizing: 'border-box',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#FFC107',
    color: '#000',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  registerText: { fontSize: '14px', color: '#333', marginTop: '20px' },
  link: { color: '#007BFF', fontWeight: 'bold', cursor: 'pointer' },
};

const RegisterPage = () => {
  const handleRegister = () => {
    alert('Registration Successful');
  };

  return <RegisterForm onSubmit={handleRegister} styles={styles} />;
};

export default RegisterPage;
