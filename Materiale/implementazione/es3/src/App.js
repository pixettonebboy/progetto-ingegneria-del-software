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
import ModificaDati from "./pages/ModificaDati";
import Prenota from "./pages/Prenota";
import PrenotazioniRicevute from "./pages/PrenotazioniRicevute";
import IMieiPosti from "./pages/IMieiPosti";
import InfoUtenti from "./pages/InfoUtenti";

// 1. Importa la nuova pagina del gateway di pagamento
import PaymentGateway from "./pages/PaymentGateway"; 
import LogSistema from "./pages/LogSistema";

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
        <Route path="/admin/logs" element={<LogSistema />} />
        <Route path="/admin/info-utenti" element={<InfoUtenti />} />
        <Route path="/modificaDisponibilita/:id" element={<DisponibilitaPosto />} /> {/*OCIOOO */}
        <Route path="/tuoi-posti" element={<IMieiPosti />} />
        <Route path="/carica-posto" element={<CaricaPosto />} />
        <Route path="/prenotazioni-ricevute" element={<PrenotazioniRicevute />} />
        <Route path="/prenota" element={<Prenota />} />
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/admin/utenti" element={<AdminUtenti />} /> 
        

<Route path="/profilo" element={<ModificaDati />} />
        {/* 2. Nuova rotta aggiunta per il pagamento esterno */}
        <Route path="/pagamento" element={<PaymentGateway />} />

        {/* Future pages */}
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default App;