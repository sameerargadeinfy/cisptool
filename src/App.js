import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Releases, {} from './routes/releases'

export default function App() {
 
  return (
    <div>
      <h1>Releases</h1>
      <nav>
      </nav>
      <Releases></Releases>
      <Outlet />
    </div>
  );
}