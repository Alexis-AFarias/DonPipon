import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import Appointments from './views/MisTurnos/MisTurnos'
import Register from './views/Register/Register'
import Contact from './views/Contact/Contact'
import AcercaDe from './views/AcercaDe/AcercaDe'
import Landing from "./views/Landing/Landing"
import AppointmentForm from "./views/TurnosForm/AppointmentForm"

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
          <Route path= "/home" element={<Home></Home>}/>
          <Route path= "/appointments" element={<Appointments></Appointments>}/>
          <Route path= "/register" element={<Register></Register>}/>
          <Route path= "/login" element={<Login></Login>}/>
          <Route path= "/contact" element={<Contact></Contact>}/>
          <Route path= "/acercade" element={<AcercaDe></AcercaDe>}/>
          <Route path= "/" element={<Landing></Landing>}/>
          <Route path="/appointmentform" element={<AppointmentForm></AppointmentForm>}/>
      </Routes>
    </div>
  )
}

export default App
