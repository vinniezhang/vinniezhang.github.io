import React, { Component } from 'react';
import Image from 'material-ui-image';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

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

const poetryTileData = [
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
  },
]

class PoetryMain extends Component{
  render()
    {
      return(
        <div>

          <Grid direction='row' alignItems='center' justify='center' style={{width:'100%', marginBottom:'20px', paddingLeft:'5%', paddingRight:'5%'}} xs={12}>
            <p style={{margin:'auto', marginTop: '130px', marginBottom:'25px', color: '#9c9c87', opacity: '.5', fontWeight:'bold', fontSize:'2vw'}}>P O E T R Y</p>
          </Grid>

          <div>
            <GridList direction='row' alignItems='center' justify='center' style={{width:'100%', margin:'auto', marginBottom:'20px', paddingLeft:'5%', paddingRight:'5%'}} cellHeight={'30%'} cols={1}>
              {poetryTileData.map(tile => (
                <GridListTile style={{padding:'10px'}} key={tile.img} cols={tile.cols || 1}>
                  <img style={{width:'55%', marginTop:'1%', boxShadow:'8px 8px 8px #888888'}} src={tile.img} alt={tile.title} />
                </GridListTile>
              ))}
            </GridList>
          </div>

        </div>
      );
    }
}

export default PoetryMain;