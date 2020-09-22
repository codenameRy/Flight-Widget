import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Countries from "./CountryAirportList";

let newCountries = Countries;

export class Autocomplete extends Component {
//   static propTypes = {
//     options: PropTypes.instanceOf(Array).isRequired
//   };
  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: ''
  };
  

  onChange = (e) => {
    console.log('onChanges');

    // const { options } = this.props;
    const userInput = e.currentTarget.value;

    const filteredOptions = newCountries.filter(
      (country) =>
      (country.iata_code.toLowerCase() || country.city.toLowerCase()).indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText
    });
  };
  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption]
      });
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,

      state: { activeOption, filteredOptions, showOptions, userInput }
    } = this;
    let optionList;
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="options">
            {filteredOptions.map((country, index) => {
              let className;
              if (index === activeOption) {
                className = 'option-active';
              }
              return (
                <li className={className} key={country.iata_code}  onClick={onClick}>
                  {country.city} {country.iata_code}
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="no-options">
            <em>No Option!</em>
          </div>
        );
      }
    }
    return (
      <React.Fragment>
      {/* <form onSubmit={handleSubmit}> */}
        <div className="search">
        <label>
        Airport
          <input
            type="text"
            className="search-box"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
          <input type="submit" value="" className="search-btn" />
          </label>
        </div>
        {optionList}
        <button>Submit</button>
        {/* </form> */}
      </React.Fragment>
    );
  }
}

export default Autocomplete;