import React from 'react';
import './App.css';
import Navbar1 from './Component/header';
import Navbar2 from './Component/footer';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';

function App() {
  return (
    <div>
    <Navbar1 />
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",verticalAlign:"middle",flexDirection:"column",marginTop:"10%",borderRadius:"25%",marginBottom:"10%"}}>
    <div className="flex-gap" style={{display:"inlineFlex",justifyContent:"center",flexDirection:"column",margin:"0",padding:"0",borderRadius:"25%"}}>
        <ProfilePhoto/>
        <FullName/>
        <Address/>
    </div>
    </div>
    <Navbar2/>
    </div>
  );
}

export default App;
