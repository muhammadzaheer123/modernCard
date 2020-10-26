import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import bg1 from '../../assets/img/bg.jpg';
import bg2 from '../../assets/img/bg2.jpg';
import bg3 from '../../assets/img/bg3.jpg';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Shop (){
    return(

  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={2000}
  >
    <div><img src={bg1} style={{width:500,height:500}} /></div>
    <div><img src={bg2} /></div>
    <div><img src={bg3} /></div>
  </AutoplaySlider>

    )}