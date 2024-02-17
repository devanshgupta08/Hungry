import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate logout process
    const timeoutId = setTimeout(() => {
      // Navigate back to "/"
      navigate("/");
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timeoutId); // Cleanup function
  }, [navigate]);

  return (
    <div>
      <h2>Logged out successfully!</h2>
      <p>Redirecting you back to the home page...</p>
    </div>
  );
};

export default Logout;
