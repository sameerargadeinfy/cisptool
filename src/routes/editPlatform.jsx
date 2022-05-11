import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {Link,useParams} from 'react-router-dom';


//High level functional component to use react hooks (useParams), not usable in class components
const withRouter = WrappedComponent => props => {
    const params = useParams();
    // etc... other react-router-dom v6 hooks
  
    return ( //Pass hooks as a prop
      <WrappedComponent
        {...props}
        params={params}
        // etc...
      />
    );
  };

class EditPlatform extends Component{
    state = {
        component: null,
        location: "On-Prem",
        gitURL: null,
        hasDB: false,
        artiURL: null,
        flywayMigration: null,
        flywayUndo: null,
        prodHealth: null,
        sit1Health: null,
        nameError:false,
        validForm:false
    }

    handleChange=(e)=>{ //Validate field not empty and less than 255 characters
        var val = e.target.value;
        var name = e.target.name;
        this.setState({[name]:val});
        if (name=="component"){
            if (val.length<1 || val.length>255){
                this.setState({nameError:"Component name must be between 1 and 255 characters"});
                this.setState({validForm:false});
            }else{
                this.setState({nameError:""});
                this.setState({validForm:true});
            }
        }
    }

    submitEdit=()=>{
        alert("Platform Edited successfully")
        console.log(this.state);

        /*
        var addUrl = ""
        axios.post(addUrl)
        .then(alert("Platform added successfully"))
        .catch(error =>{
            if (error.response){
                alert(error.response.data.message);
            }else{
                alert(error.message);
            }
        })
        */

        //Add redux to add to response list
    }

    componentDidMount(){
        const {componentName,componentLocation} = this.props.params;
        this.setState({component:componentName,location:componentLocation});
        //Get result from table using axios
    }

    render(){
        return(
        <div style = {{width:500, margin: '0px auto'}}>
            <h3 className="text-center">Edit {this.state.component} ({this.state.location})</h3>
            
            <form>
                <div className = 'form-group'>
                    <label>Component Name</label>
                    <input className = 'form-control' defaultValue = {this.state.component} name="component" disabled={true}></input>
                    <span className='text-danger'>{this.state.nameError}</span>
                </div>
                <div>
                    <label>Location</label>
                    <select defaultValue={this.state.location} className='form-control' disabled={true}>
                        <option value = "On-Prem">On-Prem</option>
                        <option value = "GCP">GCP</option>
                    </select>
                </div>
                <div className = 'form-group'>
                    <label>Github URL</label>
                    <input className = 'form-control' onChange={this.handleChange} name="gitURL" defaultValue={this.state.gitURL}></input>
                </div>
                <div>
                    <label>Has Database?</label>
                    <select onChange={e=>this.setState({hasDB:e.target.value})} defaultValue={this.state.hasDB} className='form-control'>
                        <option value = "true">True</option>
                        <option value = "false">False</option>
                    </select>
                </div>
                <div className = 'form-group'>
                    <label>Artifactory URL</label>
                    <input className="form-control" onChange={this.handleChange} name="artiURL" defaultValue={this.state.artiURL}></input>
                </div>
                <div className = 'form-group'>
                    <label>Flyway Migration URL</label>
                    <input className='form-control' onChange={this.handleChange} name="flywayMigration" defaultValue={this.state.flywayMigration}></input>
                </div>
                <div>
                    <label>Flyway Undo URL</label>
                    <input className='form-control' onChange={this.handleChange} name="flywayUndo" defaultValue={this.state.flywayUndo}></input>
                </div>
                <div>
                    <label>Production Health</label>
                    <input className='form-control' onChange={this.handleChange} name="prodHealth" defaultValue={this.state.prodHealth}></input>
                </div>
                <div>
                    <label>SIT1 Health</label>
                    <input className='form-control' onChange={this.handleChange} name="sit1Health" defaultValue={this.state.sit1Health}></input>
                </div>
                <div style={{textAlign:'center'}}>
                    <button type="button" onClick={this.submitEdit} className="btn btn-success">Submit Edit</button>
                </div>
            </form>

        </div>
        )
    };
}

export default withRouter(EditPlatform);