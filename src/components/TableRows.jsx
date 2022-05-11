function TableRows({rowsData, deleteTableRows, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {componentName, location, version}= data;
            return(

                <tr key={index}>
                <td>
               <input type="text" value={componentName} onChange={(evnt)=>(handleChange(index, evnt))} name="componentName" className="form-control"/>
                </td>
                <td><input type="text" value={location}  onChange={(evnt)=>(handleChange(index, evnt))} name="location" className="form-control"/> </td>
                <td><input type="text" value={version}  onChange={(evnt)=>(handleChange(index, evnt))} name="version" className="form-control" /> </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>Remove</button></td>
            </tr>

            )
        })
   
    )
    
}

export default TableRows;