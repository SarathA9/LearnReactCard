import React from 'react';
import { useNavigate } from 'react-router-dom';
import './name.css';

export default function Error404() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <p className="error-message">Oops! The page you're looking for doesn't exist.</p>
        <button className="go-back-button" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    </div>
  );
}
