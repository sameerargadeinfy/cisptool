import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AddPlatform extends Component{
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
                this.setState({nameError:"Component must have name"});
                this.setState({validForm:false});
            }else{
                this.setState({nameError:""});
                this.setState({validForm:true});
            }
        }
    }

    AddPlatformtoDatabase=()=>{
        alert("Platform added successfully")

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

    render(){
        return(
        <div style = {{width:500, margin: '0px auto'}}>
            <h3 className="text-center">Add Component</h3>
            <form>
                <div className = 'form-group'>
                    <label>Component Name</label>
                    <input className = 'form-control' onChange={this.handleChange} name="component"></input>
                    <span className='text-danger'>{this.state.nameError}</span>
                </div>
                <div>
                    <label>Location</label>
                    <select onChange={e=>this.setState({location:e.target.value})} className='form-control'>
                        <option value = "On-Prem">On-Prem</option>
                        <option value = "GCP">GCP</option>
                    </select>
                </div>
                <div className = 'form-group'>
                    <label>Github URL</label>
                    <input className = 'form-control' onChange={this.handleChange} name="gitURL"></input>
                </div>
                <div>
                    <label>Has Database?</label>
                    <select onChange={e=>this.setState({hasDB:e.target.value})} className='form-control'>
                        <option value = "true">True</option>
                        <option value = "false">False</option>
                    </select>
                </div>
                <div className = 'form-group'>
                    <label>Artifactory URL</label>
                    <input className="form-control" onChange={this.handleChange} name="artiURL"></input>
                </div>
                <div className = 'form-group'>
                    <label>Flyway Migration URL</label>
                    <input className='form-control' onChange={this.handleChange} name="flywayMigration"></input>
                </div>
                <div>
                    <label>Flyway Undo URL</label>
                    <input className='form-control' onChange={this.handleChange} name="flywayUndo"></input>
                </div>
                <div>
                    <label>Production Health</label>
                    <input className='form-control' onChange={this.handleChange} name="prodHealth"></input>
                </div>
                <div>
                    <label>SIT1 Health</label>
                    <input className='form-control' onChange={this.handleChange} name="sit1Health"></input>
                </div>
                <div style={{textAlign:'center'}}>
                    <button type="button" onClick={this.AddPlatformtoDatabase} className="btn btn-success" disabled = {!(this.state.validForm)}>Add Platform</button>
                </div>
            </form>

        </div>
        )
    };
}

export default AddPlatform;