import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { addARelease } from "../actions";
import store from "../store";
import { Navigate, useNavigate } from "react-router-dom";

function CreateRelease(props) {
  // Making usestate for setting and
  // fetching a value in jsx
  const history = useNavigate();
  const redirect = (path) => {
    history(path);
  };
  const state = {
    form: { crNumber: "", description: "", goLiveDate: "", releaseState: "" },
    formErrorMessage: {
      crNumber: "",
      description: "",
      goLiveDate: "",
      releaseState: "",
    },
    formValidity: {
      crNumber: false,
      description: false,
      goLiveDate: false,
      releaseState: false,
      buttonActive: true,
    },
    errorMessage: "",
    successMessage: "",
  };
  let submitted = false;
  const [formErrorMessage, setformErrorMessage] = useState("");
  const [formValidity, setformValidity] = useState("");
  const [newRelease, setNewRelease] = useState("");
  const [newFormObj, setNewFormObj] = useState(state.form);
  const handleChange = (event) => {
    console.log(event.target.name);
    const inputfield = event.target.name;
    const enteredvalue = event.target.value;

    newFormObj[inputfield] = enteredvalue;
    console.log(newFormObj);

    setNewFormObj((previousState) => {
      return { ...previousState, newFormObj };
    });
    console.log("state.form after setform");
    console.log(state);
    validateField(inputfield, enteredvalue);
  };

  const validateField = (fieldName, value) => {
    var formmessage = "";
    switch (fieldName) {
      case "crNumber":
        value.length == 10
          ? (formmessage = "valid")
          : (formmessage = "Change Request should be 10 characters");
        break;

      case "description":
        value.length <= 200
          ? (formmessage = "valid")
          : (formmessage = "description shouldn't be more than 200 characters");
        break;

      default:
        break;
    }

    var fromErrObj = state.formErrorMessage;
    fromErrObj[fieldName] = formmessage;

    setformErrorMessage({ formErrorMessage: fromErrObj });

    var status = false;

    if (formmessage === "") {
      status = true;
    }

    var formValidObj = state.formValidity;
    formValidObj[fieldName] = status;
    formValidObj.buttonActive =
      formValidObj.title &&
      formValidObj.author &&
      formValidObj.genre &&
      formValidObj.summary;
    setformValidity({ formValidity: formValidObj });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewRelease(() => {
      return { newRelease, newFormObj };
    });
    store.dispatch(addARelease(newFormObj));
    //console.log(props);
    submitted = true;
    redirect("/");
  };

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-6 offset-3 card">
          <form onSubmit={handleSubmit} action="/">
            <h3 className="text-center">Add New Change Request</h3>
            <div className="form-group">
              <label>Change Request Number</label>
              <input
                className="form-control"
                placeholder="Enter the CRNumber"
                name="crNumber"
                onChange={handleChange}
              />
              <div className="text-danger">
                {state.formErrorMessage.crNumber}
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>
              <input
                className="form-control"
                placeholder="Enter the Description"
                name="description"
                onChange={handleChange}
              />
              <div className="text-danger">
                {state.formErrorMessage.description}
              </div>
            </div>

            <div className="form-group">
              <label>Go Live Date</label>
              <select
                className="form-control"
                onChange={handleChange}
                name="goLiveDate"
              ></select>
              <div className="text-danger">
                {state.formErrorMessage.goLiveDate}
              </div>
            </div>

            <div className="form-group">
              <label>State</label>
              <textarea
                className="form-control"
                name="releaseState"
                onChange={handleChange}
              ></textarea>
              <div className="text-danger">
                {state.formErrorMessage.releaseState}
              </div>
            </div>

            <button
              className="btn btn-success"
              type="submit"
              disabled={!state.formValidity.buttonActive}
            >
              Save
            </button>
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

export default connect(null, null)(CreateRelease);
