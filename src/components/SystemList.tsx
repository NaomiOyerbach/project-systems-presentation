import React, { Component, createRef } from 'react';
import SystemCard from './SystemCard';
import { SystemListState, system, systems, newSystemState } from '../modules/interface';
import Slider, { CustomArrowProps } from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ButtonBase, TextField, Button, ButtonGroup } from '@mui/material';
import { SystemDialogPopup, DivDarkBackground, Body } from './sys.style';
import Textarea from '@mui/joy/Textarea';
import { getValue } from '@testing-library/user-event/dist/utils';
// import { Button, TextareaAutosize } from '@material-ui/core';


// Custom arrow component for the previous arrow
const PrevArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => {
  return (
    <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
      <span className="arrow">&#8249;</span> {/* Left arrow icon */}
    </div>
  );
};

// Custom arrow component for the next arrow
const NextArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => {
  return (
    <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
      <span className="arrow">&#8250;</span> {/* Right arrow icon */}
    </div>
  );
};



class SystemList extends Component {

  state: SystemListState = {
    systemsList: [],
    showPopup: false,
    newSystem: {
      id: 0,
      name: '',
      description: '',
      image: '',
      link: '',
      isFavorite: false,
    },
  };

  componentDidMount() {
    const storedSystems = localStorage.getItem('systems');
    const allSystems = storedSystems !== null ? JSON.parse(storedSystems) : null;
    console.log(allSystems);
    allSystems === null ? localStorage.setItem('systems', JSON.stringify(systems)) : '';
    this.setState({ systemsList: storedSystems ? JSON.parse(storedSystems) : [] })
  }
  openDialog = () => {
    this.setState({ showPopup: true });
  };

  closeDialog = () => {
    this.setState({ showPopup: false });
  };
  // handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   this.setState((prevState) => ({
  //     newSystem: {
  //       ...prevState.newSystem,
  //       [name]: value,
  //     },
  //   }));
  // };

  closeDialogAndSaveNewSystem = () => {
    const { systemsList, newSystem } = this.state;
    // this.setState({id:systemsList.length })
    newSystem.id = systemsList.length
    const updatedSystemsList = [...systemsList, newSystem];
    console.log("new sys:  ", this.state.newSystem);

    this.setState({ systemsList: updatedSystemsList });
    localStorage.setItem('systems', JSON.stringify(updatedSystemsList));

    this.setState({
      showPopup: false,
      newSystem: {
        name: '',
        description: '',
        image: '',
        link: '',
        isFavorite: false,
      },
    });
  };



  render() {

    const { systemsList, showPopup, newSystem } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      accessibility: true,
      arrows: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
    };


    return (
      <Body>
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
          <DivDarkBackground>
            <SystemDialogPopup open={showPopup} onClose={this.closeDialog}>
              <h2>הוספת מערכת חדשה</h2>
              <TextField
                name='name'
                type='text'
                label='enter system name'
                value={newSystem.name}
                onChange={(event) =>
                  this.setState(() => ({
                    newSystem: {
                      ...newSystem,
                      name: event.target.value,
                    },
                  }))
                }
              >
                שם מערכת
              </TextField>
              <br />
              <br />
              <Textarea
                name='description'
                placeholder='Type in here…'
                variant='soft'
                minRows={3}
                value={newSystem.description}
                onChange={(event) =>
                  this.setState(() => ({
                    newSystem: {
                      ...newSystem,
                      description: event.target.value,
                    },
                  }))
                }
              />

              <br />
              <TextField
                name='image'
                type='file'
                typeof='jpg'
                value={newSystem.image}
                onChange={(event) =>
                  this.setState(() => ({
                    newSystem: {
                      ...newSystem,
                      image: event.target.value,
                    },
                  }))
                }
              />
              <br />
              <br />
              <br />
              <ButtonGroup variant='outlined' aria-label='outlined button group'>
                <Button
                  size='small'
                  variant='contained'
                  color='inherit'
                  onClick={this.closeDialogAndSaveNewSystem}
                >
                  אישור
                </Button>
                <br />
                <Button size='small' variant='contained' color='inherit' onClick={this.closeDialog}>סגור</Button>
              </ButtonGroup>

            </SystemDialogPopup>
          </DivDarkBackground>
        )}

      </Body>

    );
  }
}

export default SystemList;
