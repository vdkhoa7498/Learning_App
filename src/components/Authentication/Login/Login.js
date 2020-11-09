import React from "react";
import { Provider } from "react-redux";
import { Field, reduxForm } from "redux-form";
import store from "./store";

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = "Required";
  } else if (values.username === "admin") {
    errors.username = "Nice try!";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 4) {
    errors.password = "Password have more 4 character";
  }

  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <>
    <input {...input} placeholder={label} type={type} />
    {touched && error && <span>{error}</span>}
  </>
);

const Form = props => {
  const { handleSubmit } = props;
  const onSubmit = values => console.log(values);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field name="username" component={renderField} label="Username" />
      <Field name="password" type="password" component={renderField} label="Password" />
    
      <button type="submit">Login</button>
    </form>
  );
};

const FormRedux = reduxForm({ form: "syncValidation", validate })(Form);

const Login = () => (
  <Provider store={store}>
    <FormRedux />
  </Provider>
);

export default Login;