import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { LandingPage } from './pages/landingPage/landing_page';
import { RegistrationPage } from './pages/registration/registration';
import { LoginPage } from './pages/loginPage/login_page';
import { NavBar } from './components/navbar/navbar';
import {Footer} from './components/footer/footer.jsx'
import { OrderPage } from './pages/orderPage/orderPage';
import { MyBagPage } from './pages/myBagPage/myBagPage';
import {ShowProductsItems} from '../src/pages/showProductsItems/showProductsItems'
import { PrivacyPolicy } from './pages/registration/privacyPolicy';
import { ProductPage } from './pages/productPage/productPage';
import { MyWishListPage } from './pages/myWishListPage/myWishListPage';
function App() {
  return (
    <div className="App">


      <Router>
        {/* Navigation bar section  */}
        <NavBar/>
        

        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/Registration' element={<RegistrationPage/>}/>
          <Route path='/magazin-club-privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='/Login' element={<LoginPage/>}/>
          <Route path='/Order' element={<OrderPage/>}/>
          <Route path='/My-bag' element={<MyBagPage/>}/>
          <Route path='/My-wishlist' element={<MyWishListPage/>}/>
          <Route path='/show-ProductsItems' element ={<ShowProductsItems/>}/>
          <Route path='/product-page/:id' element={<ProductPage/>}/>
          <Route path='*' element={<h1 style={{marginTop:'300px',marginBottom:'300px'}}> PAGE NOT FOUND</h1>}/>
        </Routes>

        <Footer/>

      </Router>
      </div>
  );
}

export default App;
