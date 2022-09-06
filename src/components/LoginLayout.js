import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Navigate, Outlet } from 'react-router-dom';

const LoginLayout = () => {
  const [cookies] = useCookies()
  const cookieValue = Object.values(cookies)
  
  return (
    <div>
      {
        cookieValue[0] === "undefined" || cookieValue[0] === undefined
          ? <Navigate to="/" />
          : <Outlet />
      }
    </div>
  );
};

export default LoginLayout;