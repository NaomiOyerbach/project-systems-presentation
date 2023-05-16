import React, { Component, createRef } from 'react';
import SystemCard from './SystemCard';
import { systemListState, system, systems } from '../modules/interface';
import Slider from "react-slick"


import 'keen-slider/keen-slider.min.css';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

class SystemList extends Component {

  sliderRef = React.createRef<HTMLDivElement>();
  sliderInstance: KeenSliderInstance | null = null;

  state: systemListState = {
    systemsList: [],
    showPopup: false
  }
  componentDidMount() {
    const storedSystems = localStorage.getItem('systems');
    const systems = storedSystems ? JSON.parse(storedSystems) : [];
    //.setState({ systemsList: systems })
    // if (systems === null)
    this.sliderInstance = new KeenSlider(this.sliderRef.current!, {
      slides: 1,
      loop: true,
      // slidesToShow:2,
      // slideChanged:3,
      breakpoints: {
        '(min-width: 768px)': {
          slides: systems.length,
        },
        '(min-width: 1200px)': {
          slides: systems.length,
        },
      },
    });

  }
  componentWillUnmount() {
    if (this.sliderInstance) {
      this.sliderInstance.destroy();
    }
  }

  render() {
    //  localStorage.setItem('systems', JSON.stringify(systems))

    // Retrieve the systems array from session storage
    // const storedSystems = localStorage.getItem('systems');
    // const systems = storedSystems ? JSON.parse(storedSystems) : [];
    console.log("systems list!");
    console.log(this.state.systemsList)

    const settings = {
      dots: true,
      // infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div>

        <div ref={this.sliderRef} className="keen-slider">
          {systems.map((value: system, index: number) => (
            <div key={index} className="keen-slider__slide">
              <SystemCard system={value} isFavorite={value.isFavorite} />
            </div>
          ))}
        </div>
        {/* <Slider {...settings}>
          {systems.map((sys: system, index: number) => (
            <div key={index}>
              <SystemCard system={sys} isFavorite={sys.isFavorite} />
              {sys.name}
            </div>           
          ))}
        </Slider> */}
        <button onClick={() => this.setState({ showPopup: true })}>הוספת מערכת</button>
        {
          this.state.showPopup ? <dialog></dialog> : ''
        }
      </div>

    );
  }
}

export default SystemList;
