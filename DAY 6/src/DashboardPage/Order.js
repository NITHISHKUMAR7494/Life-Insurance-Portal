import React from 'react';
  import './Order.css';


  function Order() {
    return (
      <>

        <div className="orders-container">
          <h1>Policy Types</h1>
          <div className="orders-list">
            <div className="order-item">
              <h3>Policy #15674892</h3>
              
              <ul>
                <li>Health Care Insurance</li>
                <li>Policy period: 4-5 Years</li>
                <li>Type: premium</li>
              </ul>
              <button className="btn-prepare"><a href='/price'>Get Quotes</a></button>
            </div>
            <div className="order-item">
              <h3>Policy #758933586</h3>
    
              <ul>
                <li>Term Life Insurance</li>
                <li>Policy period: 5-10 Years</li>
                <li>Type: Premium</li>
              </ul>
              
              <button className="btn-prepare"><a href='/price'>Get Quotes</a></button>
            </div>
            <div className="order-item">
              <h3>Policy #052693147</h3>
              <ul>
                <li>Child Savings Plan</li>
                <li>Policy period: 0-10 Years</li>
                <li>Type: Premium</li>
              </ul>
             
              <button className="btn-prepare"><a href='/price'>Get Quotes</a></button>
            </div>
            <div className="order-item">
              <h3>Policy #547569412</h3>
             
              <ul>
                <li>Family Health Insurance</li>
                <li>Policy period: Life Time</li>
                <li>Type: Premium</li>
              </ul>
              
              <button className="btn-prepare"><a href='/price'>Get Qoutes</a></button>
            </div>
            <div className="order-item">
              <h3>Policy #93655452</h3>
             
              <ul>
                <li>Group Health Insurance</li>
                <li>Policy period: Life Time</li>
                <li>Type: Premium</li>
              </ul>
       
              <button className="btn-prepare"><a href='/price'>Get Quotes</a></button>
            </div>
            <div className="order-item">
              <h3>Policy #455545420</h3>
              
              <ul>
                <li>Zero Cost Term Plan</li>
                <li>Policy period: 15 Years</li>
                <li>Type: Premium</li>
              </ul>
              
              <button className="btn-prepare"><a href='/price'>Get Quotes</a></button>
            </div>
          
          </div>
          
        </div>
        <button className="btn-prepare1"><a href='/dash'>Back</a></button>
    
      </>
    );
  }

  export default Order;
