import './App.css';
import Login from './components/login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Start from './components/start';
import Home from './components/home';
import Last from './components/last';
import StudentPortal from './components/studentportal';
import Navbar from './components/navbottom';
import Homework from './components/homework';
import Payfee from './components/payfee';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
      <Routes>
        <Route element={<Login />} path='/' />
        <Route element={<Start />} path='/start' />
        <Route element={<Home />} path='/home' />
        <Route element={<Last />} path='/last' />
        <Route element={<Homework />} path='/homework' />
        <Route element={<Payfee  />} path='/payfee' />

        
        
        
       {/* <Route element={<StudentPortal />} path="/studentportal" /> */}
      

      </Routes>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
