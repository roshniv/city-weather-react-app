import React from 'react';
import './styles.css';

const ErrorCard = ({errorData}) => (
  <div className="main error">

      <div className="top">
        <p className="header">{errorData.cod}</p>
      </div>
      <div className="flex">
        <p className="description">{errorData.message}</p>
      </div>
    
  </div>
)

export default ErrorCard;