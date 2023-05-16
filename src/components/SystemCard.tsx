import React, { Component } from 'react';
import { system, systemCardState } from '../modules/interface';
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'

interface SystemCardProps {
    system: system,
    isFavorite: boolean
}

class SystemCard extends Component<SystemCardProps, systemCardState> {

    state: systemCardState = {
        isFavorite: false
    }

    handleChangeFavorite() {
        const { isFavorite } = this.state;
        console.log("before", isFavorite);
        this.setState({ isFavorite: !isFavorite });
        console.log("after", !isFavorite);
    }
    componentDidMount() {
        this.props.system.isFavorite = this.state.isFavorite;
    }
    render() {
        const { system, isFavorite } = this.props;
        // const { isFavorite } = this.state || null;
        return (
            <div>
                <div>

                    <a href={system.link} rel='link' >
                        <img src={(`/assets/${system.image}`)} alt="System" width="100px" />
                        <h1>{system.name}</h1>
                        <p>{system.description}</p></a>
                    {this.state.isFavorite ? <img onClick={() => this.handleChangeFavorite()} src='/assets/לב.png' width="30px" /> : <img onClick={() => this.handleChangeFavorite()} src='/assets/לב_אפור.png' width="30px" />}
                </div>
            </div>
        );
    }
}



export default SystemCard;


