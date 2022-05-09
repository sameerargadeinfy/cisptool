import './App.css';
import { Outlet } from 'react-router-dom';
import Releases, {} from './routes/releases'
import PlatformConfig from './routes/platformConfig';
import AddPlatform from './routes/addPlatform';
import React,{Component} from 'react';
import {BrowserRouter as Router,Routes,Switch,Route,Navigate} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div>
        <h1>Main Page</h1>
         
      </div>
    );
  }
}

export default App;