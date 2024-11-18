import React from 'react';
import FormGroup from './formgroup';
import Button from './button';
import Text from './text';

const LoginForm = ({ onSubmit, styles }) => {
  return (
    <div style={styles.container}>
      <h1>Form Login</h1>
      <Text content="Silahkan Login" style={styles.text} />
      
      <FormGroup
        label="Username"
        type="text"
        placeholder="Fill The Username"
        styles={styles}
      />
      <FormGroup
        label="Password"
        type="password"
        placeholder="Fill The Password"
        styles={styles}
      />
      
      <Button
        text="Login"
        onClick={onSubmit}
        style={styles.button}
      />
      
      <Text
        content="Don't have an account?"
        style={styles.registerText}
      />
      <span style={styles.registerLink}>Register</span>
    </div>
  );
};

export default LoginForm;
