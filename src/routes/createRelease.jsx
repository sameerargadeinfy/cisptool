import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addARelease } from "../actions";

function CreateRelease() {
  // Making usestate for setting and
  // fetching a value in jsx

  const state = {
    form: { crNumber: "", description: "", goLiveDate: "", releseState: "" },
	formErrorMessage: {crNumber: "", description: "", goLiveDate: "", releseState: "" },
	formValidity: {crNumber: false, description: false, goLiveDate:false, releseState: false,  buttonActive: true },
	errorMessage: "",
	successMessage: ""
  };
  const submitted = false;

  const handleChange = event => {
    const inputfield = event.target.name;
    const enteredvalue = event.target.value;
    const newFormObj = state.form;
    newFormObj[inputfield] = enteredvalue;
    // createNewForm = () => ({ form: newFormObj });
	// const [form, setForm] = useState();
  //  validateField(inputfield, enteredvalue);
  };

  const validateField = (fieldName, value) => {
    var formmessage = ""
    switch (fieldName) {
      case "crNumber":
        value.length = 10 ? formmessage = "" : formmessage = "Change Request should be 10 characters";
        break;

      case "description":
        value.length <= 200 ? formmessage = "" : formmessage = "description shouldn't be more than 200 characters";
        break;

    //   case "genre":
    //     value !== "" ? formmessage = "" : formmessage = "Please select a genre";
    //     break;

    //   case "summary":
    //     var summaryRegex = new RegExp(/^[\w,\s]{10,100}$/);
    //     summaryRegex.test(value) ? formmessage = "" : formmessage = "Summary must contain atleast 10 characters and not more than 100 characters"
    //     break;

      default:
        break;
    }

    var fromErrObj = state.formErrorMessage;
    fromErrObj[fieldName] = formmessage
    // setformErrorMessage = () => { formErrorMessage: fromErrObj };
	// const [formErrorMessage, setformErrorMessage] = useState();
    var status = false;
    if (formmessage === "") {
      status = true
    }

    var formValidObj = state.formValidity;
    formValidObj[fieldName] = status;
    formValidObj.buttonActive = formValidObj.title && formValidObj.author
      && formValidObj.genre && formValidObj.summary
	//   setformValidity = () => { formValidity: formValidObj };
	//   const [formValidity, setformValidity] = useState();
  };

  const handleSubmit = (e,props) => {
    e.preventDefault();
    props.dispatch(addARelease(state.form));
    submitted = true
  }

  return (
    <React.Fragment>
        <div className="row">
          <div className="col-md-6 offset-3 card">
            <form onSubmit={handleSubmit} >
              <h2 className="text-center">Add New Change Request</h2>
              <div className="form-group">
                <label>Change Request Number</label>
                <input className="form-control" placeholder="Enter the CRNumber" name="crNumber" onChange={handleChange} />
                <div className="text-danger">{state.formErrorMessage.crNumber}</div>
              </div>

              <div className="form-group">
                <label>Description</label>
                <input className="form-control" placeholder="Enter the Description" name="description" onChange={handleChange} />
                <div className="text-danger">{state.formErrorMessage.description}</div>
              </div>

              <div className="form-group">
                <label>Go Live Date</label>
                <select className="form-control" onChange={handleChange} name="goLiveDate">
                </select>
                <div className="text-danger">{state.formErrorMessage.genre}</div>
              </div>

              <div className="form-group">
                <label>State</label>
                <textarea className="form-control" name="summary" onChange={handleChange}></textarea>
                <div className="text-danger">{state.formErrorMessage.releseState}</div>
              </div>

              <button className="btn btn-success" type="submit" disabled={!state.formValidity.buttonActive}>Save</button>
              <br />
              <br />

            </form>
            <div className="text-success">{state.successMessage}</div>
            <div className="text-danger">{state.errorMessage}</div>
          </div>
        </div>
      </React.Fragment>
  );
}

export default connect(null,addARelease)(CreateRelease);
