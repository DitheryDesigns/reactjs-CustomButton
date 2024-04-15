// Import React library
import React from 'react';

// Import the CSS for this component
import './styles/CustomButton.css';

// Define the CustomButton functional component
const CustomButton = ({ 
  label,     // Text to display on the button
  onClick,   // Function to execute on button click
  variant,   // Style variant ('primary', 'secondary', etc.)
  size,      // Size ('small', 'med', 'large')
  disabled   // Whether the button is disabled or not
}) => {

  // Construct the class names string based on the provided props.
  // If a prop like 'variant' or 'size' is passed, append it to the class name.
  // Also append 'customButton--disabled' if the button is set to be disabled.
  let classNames = `customButton ${variant ? `customButton--${variant}` : ''} ${size ? `customButton--${size}` : ''} ${disabled ? 'customButton--disabled' : ''}`;

  // Return JSX to render the button
  return (
    <div>
      {/* Button element with dynamically set class names and other props */}
      <button 
        className={classNames} 
        onClick={onClick} 
        disabled={disabled}
      >
        {label}  {/* Button label */}
      </button>
    </div>
  );
};

// Export the CustomButton component for use in other parts of the application
export default CustomButton;
