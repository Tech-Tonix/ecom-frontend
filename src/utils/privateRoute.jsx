import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { toast } from 'react-toastify';

const PrivateRoute = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    toast.error('Please login to access this page.');
    return <Navigate to="/Login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;