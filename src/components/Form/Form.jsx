import React, { useContext } from 'react';
import { Input } from '../Input/Input';
import { ThemeContext } from '../../App';
import './Form.css';

export function Form() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`form-${theme}`}>
      <h2 className={`header-${theme}`}>Login form</h2>
      <Input
        type={'text'}
        placeholder={'Enter the username '}
        label={'Enter the UserName: '}
      />
      <Input
        type={'text'}
        placeholder={'Enter the password '}
        label={'Enter the Password: '}
      />
    </div>
  );
}
