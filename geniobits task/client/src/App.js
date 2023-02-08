import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Admin_dash from './Components/Admin_dash';
import Staff_dash from './Components/Staff_dash';
import Student_dash from './Components/Student_dash';
import Receipe from './Components/receipe';
import Order from './Components/order';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin />}/>
      <Route path="/Signup" element={<Signup />}/>
      <Route path='/receipe' element={<Receipe/>}/>
      <Route path='/order/:id' element={<Order/>}/>
      {/* <Route path="/Admin_dash" element={<Admin_dash />}/>
      <Route path="/Staff_dash" element={<Staff_dash />}/>
      <Route path="/Student_dash" element={<Student_dash />}/> */}
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
