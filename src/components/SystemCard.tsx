import React, { Component } from 'react';
import { system, systemCardState } from '../modules/interface';
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import { SystemCardATagStyle, SystemCardStyle } from './sys.style';

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
        console.log("before", this.state.isFavorite);  
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
        const { system } = this.props;
        const imgUrl = `/assets/${system.image}`;
        return (
            <div>
                <SystemCardStyle imgUrl={imgUrl}>
                <SystemCardATagStyle href={system.link} rel='link' >
                        <h1>{system.name}</h1>
                        <p>{system.description}</p>         
                    </SystemCardATagStyle>
                     {this.state.isFavorite ?
                            <img onClick={() => this.handleChangeFavorite()} src='/assets/לב.png' width="50px" /> :
                            <img onClick={() => this.handleChangeFavorite()} src='/assets/לב_אפור.png' width="50px" />}
                </SystemCardStyle>
            </div>
        );
    }
}



export default SystemCard;


