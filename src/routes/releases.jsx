import { Link, Outlet, useNavigate } from "react-router-dom";
import { Table, Card, Button } from "reactstrap";
import { connect } from "react-redux";
import React from "react";
function Releases(props) {
  let releases = props.releases.releaseReducers;
  console.log(props);
  const today = new Date().getDate();

  return (
    <div className="container p-1">
      <h3>Releases</h3>
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
                <td>
                  <Card>{release.description}</Card>
                </td>
                <td>
                  <Card>{release.goLiveDate}</Card>
                </td>
                <td>
                  <Card
                    className={`${
                      release.releaseState === "PENDING" ? "customCard" : "complete"
                    }`}
                  >
                    {" "}
                     {release.goLiveDate <= today ? 'COMPLETE':'PENDING'}
                  </Card>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </nav>
      <Outlet />
      <Link className="d-grid gap-2" to="/create">
        <Button variant="warning" size="lg">
          Create
        </Button>
      </Link>
    </div>
  );
}

function mapStateToProps(releases) {
  return {
    releases,
  };
}

export default connect(mapStateToProps)(Releases);
