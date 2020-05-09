import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import retriever1 from './project_images/retriever1.png';
import retriever2 from './project_images/retriever2.png';
import retriever3 from './project_images/retriever3.png';
import retriever4 from './project_images/retriever4.png';
import retriever5 from './project_images/retriever5.png';
import sesame1 from './project_images/sesame1.png';
import sesame2 from './project_images/sesame2.png';
import sesame3 from './project_images/sesame3.png';
import sesame4 from './project_images/sesame4.png';
import tv1 from './project_images/tv1.png';
import tv2 from './project_images/tv2.png';
import tv3 from './project_images/tv3.png';
import catch1 from './project_images/catch1.png';
import catch2 from './project_images/catch2.png';
import pablo1 from './project_images/pablo1.png';
import pablo2 from './project_images/pablo2.png';
import pablo3 from './project_images/pablo3.png';
import drama1 from './project_images/drama1.png';
import drama2 from './project_images/drama2.png';
import drama3 from './project_images/drama3.png';
import drama4 from './project_images/drama4.png';
import drama5 from './project_images/drama5.png';
import drama6 from './project_images/drama6.png';
import rouxlette1 from './project_images/rouxlette1.png';
import rouxlette2 from './project_images/rouxlette2.png';
import rouxlette3 from './project_images/rouxlette3.png';
import rouxlette4 from './project_images/rouxlette4.png';
import baby1 from './project_images/baby1.png';
import baby2 from './project_images/baby2.png';
import baby3 from './project_images/baby3.png';
import baby4 from './project_images/baby4.png';
import biome1 from './project_images/biome1.png';
import biome2 from './project_images/biome2.png';
import biome3 from './project_images/biome3.png';
import biome4 from './project_images/biome4.png';
import biome5 from './project_images/biome5.png';
import sk1 from './project_images/sk1.png';

import babyGif from './gifs/babyGif.gif';
import splashKidGif from './gifs/splashKid.gif';


