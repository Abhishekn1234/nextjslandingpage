import React from 'react';

export default function Icons() {
  return (
    <div style={containerStyle}>
      <div style={iconWrapper}>
        {/* Replace these placeholders with your actual <img> tags */}
        <img src="axon-logo.png" alt="Axon Airlines" style={logoStyle} />
        <img src="jetstar-logo.png" alt="Jetstar" style={logoStyle} />
        
        {/* Expedia often has a white background/shadow in these UI strips */}
        <div style={expediaHighlight}>
          <img src="expedia-logo.png" alt="Expedia" style={logoStyle} />
        </div>

        <img src="qantas-logo.png" alt="Qantas" style={logoStyle} />
        <img src="alitalia-logo.png" alt="Alitalia" style={logoStyle} />
      </div>
    </div>
  );
}

// --- Styles ---

const containerStyle = {
  width: '100%',
  padding: '40px 0',
  backgroundColor: '#fff', // Adjust based on your site theme
  display: 'flex',
  justifyContent: 'center',
};

const iconWrapper = {
  display: 'flex',
  alignItems: 'center',       // Vertically centers the logos
  justifyContent: 'space-around', // Spreads them evenly
  width: '90%',               // Total width of the icon strip
  maxWidth: '1200px',
  gap: '20px',                // Space between logos
};

const logoStyle = {
  height: 'auto',
  maxHeight: '40px',          // Keeps logos uniform in height
  width: 'auto',
  filter: 'grayscale(100%)',  // Makes logos look cohesive (optional)
  opacity: 0.7,               // Fades them slightly (optional)
};

const expediaHighlight = {
  backgroundColor: '#fff',
  padding: '15px 25px',
  borderRadius: '8px',
  boxShadow: '0px 10px 30px rgba(0,0,0,0.05)', // Subtle shadow like in your image
};