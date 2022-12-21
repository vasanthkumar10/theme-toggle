import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import './Input.css';

export function Input({ label, type, placeholder }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <label className={`label-${theme}`} htmlFor="id">
        {label}
      </label>
      <input
        id="id"
        className={`input-${theme}`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
