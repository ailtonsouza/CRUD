import React from 'react';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import UserBar from '../../Components/UserBar/UserBar';
import './Layout.css';


const layout = (props) => {
return(
  <>
 
  <main className="Content">
  <UserBar />
  <Toolbar />
    {props.children}</main>
  </>
)
}

export default layout;