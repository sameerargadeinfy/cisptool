import { Link, Outlet } from "react-router-dom";
import { getReleaseList } from "../data/releaseList";
import { Container, Row, Col,Table,Card,CardBody } from "reactstrap";
export default function Releases() {
  let releases = getReleaseList();
  return (
    <div className="container p-5" >
      <nav>
        <Table striped bordered hover thead-light responsive>
          <thead className="thead-light">
            <tr>
              <th>Change Request</th>
              <th>Description</th>
              <th>Go-Live Date</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {releases.map((release) => (
              <tr>
                <td>
                  <Link
                    style={{ display: "block", margin: "1rem 0" }}
                    to={`/releases/${release.crNumber}`}
                    key={release.crNumber}
                  >
                    {release.crNumber}
                  </Link>
                </td>
                <td><CardBody >{release.description}</CardBody></td>
                <td><CardBody >{release.goLiveDate}</CardBody></td>
                <td><CardBody > {release.state}</CardBody></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </nav>
      <Outlet />
    </div>
  );
}
