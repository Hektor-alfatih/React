import React from 'react';
import Label from './label';
import Input from './input';

const FormGroup = ({ label, type, placeholder, styles }) => {
  return (
    <div style={styles.formGroup}>
      <Label text={label} style={styles.label} />
      <Input type={type} placeholder={placeholder} style={styles.input} />
    </div>
  );
};

export default FormGroup;
