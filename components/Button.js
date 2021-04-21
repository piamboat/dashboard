import React from 'react';
import classnames from 'classnames';

const Button = ({ color = 'default', disabled, onClick = () => {}, children }) => {
    const buttonClass = classnames(`py-1 px-4 text-white`, 'rounded-md focus:outline-none', {
      'bg-gray-500 hover:bg-gray-600': color === 'default' && !disabled,
      'bg-blue-500 hover:bg-blue-600': color === 'primary' && !disabled,
      'bg-red-500 hover:bg-red-600': color === 'danger' && !disabled,
      'bg-gray-300': disabled,
    });
  
    const handleClick = function () {
      onClick();
    };
  
    return (
      <button className={buttonClass} disabled={disabled} onClick={handleClick}>
        {children}
      </button>
    );
};
  
export default Button;  