import React from 'react';

export default function Icons() {
  return (
    <div style={containerStyle}>
      <div style={iconWrapper}>
        
        <img src="axon-logo.png" alt="Axon Airlines" style={logoStyle} />
        <img src="jetstar-logo.png" alt="Jetstar" style={logoStyle} />
        
       
        <div style={expediaHighlight}>
          <img src="expedia-logo.png" alt="Expedia" style={logoStyle} />
        </div>

        <img src="qantas-logo.png" alt="Qantas" style={logoStyle} />
        <img src="alitalia-logo.png" alt="Alitalia" style={logoStyle} />
      </div>
    </div>
  );
}



const containerStyle = {
  width: '100%',
  padding: '40px 0',
  backgroundColor: '#fff', 
  display: 'flex',
  justifyContent: 'center',
};

const iconWrapper = {
  display: 'flex',
  alignItems: 'center',       
  justifyContent: 'space-around',
  width: '90%',              
  maxWidth: '1200px',
  gap: '20px',                
};

const logoStyle = {
  height: 'auto',
  maxHeight: '40px',          
  width: 'auto',
  filter: 'grayscale(100%)',  
  opacity: 0.7,              
};

const expediaHighlight = {
  backgroundColor: '#fff',
  padding: '15px 25px',
  borderRadius: '8px',
  boxShadow: '0px 10px 30px rgba(0,0,0,0.05)', 
};