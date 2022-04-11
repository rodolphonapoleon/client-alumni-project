import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import SelectUSState from "react-select-us-states";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name} className="form-label">
        {label}
      </label>
      <input className="form-control" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error-style">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="form-check-label">
        <input
          {...field}
          {...props}
          type="checkbox"
          className="form-check-input"
        />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error-style">{meta.error}</div>
      ) : null}
    </>
  );
};

const MySelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name} className="form-label">
        {label}
      </label>
      <select {...field} {...props} className="form-select" />
      {meta.touched && meta.error ? (
        <div className="error-style">{meta.error}</div>
      ) : null}
    </>
  );
};

function FormUser() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        stateName: "",
        acceptedTerms: false, // added for our checkbox
        // jobType: "", // added for our select
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        userName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string()
          .email("Invalid email addresss")
          .required("Required"),
        password: Yup.string()
          .min(8, "Must be at least 8 characters long")
          .required("Required"),
        acceptedTerms: Yup.boolean()
          .required("Required")
          .oneOf([true], "You must accept the terms and conditions."),
        stateName: Yup.string()
          // specify the set of valid values for job type
          // @see http://bit.ly/yup-mixed-oneOf
          //   .oneOf(["FL", "MA", "AL", "TX"], "Invalid State")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <Form class="row g-3" onSubmit={formik.handleSubmit}>
          <div class="col-md-4">
            <MyTextInput label="First Name" name="firstName" type="text" />
          </div>
          <div class="col-md-4">
            <MyTextInput label="Last Name" name="lastName" type="text" />
          </div>
          <div class="col-md-4">
            <MyTextInput label="Username" name="userName" type="text" />
          </div>
          <div class="col-md-5">
            <MyTextInput label="Street Address" name="streetName" type="text" />
          </div>
          <div class="col-md-3">
            <MyTextInput label="City" name="cityName" type="text" />
          </div>
          <div class="col-md-2">
            <MySelect label="State" name="stateName">
              <option value="">Select a state</option>
              <option value="FL">Florida</option>
              <option value="MA">Massachusetts</option>
              <option value="AL">Alabama</option>
              <option value="TX">Texas</option>
            </MySelect>
            {/* <label htmlFor="state" className="form-label">
              State
            </label>

            <SelectUSState
              className="form-select"
              id="stateName"
              name="stateName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.stateName}
            /> */}
          </div>
          <div class="col-md-2">
            <MyTextInput label="Zip Code" name="zipCode" type="text" />
          </div>
          <div class="col-md-3">
            <MyTextInput label="Phone Number" name="phoneNumber" type="text" />
          </div>
          <div class="col-md-3">
            <MyTextInput label="Date of Birth" name="dob" type="text" />
          </div>
          <div class="col-md-3">
            <MyTextInput label="Email" name="email" type="text" />
          </div>
          <div class="col-md-3">
            <MyTextInput label="Password" name="password" type="text" />
          </div>
          <div class="col-md-12">
            <MyCheckbox name="acceptedTerms">
              <span className="ms-2">I accept the terms and conditions</span>
            </MyCheckbox>
          </div>
          <div class="col-12">
            <button
              class="btn btn-dark border-primary border-1 rounded-3"
              type="submit"
            >
              Submit form
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormUser;
