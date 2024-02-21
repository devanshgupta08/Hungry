import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { About, Home, Login,Register} from './pages';
import Footer from './components/footer';
import DFood from './pages/DFood';
import RFood from './pages/RFood';
import Logout from './pages/Logout';
import GetFood from './pages/GetFood';
import Latlong from './pages/Latlong';
import MapComponent from './components/Map/Maps';

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <AppContent />
      </Router>
    </main>
  );
};

const AppContent = () => {
  const location = useLocation();

  // Check if the current location is '/login'
  const isLoginPage = location.pathname === '/login' || location.pathname === "/register"|| location.pathname === "/logout";

  return (
    <>
      {/* Render Navbar if location is not '/login' */}
      {!isLoginPage && <Navbar />}
      
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
        <Route path='/maps' element={<MapComponent />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/DFood' element={<DFood />} />
        <Route path='/GetFood' element={<GetFood/>} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/GetFood' element={<GetFood />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
