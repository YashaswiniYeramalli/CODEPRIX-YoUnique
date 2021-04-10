/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Icon, Badge } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import MenuItem from 'antd/lib/menu/MenuItem';
import chat from '../../LandingPage/assets/chat.png';
function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu style={{marginLeft:'350px'}} mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/login" style={{fontFamily: '"Great Vibes", cursive', color:'black',fontWeight: 'bold',fontSize:'25px'}}>Signin</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register"  style={{fontFamily: '"Great Vibes", cursive', color:'black',fontWeight: 'bold',fontSize:'25px'}}>Signup</a>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode}>

        <Menu.Item key="history">
          <a href="/history"  style={{fontFamily: '"Great Vibes", cursive', color:'black',fontWeight: 'bold',fontSize:'25px'}}>History</a>
        </Menu.Item>

        <Menu.Item key="upload">
          <a href="/product/upload"  style={{fontFamily: '"Great Vibes", cursive', color:'black',fontWeight: 'bold',fontSize:'25px'}}>Upload</a>
        </Menu.Item>

        <Menu.Item key="cart" style={{ paddingBottom: 0}}>
          <Badge count={user.userData && user.userData.cart.length}>
            <a href="/user/cart" style={{ marginRight: -22 , color:'#667777'}}>
              <Icon style={{ paddingBottom: '10px' , width:'60px',height:'50px'}} type="shopping-cart" style={{ fontSize: 30, marginBottom: 10 }} />
            </a>
          </Badge>
        </Menu.Item>
        <Menu.Item>
        
        <a href="http://localhost:4000/"  style={{fontFamily: '"Great Vibes", cursive', color:'black',fontWeight:'bold',fontSize:'25px'}} ><img style={{width:'30px',height:'30px'}} src={chat} /></a>
        </Menu.Item>

        <Menu.Item key="logout">
          <a onClick={logoutHandler}  style={{fontFamily: '"Great Vibes", cursive', color:'black',fontWeight: 'bold',fontSize:'25px'}}>Logout</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(RightMenu);

