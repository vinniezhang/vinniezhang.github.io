import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image';
import resumePic from './images/Resume_Oct_2020.jpg';
import resumePDF from './pdf/Resume_Oct_2020.pdf';
import { Link } from 'react-router-dom';

class ResumeMain extends Component{

  render()
    {

      return(
        <div>
           <Grid direction='row' alignItems='center' justify='center' style={{width:'100%', marginBottom:'20px', paddingLeft:'5%', paddingRight:'5%'}} xs={12}>

            <div>
                <p style={{margin:'auto', marginTop: '130px', color: '#9c9c87', opacity: '.5', fontWeight:'bold', fontSize:'2vw'}}>R E S U M E</p>
            </div>

            <a href={resumePDF} download="Vinnie Zhang Resume" style={{textDecoration:'underline #9c9c87'}}>
                <p style={{margin:'auto', marginTop: '1%', color: '#9c9c87', opacity: '.5', fontWeight:'bold', fontSize:'13px'}}>Click here to download</p>
            </a>

            <div style={{margin:'auto', width:'75%'}}>
              <a href={resumePDF} target="__blank" style={{textDecoration:'underline #9c9c87'}}>
                <Image style={{marginTop:'3%', marginBottom:'3%', display:'inline-block', width:'75%', boxShadow:'8px 8px 8px #888888'}} src={resumePic} />
              </a>
            </div>
          </Grid>
        </div>
      );
    }
}

export default ResumeMain;