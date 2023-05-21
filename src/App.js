import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LandingPage } from './pages/landingPage/landing_page';
import { RegistrationPage } from './pages/registration/registration';
import { LoginPage } from './pages/loginPage/login_page';
import { NavBar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer.jsx';
import { OrderPage } from './pages/orderPage/orderPage';
import { MyBagPage } from './pages/myBagPage/myBagPage';
import { ShowProductsItems } from '../src/pages/showProductsItems/showProductsItems';
import { PrivacyPolicy } from './pages/registration/privacyPolicy';
import { ProductPage } from './pages/productPage/productPage';
import { MyWishListPage } from './pages/myWishListPage/myWishListPage';
import { AuthProvider } from './context/AuthContext';
import PublicRoute from './utils/publicRoute';
import PrivateRoute from './utils/privateRoute';
import { SpeceficCategory } from './pages/speceficCategoryPage/speceficCategoryPage.';
import { ProductList } from './pages/productList/productList';
import Signout from './components/signOut/signout';
import Filterpannel from './components/filters/filterpannel';
import Filters from './components/filters/filters';



function App() {

  const [isFiltersVisible, setIsFiltersVisible] = useState(false);


  return (
    <Router>
      <div className= {`screen ${isFiltersVisible ? 'blur' : ''}`}>
        <NavBar  />
      </div>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/Registration" element={<RegistrationPage />} />
            <Route path="/magazin-club-privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/show-ProductsItemsleyna" element={<ShowProductsItems isFiltersVisible={isFiltersVisible} setIsFiltersVisible={setIsFiltersVisible}/>} />
            <Route path="/category/:title/:id" element={<SpeceficCategory />} />
            <Route path="/show-ProductsItems/:id" element={<ProductPage />} />
            <Route path="/productList" element={<ProductList />} />
            <Route path="*" element={<h1 style={{ marginTop: '300px', marginBottom: '300px' }}>PAGE NOT FOUND</h1>} />

            {/* Private Routes */}
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/SignOut" element={<Signout />} />
            <Route path="/OrderHistory" element={<OrderPage />} />
            <Route path="/My-bag" element={<MyBagPage />} />
            <Route path="/My-wishlist" element={<MyWishListPage />} />
          </Routes>
        </AuthProvider>
        <div className= {`screen ${isFiltersVisible ? 'blur' : ''}`}>
        <Footer />
        </div>
    </Router>
  );
}

export default App;
