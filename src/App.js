
import './App.css';
import Login from './components/Login';
import Heading from './components/Heading';
import TopNav from './components/TopNav';
import Messages from './components/Messages'
import Register from './components/Register';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <TopNav/> */}
      <BrowserRouter>
        <div>
          <TopNav/>
          <Routes>
            <Route path="/" element={<Heading/>}/>
            <Route path='/messages' element={<Messages/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path ='/register' element={<Register/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>


  );
}

export default App;
