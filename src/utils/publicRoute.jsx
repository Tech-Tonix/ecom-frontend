import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { NavBar } from '../components/navbar/navbar';

const PublicRoute = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default PublicRoute;
