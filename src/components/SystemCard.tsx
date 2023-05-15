import React, { Component } from 'react';
import { system } from '../modules/interface';
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'

interface SystemCardProps {
    system: system,
    isFavorite: boolean
}

class SystemCard extends Component<SystemCardProps> {
    render() {
        const { system, isFavorite } = this.props;

        return (
            <div>
                <div>

                    <a href={system.link} rel='link' >
                        <img src={(`/assets/${system.image}`)} alt="System" width="100px" />
                        <h1>{system.name}</h1>
                        <p>{system.description}</p></a>
                    {isFavorite ? <img src='/assets/לב.png' width="30px" /> : <img src='/assets/לב_אפור.png' width="30px" />}
                </div>
            </div>
        );
    }
}



export default SystemCard;


