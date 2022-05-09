import { Link, Outlet, useNavigate } from "react-router-dom";
import { getReleaseList } from "../data/releaseList";
import { Table, Card, Button } from "reactstrap";
import { getAllReleases_AsyncActionCreator } from "../actions";
import { connect } from "react-redux";
 function Releases() {
  let releases = getReleaseList();
  return (
    <div className="container p-5">
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
                      release.state === "PENDING" ? "customCard" : "complete"
                    }`}
                  >
                    {" "}
                    {release.state}
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

const mapStateToProps = (state) => {
  return {
    releases: state.releases,
  };
};
export default connect(mapStateToProps, {
  getAllReleases_AsyncActionCreator,
})(Releases);
