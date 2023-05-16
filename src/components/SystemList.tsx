import React, { Component, createRef } from 'react';
import SystemCard from './SystemCard';
import { systemListState, system, systems } from '../modules/interface';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TextField } from '@mui/material';

class SystemList extends Component {

  state: systemListState = {
    systemsList: [],
    showPopup: false
  }
  componentDidMount() {
    const storedSystems = localStorage.getItem('systems');
    const systems = storedSystems ? JSON.parse(storedSystems) : [];
  }

  render() {
    console.log("systems list!");
    console.log(this.state.systemsList)

    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      accessibility: true,
      arrows: true,
    };
    return (
      <div>


        <Slider {...settings}>
          {systems.map((sys: system, index: number) => (
            <div key={index}>
              <SystemCard key={index} system={sys} isFavorite={sys.isFavorite} />
            </div>
          ))}
        </Slider>
        <br />
        <br />
        <br />
        <br />
        <button onClick={() => this.setState({ showPopup: true })}>הוספת מערכת</button>
        {
          this.state.showPopup ? <dialog>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />

            {/* <TextField type='text' placeholder='Name'/> */}
          </dialog> : ''
        }
      </div>

    );
  }
}

export default SystemList;
