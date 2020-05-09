import React, { Component } from 'react';
import Image from 'material-ui-image';
import proPic from './images/profile.jpg'
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

class AboutMain extends Component{
  
  render()
    {
      return(

        <div style={{width:'100%'}}>

          <Grid direction='row' alignItems='center' justify='center' style={{width:'100%', marginBottom:'20px', paddingLeft:'5%', paddingRight:'5%'}} xs={12}>

            <div>
              <p style={{opacity:'.5', margin:'auto', marginTop:'130px', fontSize:'2vw', color:'#9c9c87', fontWeight:'bold'}}>A B O U T</p>
            </div>

            <div style={{marginTop:'3%', marginBottom:'3%'}}>
                
                <div style={{display:'inline-block', marginRight:'5%', verticalAlign:'top', paddingTop:'2vh'}}>
                    <Image style={{height:'400px', width:'300px', boxShadow:'8px 8px 8px #888888'}} src={proPic} />
                </div>

                <div style={{width:'275px', display:'inline-block', marginBottom:'2vh', paddingTop:'2vh'}}>
                    <Typography style={{color: '#9c9c87', fontSize:'15px', textAlign:'left'}}><br/>Vinnie is a senior at New York
                  University, majoring in  <u>Computer Science</u> and double minoring in <br/>
                  <u>Web Development</u> and <u>Creative Writing.</u> <br/><br/>Among a plethora of wide-ranging 
                  interests, she is especially passionate about the intersection of art and technology, 
                  and would love to further her knowledge on <u>UI/UX and front-end technologies.</u> <br/><br/> Vinnie hopes to contribute meaningfully to the world, and of course,
                  always through creativity and technological innovation.</Typography>
                </div>

              </div>
          </Grid>

        </div>
        
      );
    }
}

export default AboutMain;