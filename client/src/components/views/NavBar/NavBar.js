import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button, Icon } from 'antd';
import './Sections/Navbar.css';
import logo from '../LandingPage/assets/logo.png';
function NavBar() {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%',fontSize:'30px', display:'flex'}}>
      <div style={{display:'flex'}}>
      <div>
      <img src={logo} style={{width:'80px',height:'80px'}}/>
      </div>
      <div className="menu__logo" style={{width:'180px'}}>
        <a href="/" style={{color:'#1890ff',fontSize:'35px',fontWeight:'bold'}}>Yo<span style={{color:'#FF416C',fontFamily: 'Brush Script MT, Brush Script Std', fontSize: '40px'}}>U</span>nique</a>
      </div>
      </div>
      <div className="menu__container" >
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_rigth" style={{marginLeft:'70vh'}}>
          <RightMenu mode="horizontal" />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <Icon type="align-right" />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar