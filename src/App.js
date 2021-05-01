import React, { Component } from 'react';
import Main from "./components/main/main";
import Dropdown from './components/dropdown/dropdown';
import Header from './components/header/header';
import travelData from './travelData';
import Dropdownlist from './components/dropdownpager/dropdownpager';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="dropdown-container">
          <Dropdown dropdownData={travelData.dropdownFrom}/>
          <Dropdown dropdownData={travelData.dropdownTo}/>
          <Dropdown dropdownData={travelData.dropdownPassengers}/>
          <Dropdown dropdownData={travelData.dropdowndepDate}/>
          <Dropdown dropdownData={travelData.dropdownretDate}/>
          <Dropdown dropdownData={travelData.dropdownClass}/>
        </div>
        <div className="grid-container">
          <Main placeData={travelData.places}/>
        </div>
        <div className="dropdown-container">
          <Dropdownlist/>
        </div>
      </div>
    );
  }
}
export default App;