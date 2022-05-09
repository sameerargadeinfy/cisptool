import { useParams } from "react-router-dom";
import { Container, Table, Card, Button } from "reactstrap";
import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";

import {
  getRelease,
  getReleaseSummary,
  getOutofScopeSummary,
} from "../data/releaseList";

export default function Release() {
  let params = useParams();
  let release = getRelease(params.releaseNumber);
  let inScopeCompoents = getReleaseSummary(params.releaseNumber);
  let outOfScopeReleaseComponents = getOutofScopeSummary(params.releaseNumber);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [SIT1Version, setSIT1Version] = useState();
  const [prodVersion, setProdVersion] = useState();
  return (
    <Container>
      <nav>
      <h3>Release: {params.releaseNumber}</h3>
      <br></br>
      </nav>
      <h4>Release Summary</h4>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Versions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          SIT1 Version: { SIT1Version }
          <br></br>
          PROD Version: { prodVersion }
        </Modal.Body>
      </Modal>
      <Table light striped bordered hover responsive>
        <thead>
          <tr>
            <th>Change Request</th>
            <th>Description</th>
            <th>Go-Live Date</th>
            <th>State</th>
            <th>Last Validation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{release.crNumber}</td>
            <td>{release.description}</td>
            <td>{release.goLiveDate}</td>
            <td> {release.state}</td>
            <td>{release.lastValidation}</td>
          </tr>
        </tbody>
      </Table>
      <h5>In-Scope Components</h5>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Component</th>
            <th>Location</th> <th>Target Version</th>
            <th>SIT1 Validation </th> <th>Property Changes</th>{" "}
            <th>Flyway Validation</th> <th> Notes</th>
          </tr>
        </thead>
        <tbody>
          {inScopeCompoents.releaseDetail.map((releaseRow) => (
            <tr>
              <td>{releaseRow.component}</td>
              <td>{releaseRow.location}</td>
              <td>{releaseRow.targetversion}</td>
              <td>
                {" "}
                <Button
                 
                  onClick={() => {
                    handleShow();
                    setSIT1Version(releaseRow.versions.SIT1Version);
                    setProdVersion(releaseRow.versions.prodVersion);
                  }}
                >
                  <Card
                    className={`${
                      releaseRow.SIT1Validation === "ERROR" ? "danger" : "green"
                    }`}
                  >
                    {releaseRow.SIT1Validation}{" "}
                  </Card>
                </Button>
              </td>
              <td>
                <Card>{releaseRow.propertyChanges}</Card>
              </td>
              <td>{releaseRow.flywayValidation}</td>
              <td>{releaseRow.notes}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h5>Out of Scope Components</h5>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Component</th>
            <th>Location</th> <th>Current Prod Version</th>
            <th>SIT1 Validation </th> <th> Notes</th>
          </tr>
        </thead>
        <tbody>
          {outOfScopeReleaseComponents.releaseDetail.map((releaseRow) => (
            <tr>
              <td>{releaseRow.component}</td>
              <td>{releaseRow.location}</td>
              <td>{releaseRow.targetversion}</td>
              <td>
                {" "}
                <Button
                 
                  onClick={() => {
                    handleShow();
                    setSIT1Version(releaseRow.versions.SIT1Version);
                    setProdVersion(releaseRow.versions.prodVersion);
                  }}
                >
                  <Card
                    className={`${
                      releaseRow.SIT1Validation === "ERROR" ? "danger" : "green"
                    }`}
                  >
                    {releaseRow.SIT1Validation}{" "}
                  </Card>
                </Button>
              </td>
              <td>{releaseRow.notes}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
