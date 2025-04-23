import React, { useState } from "react";
import { Nav } from "react-bootstrap";

const Sidebar = () => {
    const [active,setActive]=useState([{
    id:1,  isActive:"dashboard",css:"bold"
    }])

    const handlerChange =()=>{
  
      document.getElementById("link1").style.fontWeight = "900";
    }

  return (
    <>
      <div className="bg-light vh-100 p-3">
        <h5>Sidebar</h5>
        <Nav defaultActiveKey={`/${active.isActive}`} className="flex-column" >
          <Nav.Link id='link1' href="#dashboard" onClick={()=>setActive('dashboard')} >Dashboard</Nav.Link>
          <Nav.Link id='link2' href="#users" onClick={()=>setActive('users')} >Users</Nav.Link>
          <Nav.Link id='link3' href="#settings" onClick={()=>setActive('settings')} >Settings</Nav.Link>
        </Nav>
      </div>
    </>
  );
};

export default Sidebar;
