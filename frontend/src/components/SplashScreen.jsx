import React from 'react';
import logo from '../assets/logo_main.png'
function SplashScreen() {
  return (
    <div>
        <div class="absolute inset-0 flex items-center justify-center">
            <img src={logo} alt="logo" style={{width: '100px'}} />
        </div>
    </div>
  );
}

export default SplashScreen;
