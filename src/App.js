import React from 'react';
import './style.css';
import { useFormik } from 'formik';

export default function App() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      emailId: '',
      mobileNumber: undefined,
      gender: '',
      address: ''
    },
    onSubmit: values => {
      alert(
        'Registration Form Submitted \n ' + JSON.stringify(values, null, 2)
      );
      formik.resetForm();
    }
  });

  return (
    <div class="root">
      <div class="form">
        <h1> Registration </h1>
        <form onSubmit={formik.handleSubmit}>
          <div class="form-group">
            <label> First Name </label>
            <input type="text" {...formik.getFieldProps('firstName')} />
          </div>
          <div class="form-group">
            <label> Last Name </label>
            <input type="text" {...formik.getFieldProps('lastName')} />
          </div>
          <div class="form-group">
            <label> Email Id </label>
            <input type="text" {...formik.getFieldProps('emailId')} />
          </div>
          <div class="form-group">
            <label> Mobile Number </label>
            <input type="text" {...formik.getFieldProps('mobileNumber')} />
          </div>
          <div class="form-group">
            <label> Gender </label>
            <select {...formik.getFieldProps('gender')}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="form-group">
            <label> Address </label>
            <textarea type="text" {...formik.getFieldProps('address')} />
          </div>
          <div>
            <button type="submit" class="btn-primary">
              Submit
            </button>
            <button
              type="reset"
              class="btn-secondary"
              onClick={formik.resetForm}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
      <div class="form-state">
        <h4>Form State</h4>
        <h5>Values:</h5>
        <code>
          <pre>{JSON.stringify(formik.values, null, 2)}</pre>
        </code>
      </div>
    </div>
  );
}
