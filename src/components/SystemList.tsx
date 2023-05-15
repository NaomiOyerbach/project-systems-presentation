import React, { Component, createRef } from 'react';
import SystemCard from './SystemCard';
import { system, systems } from '../modules/interface';
import 'keen-slider/keen-slider.min.css';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

class SystemList extends Component {

  sliderRef = createRef<HTMLDivElement>();
  sliderInstance: KeenSliderInstance | null = null;

  componentDidMount() {
    this.sliderInstance = new KeenSlider(this.sliderRef.current!, {
      slides: 3,
      loop: true,
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
    // Retrieve the systems array from session storage
    const storedSystems = localStorage.getItem('systems');
    const systems = storedSystems ? JSON.parse(storedSystems) : [];

    return (
      <div ref={this.sliderRef} className="keen-slider">
        {systems.map((value: system, index: number) => (
          <div key={index} className="keen-slider__slide">
            <SystemCard system={value} isFavorite={false}/>
          </div>
        ))}
      </div>
    );
  }
}

export default SystemList;
