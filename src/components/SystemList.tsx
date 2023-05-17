import React, { Component, createRef } from 'react';
import SystemCard from './SystemCard';
import { systemListState, system, systems } from '../modules/interface';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ButtonBase, TextField, Button } from '@mui/material';
import { SystemDialogPopup } from './sys.style';
import Textarea from '@mui/joy/Textarea';
// import { Button, TextareaAutosize } from '@material-ui/core';


class SystemList extends Component {

  state: systemListState = {
    systemsList: [],
    showPopup: false,
  }
  componentDidMount() {
    const storedSystems = localStorage.getItem('systems');
    const allSystems = storedSystems ? JSON.parse(storedSystems) : null;
    allSystems ? localStorage.setItem('systems', JSON.stringify(allSystems)) : '';
    this.setState({ systemsList: storedSystems ? JSON.parse(storedSystems) : [] })
  }
  openDialog = () => {
    this.setState({ showPopup: true });
  };

  closeDialog = () => {
    this.setState({ showPopup: false });
  };
  closeDialogAndSaveNewSystem = () => {
    const { systemsList } = this.state;
    const newSystem: system = {
      id: systemsList.length,
      name: 'New System',
      description: 'New System Description',
      image: 'default-image.png',
      link: 'https://example.com',
      isFavorite: false
    }

    const updatedSystemsList = systemsList.push(newSystem);

    this.setState({ systemsList: updatedSystemsList });
    localStorage.setItem('systems', JSON.stringify(updatedSystemsList));

    this.setState({ showPopup: false });
  }
  render() {
    console.log("systems list!");
    console.log(this.state.systemsList)

    const { systemsList, showPopup } = this.state
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
          {systemsList.map((sys: system, index: number) => (
            <div key={index}>
              <SystemCard key={index} system={sys} />
            </div>
          ))}
        </Slider>
        <br />
        <br />
        <br />
        <br />
        <Button size='medium' variant='contained' color='inherit' onClick={() => this.setState({ showPopup: true })}>הוספת מערכת</Button>
        {showPopup && (
          <SystemDialogPopup open={showPopup} onClose={this.closeDialog}>
            <h2>הוספת מערכת חדשה</h2>
            {/* <TextField></TextField> */}
            <TextField type='text' label='enter system name'>שם מערכת</TextField>
            <br />
            <br />
            <Textarea name="Solid" placeholder="Type in here…" variant="soft" minRows={3} />

            <br />
            <TextField type='file' typeof='jpg' />
            <br />
            <br />
            <br />
            <div>
              <Button size='small' variant='contained' color='inherit' onClick={() => this.closeDialogAndSaveNewSystem}>אישור</Button>
              <br />
              <Button size='small' variant='contained' color='inherit' onClick={this.closeDialog}>סגור</Button>
            </div>

          </SystemDialogPopup>
        )}
      </div>

    );
  }
}

export default SystemList;
