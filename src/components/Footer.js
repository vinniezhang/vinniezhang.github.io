import React, { Component } from 'react';
import "./Footer.css";
import Divider from '@material-ui/core/Divider';

class Footer extends Component {
  render()
    {
      return(
        <div className='footer'>
          <Divider style={{marginBottom:'10px'}}/>
          <p>Programmed in <i>React</i> by Vinnie Zhang © 2019</p>
        </div>
      );
    }
}
export default Footer;