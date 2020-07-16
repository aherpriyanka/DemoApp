import React, { useState } from "react";
import swal from 'sweetalert';
import * as inputRegx from "../../Constants/inputRegx";

const initialState = {
  form: {
    email: "",
    password: "",
  },
  error: {},
};

function Login({history}) {
  const [form, setForm] = useState({ initialState });
  const [error, setError] = useState(initialState);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    form[name] = value;
    setForm({ ...form });
    validate(form, name);
  };

  function validate(form, fieldName) {
    let error = {};
    let isValid = true;
    const isValidEmail = inputRegx.emailRegex.test(form.email);
    const isValidPassword = inputRegx.passwordRegx.test(form.password);
    /* Email validation */
    if (!fieldName && !form.email && !form.password) {
      error.email = "Email required";
      error.password = "Password is required";
      isValid = false;
    }

    if (fieldName && fieldName === "email") {
      if (!form.email || (form.email && form.email.length === 0)) {
        error.email = "Email required";
        isValid = false;
      }
      if (form.email && !isValidEmail) {
        error.email = "Email should be in valid format";
        isValid = false;
      }
    }
    /* Password validation */
    if (fieldName && fieldName === "password") {
      if (!form.password || (form.password && form.password.length === 0)) {
        error.password = "Password is required";
        isValid = false;
      }
      if (form.password && !isValidPassword) {
        error.password =
          "Password should minimum 10 characters, should have at least one uppercase letter, one lowercase letter and one number";
          isValid = false;
      }
    }
    setError(error);
    return error;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(validate(form)){
      if (form.email && form.password) {
        sessionStorage.setItem("loginUser", form.email);
        console.log("in:", history)
        swal("Login Successful");
        history.push('/home');
      }
    }
  };

  return (
    <div className="col-12">
      <h4>Product Log</h4>
      <form className="col-12 col-lg-4 login-form" onSubmit={handleSubmit}>
        <h5>Log In </h5>
        <div className="form-group text-left">
          <label htmlFor="email-address">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
          <div className="error">{error.email}</div>
        </div>
        <div className="form-group text-left">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />
          <div className="error">{error.password}</div>
        </div>
        <button type="submit" className="btn btn-block btn-success">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