class ProjectsMain extends Component{
  render()
    {
      return(
        <div>        
          <Grid container direction='row' alignItems='center' justify='center' style={{width:'100%', marginBottom:'30px', paddingLeft:'5%', paddingRight:'5%'}} xs={12}>
            <p style={{width:'100%', opacity:'.5', margin:'auto', marginTop:'130px', fontSize:'30px', color:'#9c9c87', fontWeight:'bold'}}>P R O J E C T S</p>

            <Grid item xs={10} style={{marginTop:'5vh'}}>
              <Paper style={{paddingTop:'3vh', paddingBottom:'3vh'}}>
                <Typography style={{paddingLeft:'5px', paddingRight:'5px', color: '#9c9c87', fontSize:'25px', textAlign:'center', verticalAlign:'middle', marginBottom:'5px'}}>Splash Kid!</Typography>
                <Typography style={{paddingLeft:'5px', paddingRight:'5px', color: '#9c9c87', fontSize:'15px', textAlign:'center', verticalAlign:'middle', marginBottom:'5px', fontFamily:'Helvetica'}}>(an iPhone application)</Typography><br/>
               
                <Typography style={{color: '#5c563a', fontSize:'15px', textAlign:'left', marginBottom:'10px', margin:'auto', width:'65%'}}> <b>Description:</b> An iPhone game application in which the user
                must dodge obstacles, splash bullies, and avoid colliding with objects in his way! The user gains points with every target he hits and levels will continually become more difficulty the longer the game goes on!<br/><br/> 
                This game was built in collaboration with two other programmers. I was in charge of UI/UX and obtaining visual assets, 
                 as well as programming part of the gameplay. <br/><br/>
                <b>Technologies:</b> XCode, Swift, SpriteKit, Adobe Photoshop</Typography><br/>

                <a href='https://github.com/Splash-Kid-iOS/splash-kid' target='_blank' style={{textDecoration:'none', display: 'block'}}>Click here to view this project's source code.</a>
              
                <div style={{display:'inline-block', marginTop:'2vh'}}>
                  <MDBContainer>
                    <MDBCarousel
                      activeItem={1}
                      length={2}
                      showControls={true}
                      interval={false}
                      showIndicators={false}
                      style={{zIndex:'0', width:'100%', margin:'auto', marginTop:'1vh'}}
                    >
                      <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                          <MDBView>
                            <img className="d-block w-100" src={splashKidGif}/>
                          </MDBView>
                        </MDBCarouselItem>
                      </MDBCarouselInner>

                      <MDBCarouselInner>
                        <MDBCarouselItem itemId="2">
                          <MDBView>
                            <img className="d-block w-100" src={sk1}/>
                          </MDBView>
                        </MDBCarouselItem>
                      </MDBCarouselInner>

                    </MDBCarousel>
                  </MDBContainer>
                </div>
              
              </Paper>
            </Grid>

            <Grid item xs={10} style={{marginTop:'5vh'}}>
              <Paper style={{paddingTop:'3vh', paddingBottom:'3vh'}}>
                <Typography style={{paddingLeft:'5px', paddingRight:'5px', color: '#9c9c87', fontSize:'25px', textAlign:'center', verticalAlign:'middle', marginBottom:'5px'}}>Biome Blocks</Typography>
                <Typography style={{paddingLeft:'5px', paddingRight:'5px', color: '#9c9c87', fontSize:'15px', textAlign:'center', verticalAlign:'middle', marginBottom:'5px', fontFamily:'Helvetica'}}>(an Augmented Reality application)</Typography><br/>

                <Typography style={{color: '#5c563a', fontSize:'15px', textAlign:'left', marginBottom:'10px', margin:'auto', width:'65%'}}> <b>Description:</b> An augmented reality application that allows users to customize and combine
                their individiual biomes (displayed via fiducial markers) to allow for an immersive and interactive experience.<br/><br/> Users can update assets included in each biome by bringing the corresponding fiducial markers onto the screen and utilizing the camera's ability to recognize and interpret the pixel formations of each marker.
                <br/><br/>
                <b>Technologies:</b> HTML/CSS, JavaScript - p5 library, AFrame, Poly models</Typography><br/>

                <a href='https://github.com/vinniezhang/BiomeBlocks' target='_blank' style={{textDecoration:'none'}}>Click here to view this project's source code.</a>
              
                <div style={{display:'inline-block', marginTop:'2vh'}}>
                  <MDBContainer>
                    <MDBCarousel
                      activeItem={1}
                      length={5}
                      showControls={true}
                      showIndicators={false}
                      style={{zIndex:'0', width:'65%', margin:'auto', marginTop:'1vh'}}
                    >
                      <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                          <MDBView>
                            <img className="d-block w-100" src={biome1}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="2">
                          <MDBView>
                            <img className="d-block w-100" src={biome2}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="3">
                          <MDBView>
                            <img className="d-block w-100" src={biome3}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="4">
                          <MDBView>
                            <img className="d-block w-100" src={biome4}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="5">
                          <MDBView>
                            <img className="d-block w-100" src={biome5}/>
                          </MDBView>
                        </MDBCarouselItem>

                      </MDBCarouselInner>
                    </MDBCarousel>
                  </MDBContainer>
                </div>
              
              </Paper>
            </Grid>

            <Grid item xs={10} style={{marginTop:'5vh'}}>
              <Paper style={{paddingTop:'3vh', paddingBottom:'3vh'}}>
                <Typography style={{paddingLeft:'5px', paddingRight:'5px', color: '#9c9c87', fontSize:'25px', textAlign:'center', verticalAlign:'middle', marginBottom:'5px'}}>Are You Baby?</Typography>

                <Typography style={{color: '#5c563a', fontSize:'15px', textAlign:'left', marginBottom:'10px', margin:'auto', width:'65%'}}> <b>Description:</b> A cohesive overworld that allows the user to play up to four mini-games. 
                Starting off inside a child's playroom, the user may enter and explore multiple game stations, each indicated by a star icon. <br/><br/> This game was built in collaboration with three other programmers, each of whom was designated one of the four games to build.
                I coded a "Frogger"-inspired game, where the user must collect items and avoid obstacles before crossing the river and reaching the door. <br/><br/>
                <b>Technologies:</b> HTML/CSS, JavaScript - p5 library, Adobe Photoshop</Typography><br/>

                <a href='https://github.com/vinniezhang/Interactive-Computing/tree/master/midterm' target='_blank' style={{textDecoration:'none', display: 'block'}}>Click here to view this project's source code.</a>
              
                <div style={{display:'inline-block', marginTop:'2vh'}}>
                  <MDBContainer>
                    <MDBCarousel
                      activeItem={1}
                      length={1}
                      showControls={false}
                      // interval={false}
                      showIndicators={false}
                      style={{zIndex:'0', width:'100%', margin:'auto', marginTop:'1vh'}}
                    >
                      <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                          <MDBView>
                            <img className="d-block w-100" src={babyGif}/>
                          </MDBView>
                        </MDBCarouselItem>

                        {/* <MDBCarouselItem itemId="2">
                          <MDBView>
                            <img className="d-block w-100" src={baby2}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="3">
                          <MDBView>
                            <img className="d-block w-100" src={baby3}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="4">
                          <MDBView>
                            <img className="d-block w-100" src={baby4}/>
                          </MDBView>
                        </MDBCarouselItem> */}
                      </MDBCarouselInner>
                    </MDBCarousel>
                  </MDBContainer>
                </div>
              
              </Paper>
            </Grid>

            {/* start of updates */}


            <Grid item xs={10} style={{marginTop:'5vh'}}>
              <Paper style={{paddingTop:'3vh', paddingBottom:'3vh'}}>
                <Typography style={{paddingLeft:'5px', paddingRight:'5px', color: '#9c9c87', fontSize:'25px', textAlign:'center', verticalAlign:'middle', marginBottom:'5px'}}>Rouxlette</Typography><br/>
               
                <Typography style={{color: '#5c563a', fontSize:'15px', textAlign:'left', marginBottom:'10px', margin:'auto', width:'65%'}}> <b>Description:</b> Web application that generates a compact list of restaurants matching user specified criteria, eliminating 
                the indecisiveness of finding a place to eat. A <i>randomize</i> feature is also available for users with no preferences. Implemented user login and registration, and scraped restaurants from the NYC Restaurant Grades public database.<br/><br/>
                <b>Technologies:</b> ReactJS, Express, NodeJS, MongoDB, Material UI, Agile Methodology</Typography><br/>

                <a href='https://github.com/nyu-software-engineering/spring-2019-food-finder' target='_blank' style={{textDecoration:'none'}}>Click here to view this project's source code.</a>
              
                <div style={{display:'inline-block', marginTop:'2vh'}}>
                  <MDBContainer>
                    <MDBCarousel
                      activeItem={1}
                      length={4}
                      showControls={true}
                      showIndicators={false}
                      style={{zIndex:'0', width:'65%', margin:'auto', marginTop:'1vh', border:'3px solid black'}}
                    >
                      <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                          <MDBView>
                            <img className="d-block w-100" src={rouxlette1}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="2">
                          <MDBView>
                            <img className="d-block w-100" src={rouxlette2}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="3">
                          <MDBView>
                            <img className="d-block w-100" src={rouxlette3}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="4">
                          <MDBView>
                            <img className="d-block w-100" src={rouxlette4}/>
                          </MDBView>
                        </MDBCarouselItem>
                      </MDBCarouselInner>
                    </MDBCarousel>
                  </MDBContainer>
                </div>
              
              </Paper>
            </Grid>

            <Grid item xs={10} style={{marginTop:'5vh'}}>
              <Paper style={{paddingTop:'3vh', paddingBottom:'3vh'}}>
                <Typography style={{paddingLeft:'5px', paddingRight:'5px', color: '#9c9c87', fontSize:'25px', textAlign:'center', verticalAlign:'middle', marginBottom:'20px'}}>CATCH</Typography>
                <a href='https://collegematcher.org' target='_blank' style={{textDecoration:'none', color:'purple', fontSize:'15px', fontWeight:'bold'}}>Click here to test the live application.</a><br/><br/>
                <Typography style={{color: '#5c563a', fontSize:'15px', textAlign:'left', marginBottom:'10px', margin:'auto', width:'65%'}}>  <b>Description:</b> Web application that helps match universities to prospective college students given their academic, social, and financial needs. Data visualizations
                  demonstrate how user ranks among admitted students of corresponding colleges.
                <br/><br/><b>Technologies:</b> ReactJS, Redux, Axios, College ScoreCard API, Material UI</Typography><br/>

                <a href='https://github.com/vinniezhang/Catch' target='_blank' style={{textDecoration:'none'}}>Click here to view this project's source code.</a>

                <div style={{display:'inline-block', marginTop:'2vh'}}>
                  <MDBContainer>
                    <MDBCarousel
                      activeItem={1}
                      length={2}
                      showControls={true}
                      showIndicators={false}
                      style={{zIndex:'0', width:'65%', margin:'auto', marginTop:'1vh'}}
                    >
                      <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                          <MDBView>
                            <img className="d-block w-100" src={catch1}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="2">
                          <MDBView>
                            <img className="d-block w-100" src={catch2}/>
                          </MDBView>
                        </MDBCarouselItem>

                      </MDBCarouselInner>
                    </MDBCarousel>
                  </MDBContainer>
                </div>

              </Paper>
            </Grid>

            <Grid item xs={10} style={{marginTop:'5vh'}}>
              <Paper style={{paddingTop:'3vh', paddingBottom:'3vh'}}>
                <Typography style={{paddingLeft:'5px', paddingRight:'5px', color: '#9c9c87', fontSize:'25px', textAlign:'center', verticalAlign:'middle', marginBottom:'20px'}}>Retriever</Typography>
                <Typography style={{color: '#5c563a', fontSize:'15px', textAlign:'left', marginBottom:'10px', margin:'auto', width:'65%'}}> <b>Description:</b> Web application that allows users to search for lost and found items, generating public posts that contain accurate contact information, location, and description of the object. A pin of the specified address (where the item was found/lost) is rendered on a Google Maps frame (2019 HackNYU project).<br/><br/>
                <b>Technologies:</b> HTML/CSS, JavaScript, Python Flask, Google Cloud API</Typography><br/>     

                <a href='https://github.com/hwwc518/Retriever' target='_blank' style={{textDecoration:'none'}}>Click here to view this project's source code.</a>

                <div style={{display:'inline-block', marginTop:'2vh'}}>
                  <MDBContainer>
                    <MDBCarousel
                      activeItem={1}
                      length={5}
                      showControls={true}
                      showIndicators={false}
                      style={{zIndex:'0', width:'65%', margin:'auto', marginTop:'1vh'}}
                    >
                      <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                          <MDBView>
                            <img className="d-block w-100" src={retriever1}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="2">
                          <MDBView>
                            <img className="d-block w-100" src={retriever2}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="3">
                          <MDBView>
                            <img className="d-block w-100" src={retriever3}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="4">
                          <MDBView>
                            <img className="d-block w-100" src={retriever4}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="5">
                          <MDBView>
                            <img className="d-block w-100" src={retriever5}/>
                          </MDBView>
                        </MDBCarouselItem>
                      </MDBCarouselInner>
                    </MDBCarousel>
                  </MDBContainer>
                </div>

              </Paper>
            </Grid>

            <Grid item xs={10} style={{marginTop:'5vh'}}>
              <Paper style={{paddingTop:'3vh', paddingBottom:'3vh'}}>
                <Typography style={{paddingLeft:'5px', paddingRight:'5px', color: '#9c9c87', fontSize:'25px', textAlign:'center', verticalAlign:'middle', marginBottom:'20px'}}>Sesame Street Blockbuster</Typography>
                <Typography style={{paddingLeft:'5px', paddingRight:'5px', color: '#9c9c87', fontSize:'15px', textAlign:'center', verticalAlign:'middle', marginBottom:'5px', fontFamily:'Helvetica'}}>(a Mobile and Desktop Game)</Typography><br/>

                <Typography style={{color: '#5c563a', fontSize:'15px', textAlign:'left', marginBottom:'10px', margin:'auto', width:'65%'}}>  <b>Description:</b> Recreated a Sesame Street-styled <i>Atari Breakout</i> game
                in homage to Sesame Street's older generation of fans for their 50th Anniversary. The game has 12 levels, one for each of the main muppets
                and includes three different power balls throughout. <i>Blockbuster</i> is currently live on SesameStreet.org/games.
                <br/><br/><b>Technologies:</b> GameMaker, Unity</Typography><br/>

                <a href='https://www.sesamestreet.org/games?id=25661' target='_blank' style={{textDecoration:'none'}}>Click here to play!</a>

                <div style={{display:'inline-block', marginTop:'2vh'}}>
                  <MDBContainer>
                    <MDBCarousel
                      activeItem={1}
                      length={4}
                      showControls={true}
                      showIndicators={false}
                      style={{zIndex:'0', width:'65%', margin:'auto', marginTop:'1vh'}}
                    >
                      <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                          <MDBView>
                            <img className="d-block w-100" src={sesame1}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="2">
                          <MDBView>
                            <img className="d-block w-100" src={sesame2}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="3">
                          <MDBView>
                            <img className="d-block w-100" src={sesame3}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="4">
                          <MDBView>
                            <img className="d-block w-100" src={sesame4}/>
                          </MDBView>
                        </MDBCarouselItem>
                      </MDBCarouselInner>
                    </MDBCarousel>
                  </MDBContainer>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={10} style={{marginTop:'5vh'}}>
              <Paper style={{paddingTop:'3vh', paddingBottom:'3vh'}}>
                <Typography style={{paddingLeft:'5px', paddingRight:'5px', color: '#9c9c87', fontSize:'25px', textAlign:'center', verticalAlign:'middle', marginBottom:'20px'}}>Head Drama</Typography>
                <a href='https://vinniezhang.github.io/HeadDrama' target='_blank' style={{textDecoration:'none', color:'#fa917a', fontSize:'15px', fontWeight:'bold'}}>Click here to test the live application.</a><br/><br/>
                <Typography style={{color: '#5c563a', fontSize:'15px', textAlign:'left', marginBottom:'10px', margin:'auto', width:'65%'}}>  <b>Description:</b> An interactive personality quiz in which the user's answers determines the succeeding design and layout of the website, culminating in a 
                  unique video net-art story, specifically generated according to the user's inputs.
                <br/><br/><b>Technologies:</b> HTML/CSS, p5 JavaScript, Adobe Photoshop</Typography><br/>

                <a href='https://github.com/vinniezhang/HeadDrama' target='_blank' style={{textDecoration:'none'}}>Click here to view this project's source code.</a>

                <div style={{display:'inline-block', marginTop:'2vh'}}>
                  <MDBContainer>
                    <MDBCarousel
                      activeItem={1}
                      length={6}
                      showControls={true}
                      showIndicators={false}
                      style={{zIndex:'0', width:'65%', margin:'auto', marginTop:'1vh'}}
                    >
                      <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                          <MDBView>
                            <img className="d-block w-100" src={drama1}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="2">
                          <MDBView>
                            <img className="d-block w-100" src={drama2}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="3">
                          <MDBView>
                            <img className="d-block w-100" src={drama3}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="4">
                          <MDBView>
                            <img className="d-block w-100" src={drama4}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="5">
                          <MDBView>
                            <img className="d-block w-100" src={drama5}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="6">
                          <MDBView>
                            <img className="d-block w-100" src={drama6}/>
                          </MDBView>
                        </MDBCarouselItem>
                      </MDBCarouselInner>
                    </MDBCarousel>
                  </MDBContainer>
                </div>
              
              </Paper>
            </Grid>

            <Grid item xs={10} style={{marginTop:'5vh'}}>
              <Paper style={{paddingTop:'3vh', paddingBottom:'3vh'}}>
                <Typography style={{paddingLeft:'5px', paddingRight:'5px', color: '#9c9c87', fontSize:'25px', textAlign:'center', verticalAlign:'middle', marginBottom:'20px'}}>Stress-Free TV</Typography>
                <a href='https://vinniezhang.github.io/StressFreeTV' target='_blank' style={{textDecoration:'none', color:'#79d4ab', fontSize:'15px', fontWeight:'bold'}}>Click here to test the live application.</a><br/><br/>
                <Typography style={{color: '#5c563a', fontSize:'15px', textAlign:'left', marginBottom:'10px', margin:'auto', width:'65%'}}> <b>Description:</b> Web application that allows users to choose different audio tracks to layer over each other, with the purpose of each user being able to customize a soundscape unique to him/her.
                All images and audio clips are self-produced.  
                <br/><br/><b>Technologies:</b> HTML/CSS, JavaScript, Adobe Photoshop</Typography><br/>

                <a href='https://github.com/vinniezhang/StressFreeTV' target='_blank' style={{textDecoration:'none'}}>Click here to view this project's source code.</a>
              
                <div style={{display:'inline-block', marginTop:'2vh'}}>
                  <MDBContainer>
                    <MDBCarousel
                      activeItem={1}
                      length={3}
                      showControls={true}
                      showIndicators={false}
                      style={{zIndex:'0', width:'65%', margin:'auto', marginTop:'1vh'}}
                    >
                      <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                          <MDBView>
                            <img className="d-block w-100" src={tv1}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="2">
                          <MDBView>
                            <img className="d-block w-100" src={tv2}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="3">
                          <MDBView>
                            <img className="d-block w-100" src={tv3}/>
                          </MDBView>
                        </MDBCarouselItem>
                      </MDBCarouselInner>
                    </MDBCarousel>
                  </MDBContainer>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={10} style={{marginTop:'5vh'}}>
              <Paper style={{paddingTop:'3vh', paddingBottom:'3vh'}}>
                <Typography style={{paddingLeft:'5px', paddingRight:'5px', color: '#9c9c87', fontSize:'25px', textAlign:'center', verticalAlign:'middle', marginBottom:'20px'}}>Adventures of Pablo</Typography>
                <a href='https://vinniezhang.github.io/AdventuresOfPablo' target='_blank' style={{textDecoration:'none', color:'#454e57', fontSize:'15px', fontWeight:'bold'}}>Click here to test the live application.</a><br/><br/>
                <Typography style={{color: '#5c563a', fontSize:'15px', textAlign:'left', marginBottom:'10px', margin:'auto', width:'65%'}}> <b>Description:</b> An interactive comic experience in which the user is responsible for determining the sequence 
                  of events/animations that execute. All images are self-produced.
                <br/><br/><b>Technologies:</b> HTML/CSS, JavaScript, Adobe Photoshop</Typography><br/>

                <a href='https://github.com/vinniezhang/AdventuresOfPablo' target='_blank' style={{textDecoration:'none'}}>Click here to view this project's source code.</a>

                <div style={{display:'inline-block', marginTop:'2vh'}}>
                  <MDBContainer>
                    <MDBCarousel
                      activeItem={1}
                      length={3}
                      showControls={true}
                      showIndicators={false}
                      style={{zIndex:'0', width:'65%', margin:'auto', marginTop:'1vh'}}
                    >
                      <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                          <MDBView>
                            <img className="d-block w-100" src={pablo1}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="2">
                          <MDBView>
                            <img className="d-block w-100" src={pablo2}/>
                          </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="3">
                          <MDBView>
                            <img className="d-block w-100" src={pablo3}/>
                          </MDBView>
                        </MDBCarouselItem>
                      </MDBCarouselInner>
                    </MDBCarousel>
                  </MDBContainer>
                </div>
              
              </Paper>
            </Grid>

          </Grid>

        </div>
      );
    }
}

export default ProjectsMain;