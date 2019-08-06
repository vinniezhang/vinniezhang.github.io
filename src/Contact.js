import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ContactMain extends Component{

    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    }

  render()
    {
      return(
        <div>

            <Grid container direction='row' alignItems='center' justify='center' style={{width:'100%', marginBottom:'70px', paddingLeft:'5%', paddingRight:'5%'}} xs={12}>
              
              <Grid style={{margin:'auto'}} item xs={12}>
                <p style={{opacity:'.5', margin:'auto', marginTop:'130px', marginBottom:'5vh', fontSize:'2vw', color:'#9c9c87', fontWeight:'bold'}}>C O N T A C T</p>
              </Grid>

              <Grid style={{margin:'auto'}} item xs={12}>
                <p style={{opacity:'.5', margin:'auto', marginBottom:'20px', fontSize:'1.5vw', color:'#9c9c87', fontWeight:'bold'}}>
                  Please feel free to contact me through any of the following:
                </p>
              </Grid>

              <Grid style={{height:'4vh', margin:'7.5vh'}} item xs={12} lg={3}>
                  <Paper style={{opacity:'.6', padding:'3vh', marginRight:'1vw', marginLeft:'1vw'}}>
                    <a href="https://github.com/vinniezhang" target='__blank' style={{textDecoration:'none'}}>
                      <Typography style={{margin:'auto', fontSize:'2vw', color:'black', fontWeight:'bold'}}>
                        GitHub
                      </Typography>
                      {/* <FontAwesomeIcon icon={faGithub}/> */}
                      <i className="fa fa-github" style={{fontSize:'64px', color:'#9c9c87'}} aria-hidden="true"></i>
                    </a>
                  </Paper>
              </Grid>

              <Grid style={{height:'4vh', margin:'7.5vh'}} item xs={12} lg={3}>
                <Paper style={{opacity:'.6', padding:'3vh', marginRight:'1vw', marginLeft:'1vw'}}>
                  <a href="https://www.linkedin.com/in/vinnie-zhang/" target='__blank' style={{textDecoration:'none'}}>
                    <Typography style={{margin:'auto', fontSize:'2vw', color:'black', fontWeight:'bold'}}>
                      LinkedIn
                    </Typography>
                    {/* <FontAwesomeIcon icon={faLinkedin}/> */}
                    <i className="fa fa-linkedin" style={{fontSize:'64px', color:'#9c9c87'}} aria-hidden="true"></i>
                  </a>
                </Paper>
              </Grid>

              <Grid style={{height:'4vh', margin:'7.5vh'}} item xs={12} lg={3}>
                <Paper style={{opacity:'.6', padding:'3vh', marginRight:'1vw', marginLeft:'1vw'}}>
                  <a href='mailto:vz377@nyu.edu' style={{textDecoration:'none'}}>
                    <Typography style={{margin:'auto', fontSize:'2vw', color:'black', fontWeight:'bold'}}>
                      Email
                    </Typography>
                    <i className="fa fa-envelope" style={{fontSize:'64px', color:'#9c9c87'}} aria-hidden="true"></i>

                    {/* <EmailOutlinedIcon style={{color:'black', fontSize:'68px', marginTop:'15px'}}/> */}
                  </a>
                </Paper>
              </Grid>

            </Grid>
        </div>
      );
    }
}

export default ContactMain;