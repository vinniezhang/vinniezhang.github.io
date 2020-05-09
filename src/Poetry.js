import React, { Component } from 'react';
import Image from 'material-ui-image';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

import tokyo from './poetry/on_the_streets_of_tokyo.jpg';
import foreigner from './poetry/foreigner.jpg';
import friday_night from './poetry/friday_night.jpg';
import japanese_metro from './poetry/japanese_metro.jpg';
import kyoto_orange from './poetry/kyoto_orange.jpg';
import miss_guy from './poetry/miss_guy.jpg';
import pomegranate_memories from './poetry/pomegranate_memories.jpg';
import sticky_bones from './poetry/sticky_bones.jpg';
import fish_in_fuzhou from './poetry/the_fish_in_fuzhou.jpg';
import untitled from './poetry/untitled.jpg';
import in_the_morning from './poetry/In_the_Morning_When_I_Wake.jpg';
import my_kitchenware_clangs_for_you from './poetry/My_Kitchenware_Clangs_for_You.jpg';
import sixpm_is_when_the_city_turns_gold from './poetry/6pm_is_when_the_city_turns_gold.jpg';
import zhangPoem from "./poetry/zhangPoem.jpg";
import shadows from '@material-ui/core/styles/shadows';

const poetryTileData = [
  {
    img: in_the_morning,
    title: 'In the Morning When I Wake',
    cols: 1,
  },
  {
    img: zhangPoem,
    title: 'Zhang',
    cols: 1,
  },
  {
    img: my_kitchenware_clangs_for_you,
    title: 'My Kitchenware Clangs for You',
    cols: 1,
  },
  {
    img: sixpm_is_when_the_city_turns_gold,
    title: '6pm is when the city turns gold',
    cols: 1,
  },
  {
    img: fish_in_fuzhou,
    title: 'The Fish in Fuzhou',
    cols: 1,
  },
  {
    img: tokyo,
    title: 'On the Streets of Tokyo',
    cols: 1,
  },
  {
    img: foreigner,
    title: 'Foreigner',
    cols: 1,
  },
  {
    img: friday_night,
    title: 'Friday Night',
    cols: 1,
  },
  {
    img: sticky_bones,
    title: 'Sticky Bones',
    cols: 1,
  },
  {
    img: kyoto_orange,
    title: 'Kyoto Orange',
    cols: 1,
  },
  {
    img: miss_guy,
    title: 'Miss Guy',
    cols: 1,
  },
  {
    img: untitled,
    title: 'Untitled',
    cols: 1,
  },
  {
    img: japanese_metro,
    title: 'Japanese Metro',
    cols: 1,
  },
  {
    img: pomegranate_memories,
    title: 'Pomegranate Memories',
    cols: 1,
  }
]

class PoetryMain extends Component{
  render()
    {
      return(
        <div>

          <Grid direction='row' alignItems='center' justify='center' style={{width:'100%', marginBottom:'20px', paddingLeft:'5%', paddingRight:'5%'}} xs={12}>
            <p style={{margin:'auto', marginTop: '130px', marginBottom:'15px', color: '#9c9c87', opacity: '.5', fontWeight:'bold', fontSize:'2vw'}}>P O E T R Y</p>
            <p style={{margin:'auto', color: '#9c9c87', opacity: '.5', fontWeight:'bold', fontSize:'1vw'}}>(select a poem to open in a new tab)</p>          
          </Grid>

          <div>
            <GridList direction='row' alignItems='center' justify='center' style={{width:'100%', margin:'auto', marginBottom:'20px', paddingLeft:'3%', paddingRight:'3%'}} cellHeight={'40%'} cols={3}>
              { poetryTileData.map(tile => (

                <GridListTile style={{padding:'10px'}} key={tile.img} cols={tile.cols || 1}>
                  <a href={tile.img} target="__blank">
                    <img style={{width:'75%', marginTop:'1%', boxShadow:'8px 8px 8px #888888'}} src={tile.img} alt={tile.title} />
                  </a>
                </GridListTile>
                
                // this implements a carousel, but the prev and next controllers don't show bc of white bg
                /* <div style={{display:'inline-block', width: '40%', marginTop:'5vh'}}>
                  <MDBContainer>
                    <MDBCarousel
                      activeItem={0}
                      length={poetryTileData.length-1}
                      showControls={true}
                      showIndicators={false}
                      style={{zIndex:'0', margin:'auto', marginTop:'1vh'}}
                    >
                        <MDBCarouselInner>
                        {poetryTileData.map( tile => (
                          <MDBCarouselItem itemId={poetryTileData.indexOf(tile)}>
                            <MDBView>
                              <img style={{border:'solid 2px grey'}} className="d-block w-100" src={tile.img}/>
                            </MDBView>
                          </MDBCarouselItem>

                          ))}
                        </MDBCarouselInner>    
                    </MDBCarousel>
                  </MDBContainer>
                </div> */

              ))}
            </GridList>
          </div>

        </div>
      );
    }
}

export default PoetryMain;