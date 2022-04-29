import { useParams } from "react-router-dom";
import {
  getRelease,
  getReleaseSummary,
  getOutofScopeSummary,
} from "../data/releaseList";
import { Container, Row, Col,Table,Card,CardBody } from "reactstrap";

export default function Release() {
  let params = useParams();
  let release = getRelease(params.releaseNumber);
  let inScopeCompoents = getReleaseSummary(params.releaseNumber);
  let outOfScopeReleaseComponents = getOutofScopeSummary(params.releaseNumber);
  return (
   <Container className='p-5' >
      <h2>Release: {params.releaseNumber}</h2>
      <h3>Release Summary</h3>
      <Table  light striped bordered hover responsive>
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
          <td><CardBody> {release.state} </CardBody></td>
          <td>{release.lastValidation}</td>
        </tr>
        </tbody>
      </Table>
      <h3>In-Scope Components</h3>
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
            <td>{releaseRow.SIT1Validation}</td>
            <td>{releaseRow.propertyChanges}</td>
            <td>{releaseRow.flywayValidation}</td>
            <td>{releaseRow.notes}</td>
          </tr>
        ))}
        </tbody>
      </Table>
      <h3>Out of Scope Components</h3>
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
            <td>{releaseRow.SIT1Validation}</td>
            <td>{releaseRow.notes}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </Container>
  );
}
