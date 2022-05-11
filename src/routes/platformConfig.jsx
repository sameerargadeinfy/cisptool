import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Table, Button } from "reactstrap";
import {Link,Navigate} from 'react-router-dom';
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

    handleEdit=()=>{
        var compName = this.state.selectedComponent+this.state.selectedLocation;
        console.log(compName);
        return(<Navigate to='platforms/addPlatforms'></Navigate>);
    }

    handleDelete(){
        alert("Deleted");
    }

    handleRowClick=(data)=>{
        this.setState({selectedComponent:data.component,selectedLocation:data.location,show:true},()=>{this.setState({enableButtons:false})});
    }

    render(){
        var platdata = this.getData();
        return(
            <>
            <Container className = "p-2">
                <h2>Platform Configuration</h2>
                <Link to="addPlatform" className='btn btn-primary'>Add Platform</Link>

                <Modal show={this.state.show} onHide={this.handleHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.selectedComponent} Settings</Modal.Title>
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