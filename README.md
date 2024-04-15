# CustomButton React Component

## Overview

The `CustomButton` component provides an easily customizable button for your React applications. Define the label, click actions, size, variant, and disabled state all through props.

## Features

- **Custom Label**: Supports custom button text through the `label` prop.
- **Custom Actions**: The `onClick` prop lets you define custom click actions.
- **Variants and Size**: Customizable button styles and sizes (`small`, `med`, `large`) through the `variant` and `size` props.
- **Disabled State**: Can be set to disabled.

## Installation

1. Download both `CustomButton.js` and its associated `CustomButton.css` files.
2. Place them in the appropriate directory in your project.

## Usage

```jsx
import CustomButton from './path/to/CustomButton';

function App() {
  return (
    <CustomButton 
      label="Click Me" 
      onClick={() => console.log('Button clicked')}
      variant="primary"
      size="med"
      disabled={false}
    />
  );
}
```

## Props

- `label` (String): The text displayed on the button.
- `onClick` (Function): Function to be called when the button is clicked.
- `variant` (String): The style variant (`primary`, `secondary`).
- `size` (String): The size of the button (`small`, `med`, `large`).
- `disabled` (Boolean): If `true`, the button will be disabled.

## License

MIT License
