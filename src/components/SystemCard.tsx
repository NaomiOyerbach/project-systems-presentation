import React, { Component } from 'react';
import { system, systemCardState } from '../modules/interface';
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import { SystemCardStyle } from './sys.style';

interface SystemCardProps {
    system: system
}

class SystemCard extends Component<SystemCardProps, systemCardState> {
    /**
     *
     */
    constructor(props: SystemCardProps) {
        super(props);

        this.state = {
            isFavorite: this.props.system.isFavorite
        }
    }
  
    private handleChangeFavorite = () => {
        this.setState(
          (prevState) => ({ isFavorite: !prevState.isFavorite }),
          () => {
            console.log("after", this.state.isFavorite);
      
            // Update the system in the local storage
            const storedSystems = localStorage.getItem('systems');
            const systems = storedSystems ? JSON.parse(storedSystems) : [];
            systems[this.props.system.id].isFavorite = this.state.isFavorite;
            localStorage.setItem('systems', JSON.stringify(systems));
          }
        );
      };

    render() {
        const system = this.props.system;
        return (
            <div>
                <SystemCardStyle>
                    <a href={system.link} rel='link' >
                        <img src={(`/assets/${system.image}`)} alt="System" width="100px" />
                        <h1>{system.name}</h1>
                        <p>{system.description}</p></a>
                    {this.state.isFavorite ?
                        <img onClick={() => this.handleChangeFavorite()} src='/assets/לב.png' width="30px" /> :
                        <img onClick={() => this.handleChangeFavorite()} src='/assets/לב_אפור.png' width="30px" />}
                </SystemCardStyle>
            </div>
        );
    }
}



export default SystemCard;


