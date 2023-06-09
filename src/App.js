import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LandingPage } from './pages/landingPage/landing_page';
import { RegistrationPage } from './pages/registration/registration';
import { LoginPage } from './pages/loginPage/login_page';
import { NavBar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer.jsx';
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

import Trackingpage from './pages/trackingPage/trackingpage';
import OrderHistoryPage from './pages/orderHistoryPage/orderHistoryPage';
import { ActiveStepProvider } from './context/activeStepContext';
import { SearchProvider } from './components/navbar/searchContext';
import MyInfoPage from './pages/myInfoPage/myInfoPage';
// import { OrderPage } from 'c:/users/amir/desktop/ecom-frontend/src/pages/orderpage/orderpage';
import toast, { Toaster } from 'react-hot-toast';



function App() {

  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const  [activeStep, setActiveStep] = useState(1);

  const setActiveStepValue = (step) =>{
    setActiveStep(step);
  }



  return (
    
    <div className="App">
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <Router>
    <SearchProvider>
      <ActiveStepProvider>
      <div className= {`screen ${isFiltersVisible ? 'blur' : ''}`}>
        <NavBar  activeStep={activeStep}/>
      </div>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/SignOut" element={<Signout />} />
            <Route path="/Registration" element={<RegistrationPage />} />
            <Route path="/magazin-club-privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/show-ProductsItems" element={<ShowProductsItems isFiltersVisible={isFiltersVisible} setIsFiltersVisible={setIsFiltersVisible}/>} />
            <Route path="/category/:id" element={<SpeceficCategory />} />
            <Route path="/show-ProductsItems/:id" element={<ProductPage />} />
            <Route path="/productList" element={<ProductList />} />
            
            <Route path="*" element={<h1 style={{ marginTop: '300px', marginBottom: '300px' }}>PAGE NOT FOUND</h1>} />

          <Route element={<PrivateRoute/>}>
          
          {/* <Route path='/Order' element={<OrderPage/>}/> */}
          <Route path='/Profile' element={<MyInfoPage/>}/>
          <Route path='/TrackMyOrder' element={<Trackingpage/>}/>
          <Route path="/OrderHistory" element={<OrderHistoryPage />} />
          
          <Route path='/My-bag' element={<MyBagPage/>}/>
          <Route path='/My-wishlist' element={<MyWishListPage/>}/>
          </Route>




          </Routes>
          </AuthProvider>

          <div className= {`screen ${isFiltersVisible ? 'blur' : ''}`}>
        <Footer />
        </div>
        </ActiveStepProvider>
        </SearchProvider>
    </Router>
    </div>
  );
}

export default App;    


