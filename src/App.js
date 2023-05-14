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
import { AuthProvider } from './context/AuthContext';
import PublicRoute from './utils/publicRoute';
import PrivateRoute from './utils/privateRoute';
import { SpeceficCategory } from './pages/speceficCategoryPage/speceficCategoryPage.';
import {ProductList} from './pages/productList/productList';
function App() {
  return (
    <div className="App">


      <Router>
        <NavBar/>
        <AuthProvider>
        
        

          <Routes>
          {/* <Route element={<PublicRoute/>}> */}
          <Route path ='/' element={<LandingPage/>}/>
          <Route path='/Registration' element={<RegistrationPage/>}/>
          <Route path='/magazin-club-privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='/show-ProductsItems' element ={<ShowProductsItems/>}/>
          <Route path="/category/:title/:id" element={<SpeceficCategory/>}/>
          <Route path="/show-ProductsItems/:id" element={<ProductPage/>}/>
          <Route path="/productList" element={<ProductList/>}/>
          <Route path='*' element={<h1 style={{marginTop:'300px',marginBottom:'300px'}}> PAGE NOT FOUND</h1>}/>
          {/* </Route> */}


          {/* <Route element={<PrivateRoute/>}> */}
          <Route path='/Login' element={<LoginPage/>}/>
          <Route path='/Order' element={<OrderPage/>}/>
          <Route path='/My-bag' element={<MyBagPage/>}/>
          <Route path='/My-wishlist' element={<MyWishListPage/>}/>
          {/* </Route> */}

          </Routes>
        </AuthProvider>
        <Footer/>
        
      </Router>
      </div>
  );
}

export default App;
