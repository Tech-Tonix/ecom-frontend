import './App.css';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import { LandingPage } from './pages/landingPage/landing_page';
import { RegistrationPage } from './pages/registration/registration';
import { LoginPage } from './pages/loginPage/login_page';
import { NavBar } from './components/navbar/navbar';


function App() {
  return (
    <div className="App">


      <Router>
        {/* Navigation bar section  */}
        <NavBar/>

        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/Registration' element={<RegistrationPage/>}/>
          <Route path='/Login' element={<LoginPage/>}/>
          <Route path='*' element={<h1> PAGE NOT FOUND</h1>}/>
        </Routes>
      </Router>
      </div>
  );
}

export default App;
