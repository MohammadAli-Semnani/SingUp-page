import React, { useEffect, useState } from "react";

//toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../Functions/toastify";

//functions
import { validata } from "../Functions/validate";
//sass
import "../scss/signup.scss";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const [state, setState] = useState({});

  useEffect(() => {
    setErrors(validata(data));
  }, [data]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setState({ ...state, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      notify("your singed up is successfully", "success");
    } else {
      notify("Invalide data", "error");
    }
  };

  return (
    <div className="login-page">
      <h1>SignUp</h1>
      <form onSubmit={submitHandler}>
        <div className="form">
          <label>Name</label>
          <input
            className={errors.name && state.name ? "uncompleted" : "completed"}
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.name && state.name && <span>{errors.name}</span>}
        </div>
        <div className="form">
          <label>Email</label>
          <input
            className={errors.email && state.email ? "uncompleted" : "completed"}
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && state.email && <span>{errors.email}</span>}
        </div>

        <div className="form">
          <label>Password</label>
          <input
            className={errors.password && state.password ? "uncompleted" : "completed"}
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.password && state.password && <span>{errors.password}</span>}
        </div>
        <div className="form">
          <label>Confirm Password</label>
          <input
            className={errors.confirmPassword && state.confirmPassword ? "uncompleted" : "completed"}
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
            required
          />

          {errors.confirmPassword && state.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>

        <div className="checkbox">
          <label>I Accepted privecy policy</label>
          <input
            className={errors.isAccepted && state.isAccepted ? "uncompleted" : "completed"}
            type="checkbox"
            name="isAccepted"
            value={data.isAccepted}
            onChange={changeHandler}
            onFocus={focusHandler}
          />

          {errors.isAccepted && state.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div className="button">
          <a href="##">Login</a>
          <button type="submit">SignUp</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
