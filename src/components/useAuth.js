// useAuth.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = (isAuthenticated) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { replace: true });
    }
  }, [isAuthenticated, navigate]);
};

export default useAuth;
