import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Table, Button } from "reactstrap";
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

class PlatformConfig extends Component{
    getData(){
        var data = [{
            component: "Address Service",
            location: "Onprem",
            gitURL: "https://github.service.anz/csp/addressservice",
            hasDb: false,
            artiURL: "https://artifactory.gcp.anz/ui/repos/tree/General/omni-releases%2Fcsp%2Faddressservice",
            flywayMigration: null,
            flywayUndo: null,
            prodHealth: "https://lb.csp.service.anz/api/addressservice/healthcheck/up",
            sit1Health: "https://addressservice-csp-test-fuchsia.apps.omni.service.test/api/addressservice/healthcheck/up",
    
        },
        {
            component: "Reference Service",
            location: "GCP",
            gitURL: "https://github.service.anz/csp/referenceservice ",
            hasDb: true,
            artiURL: "https://artifactory.gcp.anz/ui/repos/tree/General/omni-releases%2Fcsp%2Freferenceservice",
            flywayMigration: "https://github.service.anz/csp/referenceservice/tree/develop/db/src/main/resources/db/migration/oracle",
            flywayUndo: "https://github.service.anz/csp/referenceservice/tree/develop/db/src/main/resources/db/undo/oracle",
            prodHealth: "https://lb.csp.service.anz/api/referenceservice/healthcheck/up",
            sit1Health: "https://referenceservice-csp-test-fuchsia.apps.omni.service.test/api/referenceservice/healthcheck/up",
    
        }
        ,
        {
            component: "Component number 3",
            location: "GCP",
            gitURL: "https://github.service.anz/csp/referenceservice",
            hasDb: true,
            artiURL: "https://artifactory.gcp.anz/ui/repos/tree/General/omni-releases%2Fcsp%2Freferenceservice",
            flywayMigration: "https://github.service.anz/csp/referenceservice/tree/develop/db/src/main/resources/db/migration/psql",
            flywayUndo: "https://github.service.anz/csp/referenceservice/tree/develop/db/src/main/resources/db/undo/psql",
            prodHealth: "https://referenceservice.csp.gcp.anz/api/referenceservice/healthcheck/up",
            sit1Health: "https://referenceservice-preprod.csp.gcpnp.anz/api/referenceservice/healthcheck/up"
        }];
        return data;
    }

    state = {
        show:false,
        selectedComponent:null,
        selectedLocation:null,
        enableButtons:true
    }

    handleShow= ()=>{
        this.setState({show:true})
    }
    handleHide= ()=>{
        this.setState({show:false})
    }

    handleDelete(){
        if (window.confirm('Are you sure you wish to delete this item?')){
            alert("Deleted");
        }
    }

    handleRowClick=(data)=>{
        this.setState({selectedComponent:data.component,selectedLocation:data.location,show:true},()=>{this.setState({enableButtons:false})});
    }

    render(){
        var platdata = this.getData();
        return(
            <>
            <Container className = "p-2">
                <h2>Platform Configuration <Link to="addPlatform" className='btn btn-primary'>Add Component</Link></h2>
                <span>Click on the component name to edit/delete</span>

                <Modal show={this.state.show} onHide={this.handleHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.selectedComponent} ({this.state.selectedLocation}) Settings</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        What would you like to do?
                    </Modal.Body>
                    <Modal.Footer>
                        <Link className='btn btn-warning' to={'/edit/'+this.state.selectedComponent+'/'+this.state.selectedLocation}>Edit</Link>
                        <Button className = "btn btn-danger" onClick={this.handleDelete} disabled={this.state.enableButtons}>Delete</Button>
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
                            <tr key={data.component}>
                                <td onClick={()=>this.handleRowClick(data)}>{data.component}</td>
                                <td>{data.location}</td>
                                <td><a href={data.gitURL}>{data.gitURL}</a></td>
                                <td>{data.hasDb ? "T":"F"}</td>
                                <td><a href={data.artiURL}>{data.artiURL}</a></td>
                                <td><a href={data.flywayMigration}>{data.flywayMigration}</a></td>
                                <td><a href={data.flywayUndo}>{data.flywayUndo}</a></td>
                                <td><a href={data.prodHealth}>{data.prodHealth}</a></td>
                                <td><a href={data.sit1Health}>{data.sit1Health}</a></td>
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