import { React, useState } from "react";
import TableRows from "./TableRows";
function AddDeleteTableRows() {
  const [rowsData, setRowsData] = useState([]);

  const addTableRows = () => {
    const rowsInput = {
      componentName: "",
      location: "",
      version: "",
      notes:"",
    };
    setRowsData([...rowsData, rowsInput]);
  };
  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
    console.log(rowsInput);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <table className="table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Location</th>
                <th>Version</th>
                <th>Notes</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <TableRows
                rowsData={rowsData}
                deleteTableRows={deleteTableRows}
                handleChange={handleChange}
              />
              <tr>
               <button className="btn btn-outline-success" onClick={addTableRows}>
              Add
            </button>{" "}
          
            <button className="btn btn-outline-success" onClick={addTableRows}>
              Save & Validate
            </button>
            </tr>
            </tbody>
           
          </table>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}
export default AddDeleteTableRows;
