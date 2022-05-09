import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Releases, {} from './routes/releases'

export default function App() {
 
  return (
    <div>
      <Releases></Releases>
      <Outlet />
    </div>
  );
}