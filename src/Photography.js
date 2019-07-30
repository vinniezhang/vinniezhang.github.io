import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";

import filmTileData from './Film_Assets';
import digitalTileData from './Digital_Assets';

function TabContainer(props) {
  return (
    <Typography component="div">
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class PhotographyMain extends Component{

  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render()
    {
      return(
          <BrowserRouter>
            <div>

              <Grid direction='row' alignItems='center' justify='center' style={{width:'100%', marginBottom:'20px', paddingLeft:'5%', paddingRight:'5%'}} xs={12}>
                
              <p style={{opacity:'.5', margin:'auto', marginTop:'130px', marginBottom:'50px', fontSize:'2vw', color:'#9c9c87', fontWeight:'bold'}}>P H O T O G R A P H Y</p>

                <Paper square style={{width:'30%', margin:'auto'}}>
                  <Tabs 
                      value={this.state.value} 
                      onChange={this.handleChange} 
                      centered 
                      indicatorColor="primary" 
                      textColor="primary" 
                      inkBarStyle={{background:'#9c9c87'}}
                      style={{marginBottom:'30px', textDecoration:'none'}}
                  >
                    <Tab label="35mm Film" style={{fontSize:'1vw'}} component={Link} to='/film' />
                    <Tab label="Digital" style={{fontSize:'1vw'}} component={Link} to='/digital' />
                  </Tabs>
                </Paper>
                </Grid>

              <Switch>
                <Route path='/film'> 
                  <TabContainer> 
                    <GridList style={{width:'100%', marginBottom:'20px', paddingLeft:'5%', paddingRight:'5%'}} cellHeight={'30%'} cols={3}>
                      {filmTileData.map(tile => (
                        <GridListTile style={{padding:'10px'}} key={tile.img} cols={tile.cols || 1}>
                          <img style={{width:'100%'}} src={tile.img} alt={tile.title} />
                        </GridListTile>
                      ))}
                    </GridList>
                  </TabContainer>
                </Route>

                <Route path='/digital'>
                  <TabContainer> 
                    <GridList style={{width:'100%', marginBottom:'20px', paddingLeft:'5%', paddingRight:'5%'}} cellHeight={'30%'} cols={3}>
                      {digitalTileData.map(tile => (
                        <GridListTile style={{padding:'10px'}} key={tile.img} cols={tile.cols || 1}>
                          <img style={{width:'100%'}} src={tile.img} alt={tile.title} />
                        </GridListTile>
                      ))}
                    </GridList>
                  </TabContainer>
                </Route>
              </Switch>

            </div>
          </BrowserRouter>
      );
    }
}

export default PhotographyMain;