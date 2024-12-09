// components/LoginForm.tsx
"use client"
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";

const LoginForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const initialValues = {
    email: email || "",
    password: "",
    rememberMe: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  });

  const onSubmit = (values: typeof initialValues) => {
    if (values.rememberMe) {
      localStorage.setItem("email", values.email);
    } else {
      localStorage.removeItem("email");
    }

    setSuccessMessage("Login Successful");
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <div>
            <Field type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default LoginForm;
