import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

function FormUser() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
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
        email: Yup.string()
          .email("Invalid email addresss")
          .required("Required"),
        acceptedTerms: Yup.boolean()
          .required("Required")
          .oneOf([true], "You must accept the terms and conditions."),
        // jobType: Yup.string()
        //   // specify the set of valid values for job type
        //   // @see http://bit.ly/yup-mixed-oneOf
        //   .oneOf(
        //     ["designer", "development", "product", "other"],
        //     "Invalid Job Type"
        //   )
        //   .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit} class="row g-3">
          <div class="col-md-4">
            <label for="validationDefault01" class="form-label">
              First name
            </label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              {...formik.getFieldProps("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="error-style">{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div class="col-md-4">
            <label htmlFor="lastName" class="form-label">
              Last name
            </label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="error-style">{formik.errors.lastName}</div>
            ) : null}
          </div>
          <div class="col-md-4">
            <label for="validationDefaultUsername" class="form-label">
              Username
            </label>
            <div class="input-group">
              <span class="input-group-text" id="inputGroupPrepend2">
                @
              </span>
              <input
                type="text"
                class="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                // required
              />
            </div>
          </div>
          <div class="col-md-5">
            <label for="validationDefault03" class="form-label">
              Street
            </label>
            <input
              type="text"
              class="form-control"
              id="validationDefault03"
              //   required
            />
          </div>
          <div class="col-md-3">
            <label for="validationDefault03" class="form-label">
              City
            </label>
            <input
              type="text"
              class="form-control"
              id="validationDefault03"
              //   required
            />
          </div>
          <div class="col-md-2">
            <label for="validationDefault04" class="form-label">
              State
            </label>
            <select class="form-select" id="validationDefault04">
              <option selected disabled value="">
                Choose...
              </option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="validationDefault05" class="form-label">
              Zip
            </label>
            <input
              type="text"
              class="form-control"
              id="validationDefault05"
              //   required
            />
          </div>
          <div class="col-md-3">
            <label for="validationDefault03" class="form-label">
              Phone Number
            </label>
            <input
              type="text"
              class="form-control"
              id="validationDefault03"
              //   required
            />
          </div>
          <div class="col-md-3">
            <label for="validationDefault03" class="form-label">
              Date of Birth
            </label>
            <input
              type="text"
              class="form-control"
              id="validationDefault03"
              //   required
            />
          </div>
          <div class="col-md-3">
            <label for="validationDefault05" class="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              class="form-control"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error-style">{formik.errors.email}</div>
            ) : null}
          </div>
          <div class="col-md-3">
            <label for="validationDefault05" class="form-label">
              Password
            </label>
            <input
              type="text"
              class="form-control"
              id="validationDefault05"
              //   required
            />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="acceptedTerms"
                {...formik.getFieldProps("acceptedTerms")}
              />

              <label class="form-check-label" for="invalidCheck2">
                Agree to terms and conditions
              </label>
              {formik.touched.acceptedTerms && formik.errors.acceptedTerms ? (
                <div className="error-style">{formik.errors.acceptedTerms}</div>
              ) : null}
            </div>
          </div>
          <div class="col-12">
            <button
              class="btn btn-dark border-primary border-1 rounded-3"
              type="submit"
            >
              Submit form
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default FormUser;
