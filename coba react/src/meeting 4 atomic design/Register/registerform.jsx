import React from 'react';
import FormGroup from './formgroup';
import Button from './button';
import Text from './text';
import LinkText from './linktext';

const RegisterForm = ({ onSubmit, styles }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Register</h1>
      <Text content="Silahkan Registrasi terlebih dahulu" style={styles.subtitle} />

      <FormGroup
        label="First Name"
        type="text"
        placeholder="Fill The First Name"
        styles={styles}
      />
      <FormGroup
        label="Second Name"
        type="text"
        placeholder="Fill The Second Name"
        styles={styles}
      />
      <FormGroup
        label="Email"
        type="email"
        placeholder="Fill Email"
        styles={styles}
      />
      <FormGroup
        label="Password"
        type="password"
        placeholder="Fill Password"
        styles={styles}
      />

      <Button text="Register" onClick={onSubmit} style={styles.button} />

      <Text
        content="sudah punya akun"
        style={styles.registerText}
      />
      <LinkText content="Login" href="/login" style={styles.link} />
    </div>
  );
};

export default RegisterForm;
