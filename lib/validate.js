export default function login_validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'Must be greater then 8 and less then 20 characters long';
  } else if (values.password.includes(' ')) {
    errors.password = 'Invalid Password';
  }
  return errors;
}

export function register_validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.includes(' ')) {
    errors.name = 'Invalid Name';
  }

  if (!values.surname) {
    errors.surname = 'Required';
  } else if (values.surname.includes(' ')) {
    errors.surname = 'Invalid Surname';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'Must be greater then 8 and less then 20 characters long';
  } else if (values.password.includes(' ')) {
    errors.password = 'Invalid Password';
  }

  if (!values.cpassword) {
    errors.cpassword = 'Required';
  } else if (values.password !== values.cpassword) {
    errors.cpassword = 'Passwords do not match!';
  } else if (values.cpassword.includes(' ')) {
    errors.password = 'Invalid Confirm Password';
  }

  return errors;
}
