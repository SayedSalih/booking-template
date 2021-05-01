import React, { Component } from 'react';
export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {value: "default"};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    let dropdownData = this.props.dropdownData;
    return (
      <div className = "wrapper-dropdown">
        <label>
          <select className = "dropdown-grid" value={this.state.value} onChange={this.handleChange}>
          {
            dropdownData && dropdownData.map((item, index)=>{
              return(
                index === 0 ? (
                  <option key={index} value={item.value} disabled>{item.label}</option>
                ) : (
                  <option key={index} value={item.value}>{item.label}</option>
                )
              )             
            })
          }  
          </select>
        </label>
      </div>
    );
  }
}


