import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Table, Card, Button } from "reactstrap";
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

class PlatformConfig extends Component{
    getData(){
        var data = [{
            component: "Address Service",
            location: "Onprem",
            gitURL: "https://github.service.anz/csp/addressservice",
            hasDb: false,
            artiURL: "Artifactory URL",
            flywayMigration: null,
            flywayUndo: null,
            prodHealth: "Prod Healthcheck URL",
            sit1Health: "SIT1 Healthcheck URL",
    
        },
        {
            component: "Reference Service",
            location: "GCP",
            gitURL: "GitURL",
            hasDb: true,
            artiURL: "Artifactory URL",
            flywayMigration: "Flyway Migration URL",
            flywayUndo: "Flyway Undo URL",
            prodHealth: "Prod Healthcheck URL",
            sit1Health: "SIT1 Healthcheck URL",
    
        }
        ,
        {
            component: "Component number 3",
            location: "GCP",
            gitURL: "GitURL",
            hasDb: true,
            artiURL: "Artifactory URL",
            flywayMigration: "Flyway Migration URL",
            flywayUndo: "Flyway Undo URL",
            prodHealth: "Prod Healthcheck URL",
            sit1Health: "SIT1 Healthcheck URL"
    
        }];
        return data;
    }

    state = {
        show:false,
        selectedComponent:""
    }

    handleShow= ()=>{
        this.setState({show:true})
        console.log(this.state.show);
    }
    handleHide= ()=>{
        this.setState({show:false})
    }

    handleEdit(){
        alert("Edited")
    }

    handleDelete(){
        alert("Deleted")
    }

    handleRowClick=(data)=>{
        console.log(data.component);
        this.setState({selectedComponent:data.component})
        this.setState({show:true});

    }

    render(){
        var platdata = this.getData();
        return(
            <>
            <Container className = "p-2">
                <h2>Platform Configuration</h2>
                <Button><Link to="/addPlatform">Add Platform</Link></Button>

                <Modal show={this.state.show} onHide={this.handleHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.selectedComponent} Settings</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        What would you like to do?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className = "btn btn-warning" onClick={this.handleEdit}>Edit</Button>
                        <Button className = "btn btn-danger" onClick={this.handleDelete}>Delete</Button>
                    </Modal.Footer>
                </Modal>

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Component</th>
                            <th>Location</th>
                            <th>GIT Repo URL</th>
                            <th>Has DB</th>
                            <th>Artifactory URL</th>
                            <th>Flyway Migration Location</th>
                            <th>Flyway Undo Location</th>
                            <th>Prod Healthcheck URL</th>
                            <th>SIT1 Healthcheck URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {platdata.map(data=>{return(
                            <tr key={data.component} onClick={()=>this.handleRowClick(data)}>
                                <td>{data.component}</td>
                                <td>{data.location}</td>
                                <td>{data.gitURL}</td>
                                <td>{data.hasDb ? "T":"F"}</td>
                                <td>{data.artiURL}</td>
                                <td>{data.flywayMigration}</td>
                                <td>{data.flywayUndo}</td>
                                <td>{data.prodHealth}</td>
                                <td>{data.sit1Health}</td>
                            </tr>
                        )})}
                    </tbody>
                </Table>
            </Container>
            </>
        )
    }
    

}
export default PlatformConfig;