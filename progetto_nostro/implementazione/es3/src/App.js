import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeUser from "./pages/HomeUser";
import HomeAffittuario from "./pages/HomeAffittuario";
import CercaPosto from "./pages/CercaPosto";
import Risultati from "./pages/Risultati";
import PostoAuto from "./pages/PostoAuto";
import Prenotazioni from "./pages/Prenotazioni";
import Recensione from "./pages/Recensione";
import HomeProprietario from "./pages/HomeProprietario";
import DisponibilitaPosto from "./pages/DisponibilitaPosto";
import CaricaPosto from "./pages/CaricaPosto";
import HomeAdmin from "./pages/HomeAdmin";
import AdminUtenti from "./pages/AdminUtenti";





function App() {
  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homeUser" element={<HomeUser />} />
        <Route path="/affittuario" element={<HomeAffittuario />} />
        <Route path="/cerca" element={<CercaPosto />} />
        <Route path="/risultati" element={<Risultati />} />
        <Route path="/posto/:id" element={<PostoAuto />} />
        <Route path="/prenotazioni" element={<Prenotazioni />} />
        <Route path="/recensione/:id" element={<Recensione />} />
        <Route path="/proprietario" element={<HomeProprietario />} />
        <Route path="/tuoi-posti" element={<DisponibilitaPosto />} /> /*OCIOOO */
        <Route path="/carica-posto" element={<CaricaPosto />} />
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/admin/utenti" element={<AdminUtenti />} />



        {/* Future pages */}
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
