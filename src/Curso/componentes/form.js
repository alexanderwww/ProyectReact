import React, { useState } from 'react';

function Form() {
  // State variable to track form validity
  const [isValid, setIsValid] = useState(false);

  // Function to validate form
  const validateForm = () => {
    console.log('Entro');
    // Get all form fields
    const fields = document.querySelectorAll('.form-field');

    // Check if all fields are valid
    const formValid = fields.every(field => field.validity.valid);

    // Update state variable
    setIsValid(formValid);
  }

  return (
    <form onSubmit={validateForm}>
      <label>
        Name:
        <input type="text" className="form-field" required />
      </label>
      <label>
        Email:
        <input type="email" className="form-field" required />
      </label>
      <button type="submit" disabled={!isValid}>Submit</button>
    </form>
  );
}

export default Form;