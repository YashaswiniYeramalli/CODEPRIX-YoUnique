import React from 'react';
import { Menu } from 'antd';
import '../../ContactUs/contactus';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/" style={{fontFamily: '"Great Vibes", cursive', color:'black',fontWeight: 'bold',fontSize:'25px'}}>Home</a>
    </Menu.Item>
    <Menu.Item>
    <a href="/" style={{fontFamily: '"Great Vibes", cursive', color:'black',fontWeight: 'bold',fontSize:'25px'}}>Feedback</a>
    </Menu.Item>
    <Menu.Item>
    <a href="/ContactUs" style={{fontFamily: '"Great Vibes", cursive', color:'black',fontWeight: 'bold',fontSize:'25px'}}>About Us</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu